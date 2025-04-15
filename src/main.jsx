import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
  OBJECTIF,
  ZONE,
  COMPOSANTES,
  COUTS,
  SCHEMA,
  APPROCHE,
  CONTACT,
  QUATERIEMEPROJET,
  PROJETODYSEPANO,
  APPROCHEDEDEV,
  CHAMPSINTERVENTION,
  HISTORIQUE,
  ORGANISATION,
  DIRECTIONGENARALE,
  ZONEINTERVENTION,
  GROUPECIBLE,
  DOMAINEACTIVITE,
  PARTENARIAT,
  OUTILDEGESTION,
  ECITOYEN,
  ACCESINFO,
  PROJET,
  CREATION,
  FAQ,
  HOME,
  PRESNTATION,
  RAPPORTS,
  VIDEOS,
  PUBLICATIONS,
  CONCOURS,
  OFFRE,
  NEWSPAGE,
  ALLNEWSPAGE,
  LINKS,
  IMAGES,
  DEMANDEPRETSENLIGNE,
  DEMANDEEQUIPEMENTDEGROUPE,
  DEMANDEPEPINIERES,
  DEMANDESEMENCES,
  JRSFORMATION,
  JRSINFORMATION,
  SERVICESENLIGNE,
  ADMINDASHBOARD,
  LOGIN,
  LIENSINT,
  LIENSNAT,
  FORUMPAGE,
  ALLFORUMPAGE

} from './routes';
import './i18n';
import Home from './pages/home';
import HomeLayout from './layout/homeLayout';
import PresentationLayout from './layout/presentationLayout';
import ProjetLayout from './layout/projetLayout';
import Contact from './pages/contact';
import Faq from './pages/faq';
import Creation from './pages/creation';
import DomainActivite from './pages/domaineActivite';
import ApprocheDev from './pages/approcheDev';
import Partenariat from './pages/partenariat';
import OutilsGestion from './pages/outilsGestion';
import Ecitoyen from './pages/Ecitoyen';
import AccesInfo from './pages/accessInfo';
import ChampsIntervention from './pages/champsIntervention';
import Historique from './pages/historique';
import Organisation from './pages/organisation';
import DirecionGenerale from './pages/direcionGenerale';
import ZoneIntervention from './pages/zoneIntervention';
import GroupeCible from './pages/groupeCible';
import QuateriemeProjet from './pages/quateriemeProjet';
import ProjetOdysepano from './pages/projet';
import Objectif from './pages/objectif';
import Zone from './pages/zone';
import Composantes from './pages/composantes';
import Couts from './pages/couts';
import Schema from './pages/schema';
import Approche from './pages/approche';
import Rapports from './pages/Rapports';
import Videos from './pages/Videos'
import Publications from './pages/Publications'
import Concours from './pages/Concours';
import Offre from './pages/Offre';


