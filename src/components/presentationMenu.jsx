import { Link } from "react-router-dom";
import { CREATION, ORGANISATION, HISTORIQUE,CHAMPSINTERVENTION,DIRECTIONGENARALE,ZONEINTERVENTION,GROUPECIBLE } from "../routes";
import { useTranslation } from 'react-i18next';


function PresentationMenu() {
    const { t, i18n } = useTranslation();

    return (
        <div className="container bg-green-500 text-center rounded">
            <div className=" py-2 font-bold justify-content-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4 ">
                <div className="flex justify-content-center align-items-center"> <Link to={CREATION}
                    className=" m-1 text-white rounded-4 p-2  text-decoration-none inline-block w-full hover:text-black hover:bg-green-800  focus:ring-4 focus:ring-blue-300 focus:outline-none">
                        {t("creation")}
                    </Link>
                </div>
                <div className="flex justify-content-center align-items-center">    <Link to={CHAMPSINTERVENTION}
                    className="text-white  rounded-4 text-decoration-none inline-block w-full p-2 hover:text-black hover:bg-green-800 focus:ring-4 focus:ring-blue-300 focus:outline-none">
                        {t("Champs d'Intervention")}
                    </Link>
                </div>
                <div className="flex justify-content-center align-items-center"><Link to={HISTORIQUE}
                    className="text-white  rounded-4 text-decoration-none inline-block w-full p-2 hover:text-black hover:bg-green-800 focus:ring-4 focus:ring-blue-300 focus:outline-none">
                        {t("historique")}
                    </Link>
                </div>
                <div className="flex justify-content-center align-items-center">
                    <Link to={ORGANISATION}
                        className="text-white  rounded-4 text-decoration-none inline-block w-full p-2 hover:text-black hover:bg-green-800 focus:ring-4 focus:ring-blue-300 focus:outline-none">
                        {t("organisation")}
                    </Link>
                </div>

               
                <div className="flex justify-content-center align-items-center">
                      <Link to={DIRECTIONGENARALE}
                            className="text-white  rounded-4 text-decoration-none inline-block w-full p-2 hover:text-black hover:bg-green-800 focus:ring-4 focus:ring-blue-300 focus:outline-none">
                        {t("Les Directions Régionales")}
                    </Link>
                    </div>
                <div className="flex justify-content-center align-items-center">
                    <Link to={ZONEINTERVENTION}
                            className="text-white  rounded-4 text-decoration-none inline-block w-full p-2 hover:text-black hover:bg-green-800 focus:ring-4 focus:ring-blue-300 focus:outline-none">
                        {t("zone d'intervention")}
                    </Link>
                    </div>
                <div className="flex justify-content-center align-items-center">
                     <Link to={GROUPECIBLE}
                            className="text-white rounded-4 text-decoration-none inline-block w-full p-2 hover:text-black hover:bg-green-800 focus:ring-4 focus:ring-blue-300 focus:outline-none">
                        {t("Groupe Cible")}
                    </Link>
                    </div>
                
            </div>

        </div>
    )
}
export default PresentationMenu;