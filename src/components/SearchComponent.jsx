import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import * as routes from "../routes";

export default function SearchComponent() {
    const links = [
        { label: "Home", route: routes.HOME },
        { label: "Contact", route: routes.CONTACT },
        { label: "FAQ", route: routes.FAQ },
        { label: "Domaine d'activité", route: routes.DOMAINEACTIVITE },
        { label: "Approche de développement", route: routes.APPROCHEDEDEV },
        { label: "Partenariat", route: routes.PARTENARIAT },
        { label: "Outil de gestion", route: routes.OUTILDEGESTION },
        { label: "Ecitoyen", route: routes.ECITOYEN },
        { label: "Rapports", route: routes.RAPPORTS },
        { label: "Concours", route: routes.CONCOURS },
        { label: "Offre", route: routes.OFFRE },
        { label: "Publications", route: routes.PUBLICATIONS },
        { label: "Vidéos", route: routes.VIDEOS },
        { label: "Accès à l'information", route: routes.ACCESINFO },
        { label: "Présentation", route: routes.PRESNTATION },
        { label: "Création", route: routes.CREATION },
        { label: "Champs d'intervention", route: routes.CHAMPSINTERVENTION },
        { label: "Historique", route: routes.HISTORIQUE },
        { label: "Organisation", route: routes.ORGANISATION },
        { label: "Direction générale", route: routes.DIRECTIONGENARALE },
        { label: "Zone d'intervention", route: routes.ZONEINTERVENTION },
        { label: "Groupe cible", route: routes.GROUPECIBLE },
        { label: "Projet", route: routes.PROJET },
        { label: "Projet Odysepàno", route: routes.PROJETODYSEPANO },
        { label: "Quatrième projet", route: routes.QUATERIEMEPROJET },
        { label: "Objectif du projet", route: routes.OBJECTIF },
        { label: "Zone d'intervention", route: routes.ZONE },
        { label: "Composantes du projet", route: routes.COMPOSANTES },
        { label: "Coûts du projet", route: routes.COUTS },
        { label: "Schéma de financement", route: routes.SCHEMA },
        { label: "Approche de mise en œuvre du projet", route: routes.APPROCHE },
    ];

    const { t, i18n } = useTranslation();
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    const getSuggestions = (value) => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;

        return inputLength === 0
            ? []
            : links.filter(
                (route) =>
                    typeof route.label === "string" &&
                    t(route.label).toLowerCase().slice(0, inputLength) === inputValue
            );
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchQuery(value);
        setSuggestions(getSuggestions(value));
    };

    const handleSuggestionClick = () => {
        setSuggestions([]);
        setSearchQuery("");
    };

    return (
        <div className="relative">
            <div className="flex">
                <input
                    dir={i18n.language === "ar" ? "rtl" : "ltr"}
                    type="text"
                    placeholder={t("Search ...")}
                    value={searchQuery}
                    onChange={handleInputChange}
                    className={`border rounded p-2 w-full text-black ${i18n.language === "ar" ? "text-right" : "text-left"}`}
                />
                <button type="submit"
                    className="p-2.5 ms-2 text-sm font-bold text-white bg-green-500 rounded-lg border border-grey hover:bg-green focus:ring-4 focus:outline-none focus:ring-blue-300">
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                    <span className="sr-only">Recherche</span>
                </button>
            </div>

            {suggestions.length > 0 && (
                <ul className="absolute bg-white border rounded w-full z-50 mt-1">
                    {suggestions.map((suggestion) => (
                        <li key={suggestion.label} className="p-2 hover:bg-gray-200">
                            <Link
                                to={suggestion.route}
                                className={`flex ${i18n.language === 'ar' ? "flex-row-reverse" : ""} items-center text-green-600 text-decoration-none`}
                                onClick={handleSuggestionClick}
                            >
                                {i18n.language !== 'ar' ? <FaArrowRightLong className="mr-2" /> : <FaArrowLeftLong className="mr-2" />}
                                <span className="px-1">{t(suggestion.label)}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
