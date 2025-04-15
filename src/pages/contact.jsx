import React from "react";
import { useTranslation } from 'react-i18next';
import { FaPhone } from "react-icons/fa6";
import { FaFax } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaMapMarkedAlt } from "react-icons/fa";

function Contact() {
    const { t, i18n } = useTranslation();

    return (
        <React.Fragment>
            <div dir={i18n.language == 'ar' ? "rtl":"ltr"} className="container my-24 mx-auto md:px-6">
                <div>
                    <div className="flex justify-center">
                        <div className="text-center md:max-w-xl lg:max-w-3xl">
                            <h2 className="mb-12 px-6 text-3xl font-bold">{t("Contactez Nous")}</h2>
                        </div>
                    </div>
                    <div className="">
                        <div className="">
                            <div className="mt-5 contact_page_options flex justify-content-center row">

                                <div className="col-6 mb-3 ">
                                    <div className="flex items-start">
                                        <div className="shrink-0">
                                            <div className="inline-block rounded-md bg-green-100 p-4 text-green">
                                               <FaPhone color="green" size={20} />

                                            </div>
                                        </div>
                                        <div className="ml-6 grow mx-3">
                                            <p className="mb-2 font-bold ">
                                                {t("Téléphone")}
                                            </p>
                                            <p className="text-neutral-500 text-nowrap">
                                                
                                                {t("numero")}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-6 mb-3">
                                    <div className="flex items-start">
                                        <div className="shrink-0">
                                            <div className="inline-block rounded-md bg-green-100 p-4 text-green">
                                                <FaFax color="green" size={20} />

                                            </div>
                                        </div>
                                        <div className="ml-6 grow mx-3">
                                            <p className="mb-2 font-bold ">
                                                {t("FAX")}
                                            </p>
                                            <p className="text-neutral-500 text-nowrap">
                                               {t("numeroFax")}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                           
                                <div className="col-6 mb-3">
                                    <div className="align-start flex">
                                        <div className="shrink-0 ">
                                            <div className="inline-block rounded-md bg-green-100 p-4 text-green">
                                                <MdOutlineAlternateEmail color="green" size={20} />

                                            </div>
                                        </div>
                                        <div className="ml-6 grow mx-3">
                                            <p className="mb-2 font-bold ">{t("E-mail")}</p>
                                            <p className="text-neutral-500 ">
                                                dgle.odesypano@email.ati.tn
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-6">
                                    <div className="align-start flex">
                                        <div className="shrink-0">
                                            <div className="inline-block rounded-md bg-green-100 p-4 text-green">
                                                <FaMapMarkedAlt color="green" size={20} />

                                            </div>
                                        </div>
                                        <div className="ml-6 grow mx-3">
                                            <p className="mb-2 font-bold ">{t("Adresse")}</p>
                                            <p className="text-neutral-500 text-nowrap">
                                                {t("Av de l'Environnement Béja 9000 Tunisie")}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment >
    )
}

export default Contact;