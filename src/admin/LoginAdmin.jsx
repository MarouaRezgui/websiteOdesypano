import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config'; // Adjust the import path as needed
import Navbar from '../components/navbar';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const LoginPage = () => {
    const { t, i18n } = useTranslation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/admin_dashboard')
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <>
            <Navbar />
            <div className="bg-gray-100 flex items-center justify-center min-h-screen">
                <div className="bg-white flex items-center justify-center shadow-md rounded-lg flex w-1/2 h-3/4">
                    <div className="hidden md:block w-full">
                        <img
                            src="/img/logo.png"
                            alt="Login"

                            height={"30vh"}
                        />
                    </div>
                    <div className="w-full md:w-1/2 p-5">
                        <h2 className="text-2xl font-bold text-center mb-6">ODESYPANO {t('Admin Dashboard')}</h2>
                        <form onSubmit={handleSubmit}>
                            {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">{t('Email')}</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder={t('Email')}
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">{t('Password')}</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder={t('Password')}
                                />
                            </div>
                            <div className="flex items-center justify-center">
                                <button
                                    type="submit"
                                    className="py-3 px-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                >
                                    {t('Login')}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>

    );
};

export default LoginPage;
