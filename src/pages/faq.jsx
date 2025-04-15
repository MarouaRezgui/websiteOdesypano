import React from "react";
import { useTranslation } from 'react-i18next';

function DomainActivite() {
    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language;
    return (
        <div dir={currentLanguage === "ar" ? "rtl" : "ltr"} className="block my-2 w-full max-w-[999px] p-6 bg-white border border-gray-200 rounded-lg shadow">
            <h5 className="text-center mb-2 text-2xl font-bold tracking-tight text-green-600		">{t("faq 1")}</h5>
            <div className="text-justify">
                <ul>
                    <h6>- {t("faq 2")}</h6>
                </ul>
                <p>
                    {t("faq 3")}
                </p>
            </div>


        </div>
    )
}

export default DomainActivite;