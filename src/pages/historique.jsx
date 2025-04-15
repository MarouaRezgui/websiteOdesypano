import React from "react";
import { Image } from "react-bootstrap";
import { useTranslation } from 'react-i18next';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase/config';
import { useState } from "react";
import { useEffect } from "react";


function Historique() {
    const { t, i18n } = useTranslation();
    const [imageList, setImageList] = useState([]);
    const currentLanguage = i18n.language

    useEffect(() => {
        const fetchImages = async () => {
            const listRef = ref(storage, 'histoire/');
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
    return (
        <div>
            <div className="block my-2 w-full max-w-[999px] p-6 bg-white border border-gray-200 rounded-lg shadow ">
                <h5 className=" text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-700">{t("historique")} </h5>
                <p dir={currentLanguage == "ar" ? "rtl" : "ltr"} className="text-justify">{t("historique 1")}</p>
                <p dir={currentLanguage == "ar" ? "rtl" : "ltr"} className=" text-justify">
                    <strong><li>   {t("historique 2")} </li></strong>
                    {t("historique 3")}
                </p>

                <p dir={currentLanguage == "ar" ? "rtl" : "ltr"} >
                    <strong><li>   {t("historique 4")} </li></strong>
                    {t("historique 5")}
                </p>
                <img className="mb-3" src={imageList.length > 0 && imageList.filter(el => el.name == `hist_${currentLanguage}_1.jpg`)[0].url} />
                <p dir={currentLanguage == "ar" ? "rtl" : "ltr"} >
                    <strong><li>   {t("historique 6")} </li></strong>
                    {t("historique 7")}
                </p>

                <p dir={currentLanguage == "ar" ? "rtl" : "ltr"} >
                    <strong><li>   {t("historique 8")} </li></strong>
                    {t("historique 9")}

                </p>
                <img src={imageList.length > 0 &&imageList.filter(el => el.name == `hist_${currentLanguage}_2.jpg`)[0].url} />
                <img src={imageList.length > 0 &&imageList.filter(el => el.name == `hist_${currentLanguage}_3.jpg`)[0].url} />

                <div>
                </div>



            </div>


        </div >
    )
}

export default Historique;