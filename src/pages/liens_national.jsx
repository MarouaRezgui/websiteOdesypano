import React from 'react'
import { useTranslation } from 'react-i18next';

function Liens_national() {
  const { t, i18n } = useTranslation();

  const govLinks = [
    { id: 1, key: 'link1', url: 'http://www.agriculture.tn/', icon: "/img/link_icon_1.png" },
    { id: 2, key: 'link2', url: 'https://www.apia.com.tn/', icon: "/img/link_icon_3.png" },
    { id: 3, key: 'link3', url: 'http://www.oep.nat.tn/index.php/ar', icon: "/img/link_icon_2.png" },
    { id: 4, key: 'link4', url: 'http://www.tunisie.gov.tn/', icon: "/img/link_icon_4.png" }
  ];
  return (

    <div className="text-center p-5 bg-white shadow-lg rounded-lg mt-3" >
      <h2 className="text-green-500 text-2xl font-semibold mb-4">{t('Liens Nationaux')}</h2>
      <ul>
        {govLinks.map(link => (
          <li className={`${i18n.language == "ar" ? 'flex-row-reverse' : ''}
           text-md text-gray-700 hover:text-gray-900 inline-flex items-center mb-2 d-flex items-center 
           ${i18n.language == "ar" ? 'justify-left' : 'justify-right'}
           `} >
            <a href={link.url} className="text-green-500 hover:underline" target="_blank" rel="noopener noreferrer">
              {t(link.key)}
            </a>
            <img className='mx-2' style={{ height: '4vh' }} src={link.icon} />
          </li>
        ))}
      </ul>
    </div >
  )
}

export default Liens_national

