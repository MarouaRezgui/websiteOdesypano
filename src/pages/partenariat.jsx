import React from "react";
import { useTranslation } from 'react-i18next';

function Partenariat() {
    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language;
    return (
        <div dir={currentLanguage == "ar" ? "rtl" : "ltr"}>
            <h4 className="text-center m-3">{t("Partenariat")}</h4>
            <p>{t("contenue partenariat 1")}</p>

            <p> {t("contenue partenariat 2")}</p>

            <p>{t("contenue partenariat 3")}</p>

            <p> {t("contenue partenariat 4")}</p>

            <p>{t("contenue partenariat 5")}</p>

            <p>{t("contenue partenariat 6")}</p>
        </div>
    )
}

export default Partenariat;