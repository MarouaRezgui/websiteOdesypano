import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { HiOutlinePresentationChartLine } from "react-icons/hi";
import { GrProjects } from "react-icons/gr";
import { LuActivitySquare } from "react-icons/lu";
import { LiaConnectdevelop } from "react-icons/lia";
import { GrGroup } from "react-icons/gr";
import { FaRegNewspaper } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import { GrWorkshop } from "react-icons/gr";
import {
    CREATION, APPROCHEDEDEV, DOMAINEACTIVITE, PARTENARIAT,
    OUTILDEGESTION, ECITOYEN, ACCESINFO, PROJETODYSEPANO,
    SERVICESENLIGNE
} from "../routes";
import { MdArrowLeft, MdArrowRightAlt } from "react-icons/md";

const HomeMenu = (props) => {
    const { t, i18n } = useTranslation();
    const myClass = " flex w-100 full-width font-bold links_size  py-2 justify-center text-black hover:rounded hover:bg-green-800 focus:ring-4 focus:ring-blue-300 focus:outline-none";
    const isArabic = i18n.language === "ar";

    const menuItems = [
        {
            to: CREATION,
            icon: <HiOutlinePresentationChartLine className="m-2" />,
            label: t('presentation'),
            submenu: [
                { to: '/presentation/creation', label: t('creation') },
                {
                    to: '/presentation/champs-intervention', label: t("Champs d'Intervention")
                },
                { to: '/presentation/historique', label: t('historique') },
                { to: '/presentation/organisation', label: t('Organisation') },
                { to: '/presentation/direction-regionale', label: t('Les Directions Régionales') },
                {
                    to: '/presentation/zone-intervention', label: t("zone d'intervention")
                },
                { to: '/presentation/groupe-cible', label: t('Groupe Cible') },
            ],
        },
        {
            to: PROJETODYSEPANO,
            icon: <GrProjects className="m-2" />,
            label: t('Projet'),
            submenu: [
                {
                    to: '/projet/projet-odysepano', label: t("projet de l'Odesypano")
                },
                {
                    to: '/projet/quaterieme-projet/objectif-du-projet', label: (
                        <div className="d-flex align-items-center justify-between">
                            {t('Quatrième Projet')} {i18n.language == "ar" ? <MdArrowLeft className="" /> : <MdArrowRightAlt className="mx-1" /> } 
                        </div>
                    ), submenu: [
                        { to: '/projet/quaterieme-projet/objectif-du-projet', label: t("objectif du projet") },
                        {
                            to: '/projet/quaterieme-projet/zone-intervention', label: t("zone d'intervention")
                        },
                        {
                            to: '/projet/quaterieme-projet/composantes-du-projet', label: t("composantes du projet")
                        },
                        {
                            to: '/projet/quaterieme-projet/couts-du-projet', label: t("coûts du projet")
                        }, {
                            to: '/projet/quaterieme-projet/schema-de-financement', label: t("schéma de financement")
                        }, {
                            to: '/projet/quaterieme-projet/approche-de-mise-en-ouevre-du-projet', label: t("approche de mise en oeuvre")
                        }
                    ],
                },
            ],
        },
        {
            to: DOMAINEACTIVITE,
            icon: <LuActivitySquare className="m-2" />,
            label: t("Domaine d'activité"),
            submenu: [
                { to: '/domaine-activite', label: t("Domaine d'activité") },

            ],
        }, {
            to: APPROCHEDEDEV,
            icon: <LiaConnectdevelop className="m-2" />,
            label: t("Approches de développement"),
            submenu: [
                {
                    to: '/approche-de-development', label: t('Approches de développement')
                },
            ],
        }, {
            to: PARTENARIAT,
            icon: <GrGroup className="m-2" />,
            label: t("Partenariat"),
            submenu: [
                { to: '/partenariat', label: t('Partenariat') }

            ],
        }, {
            to: OUTILDEGESTION,
            icon: <GrWorkshop className="m-2" />,
            label: t("Outils de gestion"),
            submenu: [
                { to: '/outil-de-gestion', label: t('Outils de gestion') },

            ],
        }, {
            to: ECITOYEN,
            icon: <FaUserAlt className="m-2" />,
            label: t("E-Citoyen"),
            submenu: [
                { to: '/ecitoyen', label: t('E-Citoyen') }

            ],
        }
        , {
            to: '/services_en_ligne',
            icon: <FaRegNewspaper className="m-2" />,
            label: t("service en ligne"),
            ///////////////
             submenu: [
               ///  { to: '/demande_prets_en_ligne', label: t("dossier prets activites") },
              ///   { to: '/demande_equipements_de_groupe', label: t("demande equipements de groupe") },
                 { to: '/demande_pepinieres', label: t("demande pepiniers") },
                 { to: '/demande_semences', label: t("Inscrivez-vous aux semences pastorales") },
              ],
              //////////////////////////////
           /* submenu: [
                { to: '/services_en_ligne', label: t('Services en Ligne') }

            ],*/
        },
        {
            to: ACCESINFO,
            icon: <FaRegNewspaper className="m-2" />,
            label: t("Accès à l'information"),
            submenu: [
                { to: '/acces-information', label: t("Accès à l'information") },

            ],
        },

    ];

    const renderSubmenu = (submenu) => {
        return submenu?.map((submenuItem, subIndex) => (
            <div key={subIndex} style={{ width: '15vw', textAlign: "center" }} className=" hover_menus relative ">
                <Link
                    to={submenuItem.to}
                    className=" block hover-bg-text-change capitalize	 text-black p-2  text-left no-underline text-center submenu-item"
                    style={{ '--i': subIndex }}
                >
                    {submenuItem.label}
                </Link>
                {submenuItem.submenu && (
                    <div style={{ width: '15vw', textAlign: "center" }} className={` hover_menus absolute ${isArabic ? "right-full" : "left-full"} top-0 hidden group-hover:block
                    group-focus-within:block bg-white text-black shadow-lg rounded z-10 submenu`}>
                        {renderSubmenu(submenuItem.submenu)}
                    </div>
                )}
            </div>
        ));
    };


    return (
        <div style={{ backgroundColor: '#A7D48F' }} className="mx-1 my-1 text-center rounded" dir={isArabic ? "rtl" : "ltr"}>
            <div style={{ backgroundColor: '#A7D48F' }} className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-9 ${isArabic ? 'flex-row-reverse' : ''}`}>
                {menuItems.map((item, index) => (
                    <div className="flex relative group" key={index}>
                        <Link to={item.to} className={`${isArabic ? 'flex-row' : ''} ${myClass} capitalize bg-green-500 text-white flex items-center text-decoration-none`}>
                            {item.icon}
                            {item.label}
                        </Link>
                        <div className="absolute top-full hidden group-hover:block group-focus-within:block bg-white text-black shadow-lg rounded z-10 submenu">
                            {renderSubmenu(item.submenu)}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomeMenu;
