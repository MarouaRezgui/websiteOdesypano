import React from "react";
import { useTranslation } from 'react-i18next';

function Creation() {
    const { t, i18n } = useTranslation();
    return (
        <React.Fragment>
             
            <div dir={i18n.language == "ar" ? "rtl":"ltr"} className="container mx-auto flex flex-col items-center py-3">

                <div className="block my-2 w-full max-w-[999px] p-6 bg-white border border-gray-200 rounded-lg shadow ">
                    <h5 className="mb-4 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-700">{t("creation")} </h5>
                    
                    <p className="font-normal text-gray-700 dark:text-gray-500 text-justify">{t("contenue creation 1")}<br/><br/></p>
                    <h5 className="mb-4 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-700">{t("contenue creation 2")} </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-500 text-justify">{t("contenue creation 3")}<br/><br/></p>
                   <p> <li>{t("contenue creation 4")}</li></p>
                   <p><li>{t("contenue creation 5")}</li></p>
                   <p><li>{t("contenue creation 6")}</li></p>
                   <p> <li>{t("contenue creation 7")}</li></p>
                   <p><li>{t("contenue creation 8")}</li></p>
                  <p> <li>{t("contenue creation 9")}</li></p>
                   <p> <li>{t("contenue creation 10")}</li></p>
                </div>
            </div>
            

        </React.Fragment >
    )
}

export default Creation;
