import React from "react";
import { Image } from "react-bootstrap";
import { useTranslation } from 'react-i18next';

function ApprocheDev() {
    const { t, i18n } = useTranslation();

    return (
        <div dir={i18n.language == "ar" ? "rtl" : "ltr"}>
            <div className="block my-2 w-full max-w-[999px] p-6 bg-white border border-gray-200 rounded-lg shadow ">
                <h5 className="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-700">{t("Approche participative et intégrée")} </h5>
                <div className="d-flex align-center justify-center mb-4"><img src="./img/api1.jpg" /></div>
                <p dir={i18n.language == "ar" ? "rtl" : "ltr"} className="font-normal text-gray-700 dark:text-gray-500 text-justify">
                    {t('api 2')}
                </p>
                <p dir={i18n.language == "ar" ? "rtl" : "ltr"} className="font-normal text-gray-700 dark:text-gray-500 text-justify">
                    {t('api 3')}
                </p>
                <p dir={i18n.language == "ar" ? "rtl" : "ltr"} className="font-normal text-gray-700 dark:text-gray-500 text-justify">
                    {t('api 4')}
                </p>
                <p dir={i18n.language == "ar" ? "rtl" : "ltr"} className="font-normal text-gray-700 dark:text-gray-500 text-justify">
                    {t('api 5')}
                </p>
                <p dir={i18n.language == "ar" ? "rtl" : "ltr"} className="font-normal text-gray-700 dark:text-gray-500 text-justify">
                    {t('api 6')}
                </p>
                <p dir={i18n.language == "ar" ? "rtl" : "ltr"} className="font-normal text-gray-700 dark:text-gray-500 text-justify">
                    {t('api 7')}
                </p>
                <li dir={i18n.language == "ar" ? "rtl" : "ltr"} className="font-normal text-gray-700 dark:text-gray-500 text-justify">
                    {t('api 8')}
                </li>
                <li dir={i18n.language == "ar" ? "rtl" : "ltr"} className="font-normal text-gray-700 dark:text-gray-500 text-justify">
                    {t('api 9')}
                </li>
                <li dir={i18n.language == "ar" ? "rtl" : "ltr"} className="font-normal text-gray-700 dark:text-gray-500 text-justify">
                    {t('api 10')}
                </li>
                <li dir={i18n.language == "ar" ? "rtl" : "ltr"} className="font-normal text-gray-700 dark:text-gray-500 text-justify">
                    {t('api 11')}
                </li>
            </div>
            <div className="d-flex align-center justify-center mb-4">
                <img src={`/img/api_${i18n.language}.jpg`} />
            </div>
        </div>
    )
}

export default ApprocheDev;