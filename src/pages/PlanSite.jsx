import React from 'react';
import { Link } from 'react-router-dom';
import {
    HOME,
    CONTACT,
    FAQ,
    DOMAINEACTIVITE,
    APPROCHEDEDEV,
    PARTENARIAT,
    OUTILDEGESTION,
    ECITOYEN,
    RAPPORTS,
    CONCOURS,
    OFFRE,
    PUBLICATIONS,
    VIDEOS,
    ACCESINFO,
    NEWSPAGE,
    LINKS,
    PRESNTATION,
    IMAGES,
    CREATION,
    CHAMPSINTERVENTION,
    HISTORIQUE,
    ORGANISATION,
    DIRECTIONGENARALE,
    ZONEINTERVENTION,
    GROUPECIBLE,
    PROJET,
    PROJETODYSEPANO,
    QUATERIEMEPROJET,
    ALLNEWSPAGE,
    OBJECTIF,
    ZONE as ZONE_PROJET,
    COMPOSANTES,
    COUTS,
    SCHEMA,
    APPROCHE as APPROCHE_PROJET
} from '../routes';
import { useTranslation } from 'react-i18next';
import { Button } from 'react-bootstrap';
import { RxCross1 } from "react-icons/rx";

const PlanSite = ({ isOpen, onRequestClose }) => {
    const { t, i18n } = useTranslation();

    return (
      <div>
        {isOpen && (
          <div className="plan_site">
            <h2
              style={{
                textAlign: "center",
                color: "white",
                marginBottom: "2vh",
              }}
            >
              {t("Plan de site")}
            </h2>
            <div
              className={`${i18n.language == "ar" ? "flex-row-reverse" : ""}`}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <ul className='mx-5' dir={`${i18n.language == "ar" ? "rtl" : "ltr"}`}>
                <li>
                  <Link
                    className="text-white text-decoration-none"
                    onClick={onRequestClose}
                    to={PRESNTATION}
                  >
                    {t("presentation")}
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white text-decoration-none"
                    onClick={onRequestClose}
                    to={CREATION}
                  >
                    {t("creation")}
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white text-decoration-none"
                    onClick={onRequestClose}
                    to={CHAMPSINTERVENTION}
                  >
                    {t("Champs d'Intervention")}
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-white text-decoration-none"
                    onClick={onRequestClose}
                    to={HISTORIQUE}
                  >
                    {t("Historique")}
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white text-decoration-none"
                    onClick={onRequestClose}
                    to={ORGANISATION}
                  >
                    {t("Organisation")}
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white text-decoration-none"
                    onClick={onRequestClose}
                    to={DIRECTIONGENARALE}
                  >
                    {t("Les Directions Régionales")}
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white text-decoration-none"
                    onClick={onRequestClose}
                    to={ZONEINTERVENTION}
                  >
                    {t("zone d'intervention")}
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white text-decoration-none"
                    onClick={onRequestClose}
                    to={GROUPECIBLE}
                  >
                    {t("Groupe Cible")}
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-white text-decoration-none"
                    onClick={onRequestClose}
                    to={IMAGES}
                  >
                    {t("Gallerie d'images")}
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white text-decoration-none"
                    onClick={onRequestClose}
                    to={PROJET}
                  >
                    {t("Projet")}
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white text-decoration-none"
                    onClick={onRequestClose}
                    to={PROJETODYSEPANO}
                  >
                    {t("projet de l'Odesypano")}
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white text-decoration-none"
                    onClick={onRequestClose}
                    to={QUATERIEMEPROJET}
                  >
                    {t("Quatrième Projet")}
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white text-decoration-none"
                    onClick={onRequestClose}
                    to={OBJECTIF}
                  >
                    {t("objectif du projet")}
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white text-decoration-none"
                    onClick={onRequestClose}
                    to={ZONE_PROJET}
                  >
                    {t("zone d'intervention")}
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white text-decoration-none"
                    onClick={onRequestClose}
                    to={COMPOSANTES}
                  >
                    {t("composantes du projet")}
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white text-decoration-none"
                    onClick={onRequestClose}
                    to={COUTS}
                  >
                    {t("coûts du projet")}
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white text-decoration-none"
                    onClick={onRequestClose}
                    to={SCHEMA}
                  >
                    {t("schéma de financement")}
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white text-decoration-none"
                    onClick={onRequestClose}
                    to={APPROCHE_PROJET}
                  >
                    {t("approche de mise en oeuvre")}
                  </Link>
                </li>
              </ul>
              <ul dir={`${i18n.language == "ar" ? "rtl" : "ltr"}`}>
                <li>
                  <Link
                    className="text-decoration-none text-white"
                    onClick={onRequestClose}
                    to={HOME}
                  >
                    {t("Home")}
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white text-decoration-none"
                    onClick={onRequestClose}
                    to={CONTACT}
                  >
                    {t("contact")}
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white text-decoration-none"
                    onClick={onRequestClose}
                    to={FAQ}
                  >
                    {t("FAQ")}
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white text-decoration-none"
                    onClick={onRequestClose}
                    to={DOMAINEACTIVITE}
                  >
                    {t("Domaine d'activité")}
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white text-decoration-none"
                    onClick={onRequestClose}
                    to={APPROCHEDEDEV}
                  >
                    {t("Approches de développement")}
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white text-decoration-none"
                    onClick={onRequestClose}
                    to={PARTENARIAT}
                  >
                    {t("Partenariat")}
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white text-decoration-none"
                    onClick={onRequestClose}
                    to={OUTILDEGESTION}
                  >
                    {t("Outils de gestion")}
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white text-decoration-none"
                    onClick={onRequestClose}
                    to={ECITOYEN}
                  >
                    {t("E-Citoyen")}
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white text-decoration-none"
                    onClick={onRequestClose}
                    to={RAPPORTS}
                  >
                    {t("Rapports")}
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white text-decoration-none"
                    onClick={onRequestClose}
                    to={CONCOURS}
                  >
                    {t("Concours")}
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white text-decoration-none"
                    onClick={onRequestClose}
                    to={OFFRE}
                  >
                    {t("offre")}
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-white text-decoration-none"
                    onClick={onRequestClose}
                    to={PUBLICATIONS}
                  >
                    {t("Publications")}
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white text-decoration-none"
                    onClick={onRequestClose}
                    to={VIDEOS}
                  >
                    {t("Vidéos")}
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white text-decoration-none"
                    onClick={onRequestClose}
                    to={ACCESINFO}
                  >
                    {t("Accès à l'information")}
                  </Link>
                </li>
                <li></li>
                <li>
                  <Link
                    className="text-white text-decoration-none"
                    onClick={onRequestClose}
                    to={LINKS}
                  >
                    {t("Liens Utiles")}
                  </Link>
                </li>
              </ul>

              <Button
                className="mb-3"
                variant="danger"
                onClick={onRequestClose}
              >
                <RxCross1 />
              </Button>
            </div>
          </div>
        )}
      </div>
    );
};

export default PlanSite;