import NewsPage from './pages/NewsPage.jsx';
import AllNewsPage from './pages/AllNewsPage.jsx';
import Links from './pages/links.jsx';
import Images from './pages/images';
import DemandePretsEnLigne from './pages/DemandePretsEnLigne';
import DemandeEquipementDeGroupe from './pages/DemandeEquipementDeGroupe';
import DemandePepiniers from './pages/DemandePepiniers';
import DemandeSemences from './pages/DemandeSemences';
import ServicesEnLigne from './pages/ServicesEnLigne';
import Jours_formation from './pages/jours_formation'
import Jours_information from './pages/jours_informations'
import { AuthProvider } from './admin/AuthHook'; // Adjust the import path as needed
import ProtectedRoute from './admin/ProtectedRoute'; // Adjust the import path as needed
import LoginPage from './admin/LoginAdmin'
import AdminLayout from './admin/AdminLayout';
import Liens_national from './pages/liens_national';
import Liens_internationals from './pages/liens_internationals';
import ForumPage from './pages/Forum_page';
import AllForumPage from './pages/AllForumPage';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    path: LOGIN,
    element: <LoginPage />
  },
  {
    path: ADMINDASHBOARD,
    element: <ProtectedRoute component={AdminLayout} />
  },
  {
    path: HOME,
    element: <HomeLayout />,
    children: [
      {
        path: HOME,
        element: <Home />
      },
      {
        path: DEMANDEPRETSENLIGNE,
        element: <DemandePretsEnLigne />
      },
      {
        path: DEMANDEEQUIPEMENTDEGROUPE,
        element: <DemandeEquipementDeGroupe />
      },
      {
        path: DEMANDEPEPINIERES,
        element: <DemandePepiniers />
      },
      {
        path: LIENSNAT,
        element: <Liens_national />
      },
      {
        path: LIENSINT,
        element: <Liens_internationals />
      },
      {
        path: FORUMPAGE,
        element: <ForumPage />
      },
      {
        path: ALLFORUMPAGE,
        element: <AllForumPage />
      },
      {
        path: DEMANDESEMENCES,
        element: <DemandeSemences />
      },
      {
        path: SERVICESENLIGNE,
        element: <ServicesEnLigne />
      },
      {
        path: CONTACT,
        element: <Contact />
      }, {
        path: LINKS,
        element: <Links />
      },
      {
        path: IMAGES,
        element: <Images />
      },
      {
        path: FAQ,
        element: <Faq />
      },
      {
        path: DOMAINEACTIVITE,
        element: <DomainActivite />
      },
      {
        path: ALLNEWSPAGE,
        element: <AllNewsPage />
      },
      {
        path: APPROCHEDEDEV,
        element: <ApprocheDev />
      },
      {
        path: PARTENARIAT,
        element: <Partenariat />
      },
      {
        path: OUTILDEGESTION,
        element: <OutilsGestion />
      },
      {
        path: ECITOYEN,
        element: <Ecitoyen />
      }, {
        path: NEWSPAGE,
        element: <NewsPage />
      },

      {
        path: RAPPORTS,
        element: <Rapports />
      }, {
        path: JRSFORMATION,
        element: <Jours_formation />
      }, {
        path: JRSINFORMATION,
        element: <Jours_information />
      }, {
        path: PUBLICATIONS,
        element: <Publications />
      },
      {
        path: VIDEOS,
        element: <Videos />
      },
      {
        path: ACCESINFO,
        element: <AccesInfo />
      },
      {
        path: CONCOURS,
        element: <Concours />
      },
      {
        path: OFFRE,
        element: <Offre />
      }
    ]
  },

  {
    path: PRESNTATION,
    element: <PresentationLayout />,
    children: [
      {
        path: CREATION,
        element: <Creation />
      },
      {
        path: CHAMPSINTERVENTION,
        element: <ChampsIntervention />
      },
      {
        path: HISTORIQUE,
        element: <Historique />
      },
      {
        path: ORGANISATION,
        element: <Organisation />
      },
      {
        path: DIRECTIONGENARALE,
        element: <DirecionGenerale />
      },
      {
        path: ZONEINTERVENTION,
        element: <ZoneIntervention />
      },
      {
        path: GROUPECIBLE,
        element: <GroupeCible />
      },
    ]

  },

  {
    path: PROJET,
    element: <ProjetLayout />,
    children: [
      {
        path: PROJETODYSEPANO,
        element: <ProjetOdysepano />
      },
      {
        path: QUATERIEMEPROJET,
        element: <QuateriemeProjet />
      },
      {
        path: OBJECTIF,
        element: <Objectif />
      },
      {
        path: ZONE,
        element: <Zone />
      },
      {
        path: COMPOSANTES,
        element: <Composantes />
      },
      {
        path: COUTS,
        element: <Couts />
      },
      {
        path: SCHEMA,
        element: <Schema />
      },
      {
        path: APPROCHE,
        element: <Approche />
      },

    ]

  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);