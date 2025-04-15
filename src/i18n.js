import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from './resources/en.json'
import fr from './resources/fr.json'
import ar from './resources/ar.json'

const resources = {
    en: { ...en },
    fr: { ...fr },
    ar: { ...ar },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "ar",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;