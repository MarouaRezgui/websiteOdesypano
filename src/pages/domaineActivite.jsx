import React from "react";
import { useTranslation } from 'react-i18next';

function DomainActivite() {
    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language;

    return (
        <div dir={currentLanguage === "ar" ? "rtl" : "ltr"} className="block my-2 w-full max-w-[999px] p-6 bg-white border border-gray-200 rounded-lg shadow">
            <h5 className="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-700">{t("domain activite 1")}</h5>
            <div className="text-justify">
                <p>{t("domain activite 2")}</p>
            </div>
            <div className="justify-content-center">
                <ul>
                    <li>{t("domain activite 3")}</li>
                    <li>{t("domain activite 4")}</li>
                    <li>{t("domain activite 5")}</li>
                    <li>{t("domain activite 6")}</li>

                </ul>
            </div>
            <p className=" mb-2 text-2xl  tracking-tight text-gray-900 dark:text-gray-700">{t("domain activite 7")}</p>

            <div>
                <p>{t("domain activite 8")}</p>
                <p>{t("domain activite 9")}</p>
            </div>
            <div>
                <p className=" mb-2 text-2xl  tracking-tight text-gray-900 dark:text-gray-700">{t("domain activite 10")}</p>
                <p>{t("domain activite 11")}</p>
                <p>{t("domain activite 12")}</p>
                <p>{t("domain activite 13")}</p>
                <p>{t("domain activite 14")}</p>


            </div>

            <div>
                <p className=" mb-2 text-2xl  tracking-tight text-gray-900 dark:text-gray-700">{t("domain activite 15")}</p>
                <p>{t("domain activite 16")}</p>
                <p className=" mb-2 text-2xl  tracking-tight text-gray-900 dark:text-gray-700">{t("domain activite 17")}</p>
                <p>{t("domain activite 18")}</p>


            </div>

        </div>
    )
}

export default DomainActivite;