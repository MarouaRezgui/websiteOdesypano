import React, { useEffect } from 'react'
import { Link, Outlet, useLocation } from "react-router-dom";
import PresentationMenu from '../components/presentationMenu';
import RightNavigation from '../components/rightNavigation';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Breadcrumb from '../components/breadcrumb';
import { useTranslation } from 'react-i18next';
import HomeMenu from '../components/homeMenu';
import { useRef } from 'react';
import { FcNews } from "react-icons/fc";
import { FcImageFile } from "react-icons/fc";
import { FcVideoCall } from "react-icons/fc";
import { FcLink } from "react-icons/fc";
import { Row } from 'react-bootstrap';
import { HiOutlinePresentationChartLine } from "react-icons/hi";
import { GrProjects } from "react-icons/gr";
import { LuActivitySquare } from "react-icons/lu";
import { LiaConnectdevelop } from "react-icons/lia";
import { GrGroup } from "react-icons/gr";
import { FaRegNewspaper } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import { GrWorkshop } from "react-icons/gr";
import { CREATION, APPROCHEDEDEV, DOMAINEACTIVITE, PARTENARIAT, OUTILDEGESTION, ECITOYEN, ACCESINFO, PROJETODYSEPANO } from "../routes";
import SearchComponent from '../components/SearchComponent';
export default function PresentationLayout() {
    const { i18n } = useTranslation();
    const location = useLocation();
    const { t } = useTranslation();

    const containerRef = useRef(null);


    useEffect(() => {
        const storedLang = localStorage.getItem('language');
        console.log(storedLang)
        if (storedLang) {
            i18n.changeLanguage(storedLang);
        } else {
            i18n.changeLanguage('fr');
        }
    }, []);
    useEffect(() => {
        if (location.pathname != '/') {
            console.log(location.pathname)
            if (containerRef.current) {
                containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }

    }, [location.pathname]);
    return (
        <React.Fragment>
            <Navbar />
            {/* <img style={{height:'15vh',width:"80vw",margin:'auto'}} src={`/img/banner_${[i18n.language]}.png`} className=" sm:col-12 md:col-7 w-full justify-center rounded-lg" alt="banner" /> */}

            {/* <img  src={`/img/banner_${i18n.language}.png`} className="mt-2 mx-1 sm:col-12 md:col-12 w-full justify-center rounded-lg" alt="banner" /> */}
            <div className='banniere'>
        <div className='logo-container'>
            <img src={`/img/logo1_${[i18n.language]}.png`} alt=''/>
            <img src='/img/logo2.png' alt=''/>

        </div>
        
        <div className='logo-container'>
            <img src='/img/logo3.png' alt=''/>
            <img src={`/img/logo4_${[i18n.language]}.png`} alt=''/>

        </div>

      </div>
            <hr className='color-green-600' />
            <HomeMenu />
            <Breadcrumb ref={containerRef} />

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
