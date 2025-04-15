import React, { useEffect } from 'react'
import { Outlet } from "react-router-dom";
import ProjetMenu from '../components/projetMenu';
import RightNavigation from '../components/rightNavigation';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Breadcrumb from '../components/breadcrumb';
import { useTranslation } from 'react-i18next';
import HomeMenu from '../components/homeMenu';

export default function ProjetLayout() {
    const { i18n } = useTranslation();

    useEffect(() => {
        const storedLang = localStorage.getItem('language');
        console.log(storedLang)
        if (storedLang) {
            i18n.changeLanguage(storedLang);
        } else {
            i18n.changeLanguage('fr');
        }
    }, []);
    return (
        <React.Fragment>
            <Navbar />

            <img style={{ height: '15vh', width: "100vw", margin: 'auto' }} src={`/img/banner_${[i18n.language]}.png`} className=" sm:col-12 md:col-7 w-full justify-center rounded-lg" alt="banner" />


           
            <HomeMenu/> <Breadcrumb />
            <div className="container mx-auto flex flex-wrap">

                <div className="md:w-3/4 sm:w-full">
                    <div className="container py-2">
                        <Outlet />
                    </div>
                </div>
                <div className="md:w-1/4 px-2 sm:w-full sm:mx-auto">
                    <RightNavigation />
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}