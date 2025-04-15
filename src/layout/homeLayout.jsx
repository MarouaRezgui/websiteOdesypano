import React, { useEffect, useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { Link, Outlet, useLocation } from "react-router-dom";
import Carousel from '../components/carousel';
import RightNavigation from '../components/rightNavigation';
import Breadcrumb from '../components/breadcrumb';
import { useTranslation } from 'react-i18next';
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
import { useRef } from 'react';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase/config';

import HomeMenu from '../components/homeMenu';
import SearchComponent from '../components/SearchComponent';
import i18n from "i18next";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';

export default function HomeLayout() {

    const { i18n } = useTranslation();
    const { t } = useTranslation();
    const location = useLocation();
    const containerRef = useRef(null);
    const [imageList, setImageList] = useState([]);
    const db = getFirestore();

    useEffect(() => {
        const fetchImages = async () => {
            const listRef = ref(storage, 'home_carousel_images/');
            try {
                const res = await listAll(listRef);
                const items = res.items;
                const urls = await Promise.all(
                    items.map(async (itemRef) => {
                        const url = await getDownloadURL(itemRef);
                        return {
                            name: itemRef.name,
                            url: url
                        };
                    })
                );
                setImageList(urls);
                console.log(urls)
            } catch (error) {
                setError(error);
            }
        };

        fetchImages();
    }, []);


    useEffect(() => {
        const storedLang = localStorage.getItem('language');
        console.log(storedLang);
        if (storedLang) {
            i18n.changeLanguage(storedLang);
        } else {
            i18n.changeLanguage('ar');
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
        {/* <img style={{height:'15vh',width:"80vw",margin:'auto'}}
          src={`/img/${
            window.innerWidth <= 640 ? "banners_sm" :""}/banner_${i18n.language}.png`}
          alt="banner"
//           className="
//     h-[10vh] 
//     w-[85vw] 
//     mx-auto 
//     sm:w-full 
//     md:w-3/4 
//     lg:w-2/3 
//      object-contain 
//     rounded-lg
//   "
        />{" "} */}

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
        <hr className="color-green-600" />
        <HomeMenu />
        <div className="carousel_links z-50 flex flex-col sm:flex-row ">
          <div
            style={{ height: "30vh", backgroundColor: "#F6F6F6" }}
            className=" home_carousel col-6 mx-4 mt-1"
          >
            <Carousel images={imageList} size={30} />
          </div>
          <div className="links col-6 d-flex mx-4 flex-row sm:hidden mt-1">
            <div className="col-2 bounce d-flex flex-col justify-content-center align-items-center py-5 text-center shadow-md shadow-[#057A55] border mx-2">
              <Link
                to="/publications"
                className="text-decoration-none text-black d-flex flex-col justify-content-center align-items-center"
              >
                <h6 className="side_links mb-4">{t("Publications")}</h6>
                <FcNews size={50} />
              </Link>
            </div>
            <div className="col-2 px-1 bounce d-flex flex-col justify-content-center align-items-center py-5 text-center shadow-md shadow-[#057A55] border mx-2">
              <Link
                to="/images"
                className="text-decoration-none text-black d-flex flex-col justify-content-center align-items-center"
              >
                <h6 className="side_links mb-4">{t("Photos")}</h6>
                <FcImageFile size={50} />
              </Link>
            </div>
            <div className="col-2 px-1 bounce d-flex flex-col justify-content-center align-items-center py-5 text-center shadow-md shadow-[#057A55] border mx-2">
              <Link
                to="/videos"
                className="text-decoration-none text-black d-flex flex-col justify-content-center align-items-center"
              >
                <h6 className="side_links mb-4">{t("Vidéos")}</h6>
                <FcVideoCall size={50} />
              </Link>
            </div>
            <div className="col-2 px-1 bounce d-flex flex-col justify-content-center align-items-center py-5 text-center shadow-md shadow-[#057A55] border mx-2">
              <Link
                to="/links"
                className="text-decoration-none text-black d-flex flex-col justify-content-center align-items-center"
              >
                <h6 className="side_links mb-4 text-wrap">
                  {t("Liens Utiles")}
                </h6>
                <FcLink size={50} />
              </Link>
            </div>
          </div>
        </div>
        <Breadcrumb />
        <div ref={containerRef} className="container mx-auto flex flex-wrap">
          <div className="md:w-3/4 sm:w-full">
            <Outlet />
          </div>
          <div className="md:w-1/4  sm:w-full sm:mx-auto">
            <RightNavigation />
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
}









