import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../firebase/config'; // Import your Firebase auth configuration
import { useTranslation } from 'react-i18next';
import Loading from './Loading';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);

            console.log(user)
        });

        return unsubscribe;
    }, []);

    if (loading) {
        return <Loading />
    }

    return (
        <AuthContext.Provider value={{ currentUser, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

export default AuthContext;

