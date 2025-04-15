
import React from "react";
import FourMenu from '../components/fourMenu';
import { useTranslation } from 'react-i18next';

function Composantes() {
    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language;
    return (
        <React.Fragment>
            <FourMenu />
            <div className="block my-2 w-full max-w-[999px] p-6 bg-white border border-gray-200 rounded-lg shadow ">
                <h5 className=" text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-700">{t("compos 1")} </h5>
                <p dir={currentLanguage == "ar" ? "rtl" : "ltr"} className=" text-justify">

                    <h5>   {t("compos 2")} </h5>

                </p>
                <p dir={currentLanguage == "ar" ? "rtl" : "ltr"} >
                    <p>   {t("compos 3")} </p>
                </p>
                <p dir={currentLanguage == "ar" ? "rtl" : "ltr"} >
                    <p>  - {t("compos 4")} </p>
                </p>

                <p dir={currentLanguage == "ar" ? "rtl" : "ltr"} > <p> -  {t("compos 5")} </p>
                </p>

                <p dir={currentLanguage == "ar" ? "rtl" : "ltr"} > <p> -  {t("compos 6")} </p>
                </p>
                <p dir={currentLanguage == "ar" ? "rtl" : "ltr"} > <p> -  {t("compos 7")} </p>
                </p>

                <div>
                </div>



            </div>
        </React.Fragment>
    )
}

export default Composantes;