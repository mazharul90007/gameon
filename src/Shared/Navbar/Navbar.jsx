import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import {
    MdOutlineKeyboardDoubleArrowDown,
    MdOutlinePriceChange,
    MdOutlineMovieCreation,
    MdOutlineEventAvailable,
    MdOutlineDescription,
    MdOutlineContactSupport,
    MdDashboard,
    MdLogout,
} from "react-icons/md";
import { RiCompassDiscoverLine } from "react-icons/ri";
import { GoInfo } from "react-icons/go";
import { IoHomeOutline } from "react-icons/io5";
import { ImEnter } from "react-icons/im";
import { CgProfile } from "react-icons/cg";
import useAuth from "../../Hooks/useAuth";

const Navbar = () => {
    const { darkMode, setDarkMode, } = useAuth();
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    const isHomePage = ["/entertainment", "/login", "/register", "/travel", "/events"].includes(location.pathname);

    // Scroll effect handler
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

    // Theme detection
    useEffect(() => {
        const savedTheme = localStorage.getItem("Theme");
        setDarkMode(savedTheme === "dark_mode");
    }, [setDarkMode, isHomePage]);

    const activeMode = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        localStorage.setItem("Theme", newMode ? "dark_mode" : "light_mode");
    };

    // const handleLogout = () => {
    //     logOut()
    //         .then(() => setUser(null))
    //         .catch(console.error);
    //     setMenuOpen(false);
    //     setDropdownOpen(false);
    // };

    const closeMenu = () => setMenuOpen(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    // Dropdown outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            const dropdown = document.getElementById("dropdownMenu");
            const button = document.getElementById("dropdownToggle");
            if (
                dropdown &&
                button &&
                !dropdown.contains(event.target) &&
                !button.contains(event.target)
            ) {
                // setDropdownOpen(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    const navLinks = [
        { to: "/", label: "Home", icon: <IoHomeOutline /> },
        { to: "/travel", label: "Travel", icon: <RiCompassDiscoverLine /> },
        { to: "/events", label: "Event", icon: <MdOutlineEventAvailable /> },
        { to: "/entertainment", label: "Entertainment", icon: <MdOutlineMovieCreation /> },
        { to: "/about", label: "About", icon: <MdOutlineDescription /> },
        { to: "/contact", label: "Contact", icon: <MdOutlineContactSupport /> },
    ];

    const navLinkClasses = ({ isActive }) =>
        `flex items-center gap-2 hover:text-main py-1 px-2 hover:border-b-2 hover:border-main rounded transform transition-transform duration-300 ${isActive ? "text-main" : ""}`;

    const renderLinks = (
        <>
            {navLinks.map(({ to, label, icon }) => (
                <NavLink key={to} to={to} className={navLinkClasses} onClick={closeMenu}>
                    <div className="flex gap-1 text-lg items-center">
                        {icon} <span>{label}</span>
                    </div>
                </NavLink>
            ))}
        </>
    );

    return (
        <nav
            className={`px-4 md:px-14 py-1 md:py-4 fixed top-0 z-40 w-full transition-all duration-300 ${scrolled
                    ? darkMode
                        ? "bg-[#1A1A1A] shadow-lg"
                        : "bg-white shadow-lg"
                    : "bg-transparent"
                }`}
        >
            <div className="flex items-center justify-between">
                {/* Logo */}
                <div className="">
                    <Link
                        to="/"
                        className={`text-3xl md:text-4xl font-bold flex items-center font-teko gap-2 text-main`}
                    >
                        GameOn
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className={`hidden lg:flex space-x-3 font-medium ${scrolled ? darkMode ? "text-white" : "text-black" : 'text-white'
                    }`}>
                    {renderLinks}
                </div>

                {/* Dark Mode Toggle */}
                <button
                    onClick={activeMode}
                    aria-label="Toggle dark mode"
                    className={`border border-dashed ${scrolled ? darkMode ? "border-white" : "border-black" : 'border-white'
                        } text-base md:text-xl p-2 ml-4 rounded-full shadow hover:scale-110 transition-transform ${scrolled ? darkMode ? "text-white" : "" : 'text-white'
                        }`}
                >
                    {darkMode ? <FaSun /> : <FaMoon />}
                </button>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={toggleMenu}
                    className="btn btn-ghost btn-circle lg:hidden ml-4"
                    aria-label="Toggle menu"
                >
                    {menuOpen ? (
                        <FaTimes size={24} className={scrolled ? darkMode ? 'text-white' : '' : 'text-white'} />
                    ) : (
                        <FaBars size={24} className={scrolled ? darkMode ? 'text-white' : '' : 'text-white'} />
                    )}
                </button>
            </div>

            {/* Backdrop */}
            {menuOpen && <div className="fixed inset-0 z-30" onClick={closeMenu}></div>}

            {/* Mobile Menu */}
            <div
                className={`fixed top-20 right-0 shadow-xl p-4 rounded-l-lg flex flex-col space-y-4 lg:hidden transition-all duration-500 ease-in-out transform z-40 ${menuOpen ? "translate-x-0" : "translate-x-full"
                    } ${darkMode ? "text-dark-primary bg-dark-surface" : "text-black bg-background"
                    }`}
                onClick={(e) => e.stopPropagation()}
                style={{ pointerEvents: menuOpen ? "auto" : "none" }}
            >
                {renderLinks}
            </div>
        </nav>
    );
};

export default Navbar;