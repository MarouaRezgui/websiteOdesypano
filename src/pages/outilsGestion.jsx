import React from "react";
import { useTranslation } from 'react-i18next';

function OutilsGestion() {
    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language;

    return (
        <div dir={currentLanguage === "ar" ? "rtl" : "ltr"} className="block my-2 w-full max-w-[999px] p-6 bg-white border border-gray-200 rounded-lg shadow">
            <h5 className="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-700">{t("outils gestion 1")}</h5>
            <div  className="text-justify">
                <p>{t("outils gestion 2")}</p>
            </div>
            <div className="justify-content-center">
                <h6>{t("outils gestion 3")}</h6>
                <p>{t("outils gestion 4")}</p>
                <p>{t("outils gestion 5")}</p>
                <p>{t("outils gestion 6")}</p>
               <p>{t("outils gestion 7")}</p> 
               <p>{t("outils gestion 8")}</p> 
               <li>{t("outils gestion 9")}</li>
               <li>{t("outils gestion 10")}</li>
               <p>{t("outils gestion 11")}</p> 
               <p>{t("outils gestion 12")}</p>
            </div>
            
                
            
            <div>
                <h6 className="mt-4">{t("outils gestion 13")}</h6>
                <p>{t("outils gestion 14")}<br></br>
                {t("outils gestion 15")}<br></br>
                {t("outils gestion 16")}<br></br>
                {t("outils gestion 17")}
                </p>
                
                <li>{t("outils gestion 18")}</li>
                <li>{t("outils gestion 19")}</li>
                <li>{t("outils gestion 20")}</li>
                <li>{t("outils gestion 21")}</li>
                
            </div>
        </div>
    )
}

export default OutilsGestion;