
import React from "react";
import FourMenu from '../components/fourMenu';
import { useTranslation } from 'react-i18next';

function Objectif() {
    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language;
    return (
        <React.Fragment>
            <FourMenu/>
            <div className="block my-2 w-full max-w-[999px] p-6 bg-white border border-gray-200 rounded-lg shadow ">
                <h5 className=" text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-700">{t("objectif 1")} </h5>
                <p dir={currentLanguage == "ar" ? "rtl" : "ltr"} className=" text-justify">

                    <h2>   {t("objectif 2")} </h2>

                </p>
                <p dir={currentLanguage == "ar" ? "rtl" : "ltr"} >
                    <h6>   {t("objectif 3")} </h6>
                </p>
                <p dir={currentLanguage == "ar" ? "rtl" : "ltr"} >
                    <p>   {t("objectif 4")} </p>
                </p>

                <p dir={currentLanguage == "ar" ? "rtl" : "ltr"} > <h6>   {t("objectif 5")} </h6>
                </p>

                <p dir={currentLanguage == "ar" ? "rtl" : "ltr"} > <p>   {t("objectif 6")} </p>
                </p>
                <p dir={currentLanguage == "ar" ? "rtl" : "ltr"} > <p>   {t("objectif 7")} </p>
                </p>
                <p dir={currentLanguage == "ar" ? "rtl" : "ltr"} > <p>   {t("objectif 8")} </p>
                </p>
                <p dir={currentLanguage == "ar" ? "rtl" : "ltr"} > <p>   {t("objectif 9")} </p>
                </p>
                <div>
                </div>



            </div>
        </React.Fragment>
    )
}

export default Objectif;