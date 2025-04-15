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
import noImage from "../../assets/Common_image/noImage.png";
import { CgProfile } from "react-icons/cg";
import useAuth from "../../Hooks/useAuth";

const Navbar = () => {
    const { darkMode, setDarkMode, user, logOut, setUser } = useAuth();
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const location = useLocation();

    const isHomePage = ["/entertainment", "/login", "/register", "/travel", "/events"].includes(location.pathname);

    useEffect(() => {
        const savedTheme = localStorage.getItem("Theme");
        setDarkMode(savedTheme === "dark_mode");
    }, [setDarkMode, isHomePage]);

    const activeMode = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        localStorage.setItem("Theme", newMode ? "dark_mode" : "light_mode");
    };

    const handleLogout = () => {
        logOut()
            .then(() => setUser(null))
            .catch(console.error);
        setMenuOpen(false);
        setDropdownOpen(false);
    };

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
                setDropdownOpen(false);
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
        // { to: "/pricing", label: "Pricing", icon: <MdOutlinePriceChange /> },
        { to: "/about", label: "About", icon: <MdOutlineDescription /> },
        { to: "/contact", label: "Contact", icon: <MdOutlineContactSupport /> },
    ];

    const navLinkClasses = ({ isActive }) =>
        `flex items-center gap-2 hover:text-green-700 ${isActive ? "text-green-700" : ""}`;

    const renderLinks = (
        <>
            {navLinks.map(({ to, label, icon }) => (
                <NavLink key={to} to={to} className={navLinkClasses} onClick={closeMenu}>
                    <div className="flex gap-1 text-base items-center">
                        {icon} <span>{label}</span>
                    </div>
                </NavLink>
            ))}

            {user ? (
                <div className="relative">
                    <div
                        id="dropdownToggle"
                        className="w-10 h-10 rounded-full overflow-hidden cursor-pointer border"
                        onClick={() => setDropdownOpen((prev) => !prev)}
                    >
                        <img
                            src={user?.photoURL || noImage}
                            alt="User"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div
                        id="dropdownMenu"
                        className={`absolute top-12 right-0 bg-base-100 rounded-md shadow-lg border  transition-all duration-300 z-50 ${darkMode ? 'bg-dark-surface border-dark-border' : 'border-gray-200'} ${dropdownOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"
                            }`}
                    >
                        <div className="p-4 text-center">
                            <img
                                src={user?.photoURL ? user.photoURL : noImage}
                                alt="User Avatar"
                                className="w-16 h-16 mx-auto rounded-full border mb-2"
                            />
                            <h4 className={`font-semibold ${darkMode ? 'text-dark-primary' : 'text-gray-800'}`}>{user.displayName}</h4>
                            <p className={`text-sm ${darkMode ? 'text-dark-primary' : 'text-gray-500'}`}>{user.email}</p>
                        </div>
                        <div className={`border-t ${darkMode ? 'border-dark-secondary' : 'border-gray-200'}`}>
                            <ul className={`p-4 text-sm md:text-base space-y-2 ${darkMode ? 'text-dark-primary' : 'text-gray-600'}`}>

                                <li><Link to="/dashboard" className="hover:text-supporting flex items-center gap-2"><span><MdDashboard /></span>Dashboard</Link></li>

                                <li><Link to="/dashboard/profile" className=" hover:text-supporting flex items-center gap-2"><span><CgProfile /></span>Profile</Link></li>

                                <li><button onClick={handleLogout} className="hover:text-supporting flex items-center gap-2"><span><MdLogout /></span>Logout</button></li>
                            </ul>
                        </div>
                    </div>
                </div>
            ) : (
                <NavLink to="/login" className={navLinkClasses} onClick={closeMenu}>
                    <div className="flex gap-1 items-center text-lg">
                        <ImEnter /> <span>Login</span>
                    </div>
                </NavLink>
            )}
        </>
    );

    return (
        <nav
            className={`navbar shadow-lg px-4 md:px-14 py-1 md:py-4 fixed top-0 z-40 w-full bg-cover bg-center ${darkMode ? "bg-[#1A1A1A]" : "bg-background"
                }`}
        // style={darkMode ? { backgroundImage: `url(${nightSky})` } : {}}
        >
            {/* Logo */}
            <div className="flex-1">
                <Link to="/" className="text-xl md:text-3xl font-bold text-main flex items-center font-teko gap-2">
                    GameOn
                </Link>
            </div>

            {/* Desktop Navigation */}
            <div className={`hidden lg:flex space-x-6 text-sm font-medium ${darkMode ? "text-white" : "text-black"}`}>
                {renderLinks}
            </div>

            {/* Dark Mode Toggle */}
            <button
                onClick={activeMode}
                aria-label="Toggle dark mode"
                className={`border border-dashed ${darkMode ? "border-white" : "border-black"} text-base md:text-xl p-2 ml-4 rounded-full shadow hover:scale-110 transition-transform`}
            >
                {darkMode ? <FaSun className="text-white" /> : <FaMoon className="text-black" />}
            </button>

            {/* Mobile Menu Toggle */}
            <button onClick={toggleMenu} className="btn btn-ghost btn-circle lg:hidden ml-4" aria-label="Toggle menu">
                {menuOpen ? <FaTimes size={24} className={darkMode && 'text-white'} /> : <FaBars size={24} className={darkMode && 'text-white'} />}
            </button>

            {/* Backdrop */}
            {menuOpen && <div className="fixed inset-0 z-30" onClick={closeMenu}></div>}

            {/* Mobile Menu */}
            <div
                className={`fixed top-20 right-0 shadow-xl p-4 rounded-l-lg flex flex-col space-y-4 lg:hidden transition-all duration-500 ease-in-out transform z-40 ${menuOpen ? "translate-x-0" : "translate-x-full"
                    } ${darkMode ? "text-dark-primary bg-dark-surface" : "text-black bg-background"}`}
                onClick={(e) => e.stopPropagation()}
                style={{ pointerEvents: menuOpen ? "auto" : "none" }}
            >
                {renderLinks}
            </div>
        </nav>
    );
};

export default Navbar;
