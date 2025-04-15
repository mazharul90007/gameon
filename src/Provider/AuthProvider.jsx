import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../Pages/Authentication/firebase";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
import useAxiosPublic from "../Hooks/useAxiosPublic";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const axiosPublic = useAxiosPublic();


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    const logOut = async () => {
        setLoading(true);
        return signOut(auth);
    };

    const updateUserProfile = (name, photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        });
    };

    // onAuthStateChange
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser?.email) {
                setUser(currentUser);
                await axiosPublic.post('/jwt',
                    { email: currentUser.email },
                    { withCredentials: true }
                )
                    .then(res => {
                        console.log('login token', res.data);
                        setLoading(false)
                    })
            } else {
                setUser(currentUser);
                await axiosPublic.post('/logout',
                    {},
                    {
                        withCredentials: true,
                    }
                )
                    .then(res => {
                        console.log('logout', res.data)
                        setLoading(false)
                    })
            }
            setLoading(false);
        });
        return () => {
            return unsubscribe();
        };
    }, [user?.displayName, user?.photoURL, axiosPublic]);

    const authInfo = {
        createUser,
        signIn,
        signInWithGoogle,
        logOut,
        darkMode,
        setDarkMode,
        user,
        loading,
        setLoading,
        updateUserProfile,

    }

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    )
};

export default AuthProvider;