import React, { useState } from 'react';
import { FaHome, FaUsers, FaCogs, FaSignOutAlt, FaImage, FaVideo, FaSchool, FaFilePdf, FaCalendar, FaImages, FaBookReader, FaDiagnoses } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/config';
import AdminConcours from './AdminConcours';
import AdminDashboard from './AdminDashboard'; // Import your admin components
import AdminImages from './AdminImages';
import AdminVideos from './AdminVideos';
import { useTranslation } from 'react-i18next';
import AdminActualites from './AdminActualites';
import AdminJourInformation from './jour_information_admin';
import AdminJourFormation from './jours_formations_admin';
import AdminHomeCarouselImages from './AdminHomeCarouselImages';
import AppelOffreAdmin from './AppelOffreAdmin';
import AdminRapports from './AdminRapports';
import { FaRoadSpikes, FaStackExchange, FaUserGroup } from 'react-icons/fa6';
import AdminPublications from './AdminPublications';
import AdminForums from './AdminForums';
import AdminComplaints from './AdminComplaints';

const AdminLayout = () => {
    const [activeTab, setActiveTab] = useState('dashboard');
    const { t, i18n } = useTranslation();

    const navigate = useNavigate()
    const logout = () => {
        auth
            .signOut()
            .then(() => {
                navigate("/login", { replace: true });
            })
            .catch((error) => {
                // An error happened.
            });
    };


    const renderContent = () => {
        switch (activeTab) {
            case 'images':
                return <AdminImages />;
            case 'videos':
                return <AdminVideos />;
            case 'jour_formation':
                return <AdminJourFormation />;
            case 'jour_information':
                return <AdminJourInformation />;
            case 'actualites':
                return <AdminActualites />;
            case 'concours':
                return <AdminConcours />;
            case 'home_carousel':
                return <AdminHomeCarouselImages />;
            case 'appel_offre':
                return <AppelOffreAdmin />;
            case 'rapports':
                return <AdminRapports />;
            case 'publications':
                return <AdminPublications />
            case 'forums':
                return <AdminForums />
            case 'complaints':
                return <AdminComplaints />
            default:
                return <AdminActualites />;
        }
    };

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem('language', lng);
    };

    return (
        <div className="flex h-screen bg-gray-100">

            <div className="w-64  bg-gray-800 text-white flex flex-col">
                <div className="p-4 text-center font-bold text-lg">ODESYPANO</div>
                <nav className="flex-1">
                    <ul>
                        <li className={`p-3 hover:bg-gray-700 ${activeTab === 'forums' ? 'bg-gray-700' : ''}`}>
                            <button onClick={() => setActiveTab('forums')} className="flex items-center w-full text-left">
                                <FaUserGroup className="mr-5" color='lightblue' />
                                {t('Séminaires et forums')}
                            </button>
                        </li>
                        <li className={`p-3 hover:bg-gray-700 ${activeTab === 'actualites' ? 'bg-gray-700' : ''}`}>
                            <button onClick={() => setActiveTab('actualites')} className="flex items-center w-full text-left">
                                <FaVideo className="mr-5" color='lightblue' />
                                {t('actualites')}
                            </button>
                        </li>
                        <li className={`p-3 hover:bg-gray-700 ${activeTab === 'home_carousel' ? 'bg-gray-700' : ''}`}>
                            <button onClick={() => setActiveTab('home_carousel')} className="flex items-center w-full text-left">
                                <FaImages className="mr-5" color='lightblue' />
                                {t('home_carousel_images')}
                            </button>
                        </li>

                        <li className={`p-3 hover:bg-gray-700 ${activeTab === 'appel_offre' ? 'bg-gray-700' : ''}`}>
                            <button onClick={() => setActiveTab('appel_offre')} className="flex items-center w-full text-left">
                                <FaFilePdf className="mr-5" color='lightblue' />
                                {t("Appel d'offres")}
                            </button>
                        </li>

                        <li className={`p-3 hover:bg-gray-700 ${activeTab === 'complaints' ? 'bg-gray-700' : ''}`}>
                            <button onClick={() => setActiveTab('complaints')} className="flex items-center w-full text-left">
                                <FaRoadSpikes className="mr-5" color='lightblue' />
                                {t("complaintList")}
                            </button>
                        </li>



                        <li className={`p-3 hover:bg-gray-700 ${activeTab === 'concours' ? 'bg-gray-700' : ''}`}>
                            <button onClick={() => setActiveTab('concours')} className="flex items-center w-full text-left">
                                <FaFilePdf className="mr-5" color='lightblue' />
                                {t('Concours')}
                            </button>
                        </li>
                        <li className={`p-3 hover:bg-gray-700 ${activeTab === 'publications' ? 'bg-gray-700' : ''}`}>
                            <button onClick={() => setActiveTab('publications')} className="flex items-center w-full text-left">
                                <FaBookReader className="mr-5" color='lightblue' />
                                {t('Publications')}
                            </button>
                        </li>
                      
                        <li className={`p-3 hover:bg-gray-700 ${activeTab === 'rapports' ? 'bg-gray-700' : ''}`}>
                            <button onClick={() => setActiveTab('rapports')} className="flex items-center w-full text-left">
                                <FaStackExchange className="mr-5" color='lightblue' />
                                {t('Rapports')}
                            </button>
                        </li>
                        <li className={`p-3 hover:bg-gray-700 ${activeTab === 'images' ? 'bg-gray-700' : ''}`}>
                            <button onClick={() => setActiveTab('images')} className="flex items-center w-full text-left">
                                <FaImage className="mr-5" color='lightblue' />
                                {t("Gallerie d'images")}
                            </button>
                        </li>
                        <li className={`p-3 hover:bg-gray-700 ${activeTab === 'videos' ? 'bg-gray-700' : ''}`}>
                            <button onClick={() => setActiveTab('videos')} className="flex items-center w-full text-left">
                                <FaVideo className="mr-5" color='lightblue' />
                                {t('Vidéos')}
                            </button>
                        </li>
                       
                        <li className={`p-3 hover:bg-gray-700 ${activeTab === 'jour_formation' ? 'bg-gray-700' : ''}`}>
                            <button onClick={() => setActiveTab('jour_formation')} className="flex items-center w-full text-left">
                                <FaCalendar className="mr-5" color='lightblue' />
                                {t("Journées de formation")}
                            </button>
                        </li>
                        <li className={`p-3 hover:bg-gray-700 ${activeTab === 'jour_information' ? 'bg-gray-700' : ''}`}>
                            <button onClick={() => setActiveTab('jour_information')} className="flex items-center w-full text-left">
                                <FaCalendar className="mr-5" color='lightblue' />
                                {t("Journées d'information")}
                            </button>
                        </li>
                    </ul>
                </nav>
               

                <div className="p-4 bg-gray-800">
                    <button onClick={logout} className="flex items-center w-full text-left text-red-500">
                        <FaSignOutAlt className="mr-2" />
                        {t('Logout')}
                    </button>
                </div>
            </div>

            
            <div className="flex-1 flex flex-col">
                <header className="bg-gray-800 shadow p-4 flex justify-between">
                    <div >
                        <ul className="flex  flex-row sm:justify-center" role="none">
                            <li className="d-flex ">

                                <button onClick={() => changeLanguage("en")} className="block p-2  text-sm  hover:bg-blue-300 "
                                    role="menuitem">
                                    <div className="inline-flex items-center text-white">
                                        <img className="language_icons mx-2" src="/img/FR.svg" />  <strong>Fr</strong>
                                    </div>
                                </button>
                            </li>
                            <li className="d-flex ">

                                <button onClick={() => changeLanguage("fr")} className="block p-2 text-sm  hover:bg-blue-300 "
                                    role="menuitem">
                                    <div className="inline-flex items-center text-white">
                                        <img className="mx-2 language_icons" src="/img/GB.svg" />    <strong>En</strong>
                                    </div>
                                </button>
                            </li>
                            <li className="d-flex">
                                <button onClick={() => changeLanguage("ar")} className="block p-2 text-sm  hover:bg-blue-300 "
                                    role="menuitem">
                                    <div className="inline-flex items-center text-white">
                                        <img className="mx-2 language_icons" src="/img/TN.svg" />  <strong>Ar</strong>   
                                    </div>
                                </button>
                            </li>
                        </ul>

                    </div>
                    <div className="font-bold text-xl">{t('dashboard')}</div>
                    <button className="text-red-500 flex items-center" onClick={logout}>
                        <FaSignOutAlt className="mr-2" />
                        {t('Logout')}
                    </button>
                </header>

                <main className="flex-1 p-4 overflow-y-auto">
                    {renderContent()}
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
