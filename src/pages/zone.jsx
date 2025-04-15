
import React from "react";
import FourMenu from '../components/fourMenu';
import { useTranslation } from 'react-i18next';

function Zone() {
    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language;
    return (
        <React.Fragment>
            <FourMenu/>
            <div className="block my-2 w-full max-w-[999px] p-6 bg-white border border-gray-200 rounded-lg shadow ">
                <h5 className=" text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-700">{t("zone 1")} </h5>
                <p dir={currentLanguage == "ar" ? "rtl" : "ltr"} className=" text-justify">

                    <h2>   {t("zone 2")} </h2>

                </p>
                <p dir={currentLanguage == "ar" ? "rtl" : "ltr"} >
                    <p>   {t("zone 3")} </p>
                </p>
                <p dir={currentLanguage == "ar" ? "rtl" : "ltr"} >
                    <p>   {t("zone 4")} </p>
                </p>

                <p dir={currentLanguage == "ar" ? "rtl" : "ltr"} > <p>   {t("zone 5")} </p>
                </p>

                <p dir={currentLanguage == "ar" ? "rtl" : "ltr"} > <p>   {t("zone 6")} </p>
                </p>
                <p dir={currentLanguage == "ar" ? "rtl" : "ltr"} > <p>   {t("zone 7")} </p>
                </p>
                <p dir={currentLanguage == "ar" ? "rtl" : "ltr"} > <p>   {t("zone 8")} </p>
                </p>
                <div>
                </div>



            </div>
        </React.Fragment>
    )
}

export default Zone;