
import React, { useState } from "react";
import FourMenu from '../components/fourMenu';
import { useTranslation } from 'react-i18next';
import { Image } from "react-bootstrap";


function Schema() {
    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language;
    const [isZoomed, setIsZoomed] = useState(false);

    const handleImageClick = () => {
        setIsZoomed(!isZoomed);
    };
    return (
        <React.Fragment>
            <FourMenu />
            <div className="block my-2 w-full max-w-[999px] p-6 bg-white border border-gray-200 rounded-lg shadow">
                <h5 className="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-700">{t("schema 1")}</h5>
                <div dir={currentLanguage === "ar" ? "rtl" : "ltr"} className="text-justify">
                    <h2>{t("schema 2")}</h2>
                </div>
                <div className="d-flex justify-content-center text-center">
                    <img
                        src={`/img/source_finance_${i18n.language}.jpg`}
                        alt="Schema"
                        className={isZoomed ? "zoomed" : ""}
                        onClick={handleImageClick}
                        style={{
                            cursor: 'pointer',
                            transition: 'transform 0.3s ease-in-out',
                            transform: isZoomed ? 'scale(1.5)' : 'scale(1)',
                            maxWidth: isZoomed ? '100%' : 'auto',
                        }}
                    />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Schema;