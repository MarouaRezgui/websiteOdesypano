import React from "react";
import { Image } from "react-bootstrap";
import { useTranslation } from 'react-i18next';

function Approche() {
    const { t, i18n } = useTranslation();

    return (
        <div dir={i18n.language == "ar" ? "rtl" : "ltr"}>
            <div className="block my-2 w-full max-w-[999px] p-6 bg-white border border-gray-200 rounded-lg shadow ">
                <h5 className=" mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-700">{t("Approche participative et intégrée")} </h5>



                <p dir={i18n.language == "ar" ? "rtl" : "ltr"}> *  {t("contenue approchedev 1")} </p>
                <p dir={i18n.language == "ar" ? "rtl" : "ltr"}> * {t("contenue approchedev 2")} </p>
                <p dir={i18n.language == "ar" ? "rtl" : "ltr"}> {t("contenue approchedev 3")}</p>
                <p dir={i18n.language == "ar" ? "rtl" : "ltr"}> {t("contenue approchedev 4")}</p>


                <h5 className=" mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-700">{t("contenue approchedev 5")} </h5>

                <p dir={i18n.language == "ar" ? "rtl" : "ltr"}>   {t("contenue approchedev 6")}</p>
                <p dir={i18n.language == "ar" ? "rtl" : "ltr"}>  {t("contenue approchedev 7")}</p>


                <h5 className=" mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-700">{t("contenue approchedev 8")} </h5>

                <p dir={i18n.language == "ar" ? "rtl" : "ltr"}>   {t("contenue approchedev 9")}</p>
                <img src={`/img/approche_dev_${i18n.language}.jpg`}  />
                <h5 className=" mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-700">{t("contenue approchedev 10")} </h5>

               
                    <p dir={i18n.language == "ar" ? "rtl" : "ltr"} > {t("contenue approchedev 11")}</p>
                    <p dir={i18n.language == "ar" ? "rtl" : "ltr"}>  * {t("contenue approchedev 12")} </p>
                    <p dir={i18n.language == "ar" ? "rtl" : "ltr"}>  * {t("contenue approchedev 13")} </p>
                <h5 className=" mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-700">{t("contenue approchedev 14")} </h5>

                    <li dir={i18n.language == "ar" ? "rtl" : "ltr"}>   {t("contenue approchedev 15")} </li>
                    <li dir={i18n.language == "ar" ? "rtl" : "ltr"}>   {t("contenue approchedev 16")} </li>
               
            </div>


        </div>
    )
}

export default Approche;