import React, { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import { Carousel as MyCarousel } from 'react-bootstrap'
import { getFirestore } from 'firebase/firestore';
import {  ref, listAll, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase/config';

function ChampsIntervention() {
  const { t, i18n } = useTranslation();
  const current_language = i18n.language
  const [imageList, setImageList] = useState([]);


  useEffect(() => {
    const fetchImages = async () => {
      const listRef = ref(storage, 'champintervention/');
      try {
        const res = await listAll(listRef);
        const urls = await Promise.all(res.items.map(itemRef => getDownloadURL(itemRef)));
        setImageList(urls);
      } catch (error) {
        setError(error);
      } 
    };

    fetchImages();
  }, []);


    return (
      <div className="text-center block my-2 w-full max-w-[999px] p-6 bg-white border border-gray-200 rounded-lg shadow ">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-700">
          {t("champs d'intervention")} </h5>

        <p dir={current_language == "ar" ? 'rtl':"ltr"} className="font-normal text-gray-700 dark:text-gray-500 text-justify">

          <h5>{t("contenue champsintervention 0")}</h5>
        
          <li>   {t("contenue champsintervention 1")} </li>
          <MyCarousel className="mb-2 mt-2">
            {imageList.slice(0,3).map((element, index) => (
              <MyCarousel.Item key={index} interval={4000}>
                <img
                  className="d-block mx-auto w-75"
                  src={element}
                  alt={`slide ${index}`}
                />
                <MyCarousel.Caption></MyCarousel.Caption>
              </MyCarousel.Item>
            ))}
          </MyCarousel>
           <li>  
             {t("contenue champsintervention 2")} </li>
          <MyCarousel className="mb-2 mt-2">
            {imageList.slice(3,5).map((element, index) => (
              <MyCarousel.Item key={index} interval={4000}>
                <img
                  className="d-block mx-auto w-75"
                  src={element}
                  alt={`slide ${index}`}
                />
                <MyCarousel.Caption></MyCarousel.Caption>
              </MyCarousel.Item>
            ))}
          </MyCarousel>
           <li>  
               {t("contenue champsintervention 3")} 
               </li>
          <MyCarousel className="mb-2 mt-2">
            {imageList.slice(6,).map((element, index) => (
              <MyCarousel.Item key={index} interval={4000}>
                <img
                  className="d-block mx-auto w-75"
                  src={element}
                  alt={`slide ${index}`}
                />
                <MyCarousel.Caption></MyCarousel.Caption>
              </MyCarousel.Item>
            ))}
          </MyCarousel>
               <li>   {t("contenue champsintervention 4")} </li>
               </p>
      </div>
    )
}

export default ChampsIntervention;


