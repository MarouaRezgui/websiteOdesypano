import React from 'react'
import { useTranslation } from 'react-i18next';

function Liens_internationals() {
  const { t, i18n } = useTranslation();
  const govLinks = [
    { id: 1, key: 'link_int1', url: 'http://www.fao.org/home/fr/', icon: "img/fao.gif" },
    { id: 2, key: 'link_int2', url: 'http://www.imf.org/external/french/index.htm', icon: "img/fmi.jpg" },
    { id: 3, key: 'link_int3', url: 'http://www.banquemondiale.org/', icon: "img/world-bank.jpg" },
  ];
  return (
    <div className="text-center p-5 bg-white shadow-lg rounded-lg mt-3" >
      <h2 className="text-green-500 text-2xl font-semibold mb-4">{t('Liens Internationaux')}</h2>
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
    </div>
  )
}

export default Liens_internationals


