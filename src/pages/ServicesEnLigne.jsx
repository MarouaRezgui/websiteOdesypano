import React from "react";
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";

function ServicesEnLigne() {
    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language;
    const navigate = useNavigate()
    return (

        <div dir={currentLanguage == "ar" ? "rtl" : "ltr"}>
            
            {/* <p className="mt-4 text-lg font-bold text-orange-700">
                {t('online services 5')} | <span
                    className="mt-4 text-decoration-underline text-lg font-bold text-blue-700 cursor-pointer"
                    onClick={() => navigate("/presentation/direction-regionale")}
                    href=""
                >
                    {t('Les Directions Régionales')}
                </span>
            </p> */}

        </div>

    )
}

export default ServicesEnLigne;




/*<h2 className="text-2xl text-center font-bold mb-4 mt-2">{t('online services 0')}</h2>
            <div className=" rounded-lg p-6 w-full max-w-md  w-full text-nowrap">

                <ul className="list-disc list-inside space-y-2">
                    <li className="text-lg text-gray-700">
                        {t('online services 1')}
                    </li>
                    <li className="text-lg text-gray-700">
                        {t('online services 2')}
                    </li>
                    <li className="text-lg text-gray-700">
                        {t('online services 3')}
                    </li>
                    <li className="text-lg text-gray-700">
                        {t('online services 4')}
                    </li>
                </ul>
            </div>*/