import React from "react";
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'
import { RAPPORTS, VIDEOS, PUBLICATIONS, CONCOURS, OFFRE, IMAGES, JRSFORMATION, JRSINFORMATION, LIENSNAT, LIENSINT } from "../routes";

export default function RightNavigation() {
    const { t, i18n } = useTranslation();

    return (
        <div className="mx-auto mt-3 w-75  ">

            <div className="mx-auto mt-3">
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow mx-auto">
                    <div
                        className="w-full  text-lg px-4 py-1 font-bold text-center rtl:text-right text-light bg-green-500 border-b border-gray-200 rounded-t-lg focus:outline-none">
                        {t("Annonces")}
                    </div>
                    <div >

                        <Link to={OFFRE}
                            className="inline-block text-decoration-none w-full p-1 hover:text-black hover:bg-green focus:ring-4 focus:ring-blue-300 focus:outline-none">

                            <a type="button"
                                className="text-decoration-none w-full text-black text-center px-4 py-1 font-bold text-left rtl:text-right border-b border-gray-200 cursor-pointer hover:bg-green hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
                                {t("Appel d'offres")}
                            </a>
                        </Link>
                        <Link to={CONCOURS}
                            className="inline-block text-decoration-none w-full p-1 hover:text-black hover:bg-green focus:ring-4 focus:ring-blue-300 focus:outline-none">
                            <a type="button"
                                className="w-full text-decoration-none text-center text-black px-4 py-1 font-bold text-left rtl:text-right border-b border-gray-200 cursor-pointer hover:bg-green hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
                                {t("Concours")}
                            </a></Link>
                        <Link to={'/jours_formation'}
                            className="inline-block text-decoration-none w-full p-1 hover:text-black hover:bg-green focus:ring-4 focus:ring-blue-300 focus:outline-none">
                            <a type="button"
                                className="w-full text-decoration-none text-center text-black px-4 py-1 font-bold text-left rtl:text-right border-b border-gray-200 cursor-pointer hover:bg-green hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
                                {t("Journées de formation")}
                            </a></Link>
                        <Link to={'/jours_information'}
                            className="inline-block text-decoration-none w-full p-1 hover:text-black hover:bg-green focus:ring-4 focus:ring-blue-300 focus:outline-none">
                            <a type="button"
                                className="w-full text-decoration-none text-center text-black px-4 py-1 font-bold text-left rtl:text-right border-b border-gray-200 cursor-pointer hover:bg-green hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
                                {t("Journées d'information")}
                            </a></Link>
                    </div>
                </div>
            </div>

            <div className="mx-auto py-2">
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow mx-auto">
                    <div
                        className="w-full text-lg px-4 py-2 text-light font-bold text-center rtl:text-right  bg-green-500 border-b border-gray-200 rounded-t-lg focus:outline-none">
                        {t("Documents et Rapports")}
                    </div>

                    <div >

                        <Link to={RAPPORTS}
                            className="inline-block text-decoration-none w-full p-1 hover:text-black hover:bg-green focus:ring-4 focus:ring-blue-300 focus:outline-none">
                            <a type="button"
                                className="w-full text-decoration-none text-center text-black py-1 font-bold text-left rtl:text-right border-b border-gray-200 cursor-pointer hover:bg-green hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
                                {t("Rapports")}
                            </a>
                        </Link>
                        <Link to={PUBLICATIONS}
                            className="inline-block text-decoration-none w-full p-1 hover:text-black hover:bg-green focus:ring-4 focus:ring-blue-300 focus:outline-none">
                            <a type="button"
                                className="w-full text-decoration-none text-center text-black py-1 font-bold text-left rtl:text-right border-b border-gray-200 cursor-pointer hover:bg-green hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
                                {t("Publications")}
                            </a>  </Link>
                    </div>
                </div>
            </div>
            <div className="mx-auto py-2">
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow mx-auto">
                    <div
                        className="w-full text-lg px-4 py-1 font-bold text-center rtl:text-right text-light bg-green-500 border-b border-gray-200 rounded-t-lg focus:outline-none">
                        {t("Photos et vidéo")}
                    </div>
                    <div >
                        <Link to={IMAGES}
                            className="inline-block text-decoration-none  w-full p-1 hover:text-black hover:bg-green focus:ring-4 focus:ring-blue-300 focus:outline-none">

                            <a type="button"
                                className="w-full text-decoration-none text-center text-black text-md px-4 py-1 font-bold text-left rtl:text-right border-b border-gray-200 cursor-pointer hover:bg-green hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
                                {t("Photos")}
                            </a>
                        </Link>
                        <Link to={VIDEOS}
                            className="inline-block text-decoration-none  w-full p-1 hover:text-black hover:bg-green focus:ring-4 focus:ring-blue-300 focus:outline-none">
                            <a type="button"
                                className="w-full text-decoration-none text-center text-black text-md py-2 font-bold text-left rtl:text-right border-b border-gray-200 cursor-pointer hover:bg-green hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
                                {t("Vidéos")}
                            </a>
                        </Link>


                    </div>
                </div>
            </div>
            <div className="mx-auto py-2">
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow mx-auto">
                    <div
                        className="w-full text-lg px-4 py-2 font-bold text-center rtl:text-right text-light bg-green-500 border-b border-gray-200 rounded-t-lg focus:outline-none">
                        {t("Liens Utiles")}
                    </div>
                    <div>
                        <Link to={LIENSNAT}
                            className="inline-block text-decoration-none  w-full p-1 hover:text-black hover:bg-green focus:ring-4 focus:ring-blue-300 focus:outline-none">

                            <a type="button"
                                className="w-full text-decoration-none text-center text-black text-md px-4 py-2 font-bold text-left rtl:text-right border-b border-gray-200 cursor-pointer hover:bg-green hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
                                {t("Liens Nationaux")}
                            </a>
                        </Link>
                        <Link to={LIENSINT}
                            className="inline-block text-decoration-none  w-full p-1 hover:text-black hover:bg-green focus:ring-4 focus:ring-blue-300 focus:outline-none">

                            <a type="button"
                                className="w-full text-decoration-none text-center text-black text-md px-4 py-2 font-bold text-left rtl:text-right border-b border-gray-200 cursor-pointer hover:bg-green hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
                                {t("Liens Internationaux")}
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
