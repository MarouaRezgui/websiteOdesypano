import { Link, useLocation } from 'react-router-dom';
import { HOME } from '../routes';
import { useTranslation } from 'react-i18next';

function Breadcrumb() {
    const { t, i18n } = useTranslation();
    const location = useLocation();
    const isArabic = i18n.language === "ar";

    return (
        <nav className={`container  mt-4 d-flex pt-2 flex text-green border rounded-lg ${isArabic ? 'flex-row-reverse' : ''}`} aria-label="Breadcrumb">
            <ol className={`inline-flex items-center space-x-1 md:space-x-3 ${isArabic ? 'flex-row-reverse space-x-reverse' : ''}`}>
                <li className="inline-flex items-center">
                    <Link to={HOME} className={`${isArabic ? 'flex-row-reverse' : ''} text-sm text-gray-700 hover:text-gray-900 inline-flex items-center`}>
                        <svg className="mx-1 w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z">
                            </path>
                        </svg> <span>{t("Home")}</span>
                    </Link>
                </li>
                {location?.pathname.split("/")?.filter(Boolean)?.map((value, index) => (
                    <li key={index} className="">
                        <div className={`${isArabic ? 'flex-row-reverse' : ''} flex items-center`}>
                            <svg className={`w-6 h-6 text-gray-400 ${isArabic ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd">
                                </path>
                            </svg>
                            <span className={`text-gray-700 hover:text-gray-900 ml-1 md:ml-2 text-sm font-medium capitalize ${isArabic ? 'ml-2' : ''}`}>{t(value)}</span>
                        </div>
                    </li>
                ))}
            </ol>
        </nav>
    );
}

export default Breadcrumb;
