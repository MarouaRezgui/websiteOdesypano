import { Link } from "react-router-dom";
import { PROJETODYSEPANO, OBJECTIF } from "../routes";
import { useTranslation } from 'react-i18next';


function ProjetMenu() {
    const { t, i18n } = useTranslation();

  

    return (
        <div className="container mx-auto text-center mt-4">
            <ul
                className="mx-4 rounded-lg text-sm font-medium  grid grid-cols-1 md:grid-cols-2 ">
                <li className=" bg-green-500 border-4 w-75 focus-within:z-10 shadow">
                    <Link to={PROJETODYSEPANO}
                        className="inline-block  text-white text-decoration-none w-full p-4 hover:text-gray-50	 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 focus:outline-none">
                        {t("projet de l'Odesypano")}
                    </Link>
                </li>
                <li className="bg-green-500 border-4 w-75 focus-within:z-10 shadow">
                    <Link to={OBJECTIF}
                        className="text-white inline-block text-decoration-none w-full p-4  hover:text-gray-50 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 focus:outline-none">
                        {t("Quatrième Projet")}
                    </Link>
                </li>
                
            </ul>

        </div>
    )
}
export default ProjetMenu;