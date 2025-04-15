import { Link } from "react-router-dom";
import { CONTACT, FAQ, HOME } from "../routes";
import { useTranslation } from "react-i18next";
import { IoHome, IoListSharp } from "react-icons/io5";
import { FaPhoneAlt, FaQuestionCircle } from "react-icons/fa";
import { useState } from "react";
import SearchComponent from "./SearchComponent";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
  };

  return (
    <div className="navbar_main m-0 bg-green-500 text-white flex flex-col lg:flex-row justify-between">
      <div className="flex flex-wrap items-center justify-center lg:justify-start mb-2 mt-2">
        <ul
          className="flex flex-row sm:justify-center languages_links space-x-2"
          role="none"
        >
          <li className="mx-2">
            <button
              onClick={() => changeLanguage("en")}
              className="block text-sm"
              role="menuitem"
            >
              <div className="inline-flex items-center hover:bg-green-800 p-1">
                <img
                  className="language_icons mx-1"
                  src="/img/FR.svg"
                  alt="Français"
                />{" "}
                Français
              </div>
            </button>
          </li>
          <li className="mx-2">
            <button
              onClick={() => changeLanguage("fr")}
              className="block text-sm"
              role="menuitem"
            >
              <div className="inline-flex items-center hover:bg-green-800 p-1">
                <img
                  className="language_icons mx-1"
                  src="/img/GB.svg"
                  alt="English"
                />{" "}
                English
              </div>
            </button>
          </li>
          <li className="mx-2">
            <button
              onClick={() => changeLanguage("ar")}
              className="block text-sm"
              role="menuitem"
            >
              <div className="inline-flex items-center hover:bg-green-800 p-1">
                <img
                  className="language_icons mx-1"
                  src="/img/TN.svg"
                  alt="العربية"
                />{" "}
                العربية
              </div>
            </button>
          </li>
        </ul>
        <div className='search_component m-0'>
                    <SearchComponent />
                </div>
        
      </div>

      <div className="lg:ml-4 w-full lg:w-auto lg:mt-0 mt-2">
        <div className="flex flex-col items-center w-full">
          <div className="w-2/3 mt-2 flex items-center lg:w-auto m-auto">
             <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white mx-3 "
              aria-controls="navbar-menu"
              aria-expanded={isOpen}
            >
              <IoListSharp size={30} />
            </button> 
            {/* <SearchComponent /> */}
          
          </div>

          <div className="m-auto mt-1"></div>
        </div>
      </div>

      <div
        id="navbar-menu"
        className={`${
          isOpen ? "block" : "hidden"
        } lg:flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4 mt-4 lg:mt-0`}
      >
        <ul className="flex items-center flex-col lg:flex-row font-medium lg:p-0 lg:space-x-4 space-y-2 lg:space-y-0">
          <li>
            <Link
              to={CONTACT}
              className="p-1 text-white capitalize flex items-center text-decoration-none block px-1 font-bold hover:bg-green-800 hover:rounded"
            >
              <FaPhoneAlt size={20} className="mx-1" /> {t("contact")}
            </Link>
          </li>
          <li>
            <Link
              to={FAQ}
              className="p-1 text-white flex items-center text-decoration-none block px-1 font-bold hover:bg-green-800 hover:rounded"
            >
              <FaQuestionCircle size={20} className="mx-1" /> {t("FAQ")}
            </Link>
          </li>
          <li>
            <Link
              to={HOME}
              className="p-1 text-white flex items-center text-decoration-none block px-1 font-bold hover:bg-green-800 hover:rounded"
              aria-current="page"
            >
              <IoHome size={20} className="mx-1" /> {t("Acceuil")}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
