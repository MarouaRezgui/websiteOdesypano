import React, { useState } from "react";
import { FcLeftDown2 } from "react-icons/fc";
import { useTranslation } from "react-i18next";

const data = [
  {
    city: {
      fr: "Regional Administration of Beja",
      en: "Direction Régionale de Béja",
      ar: "الادارة الجهوية بباجة",
    },
    id: 0,
    title: {
      fr: "Regional Administration of Beja",
      en: "Direction Régionale de Béja",
      ar: "الادارة الجهوية بباجة",
    },
    tel: 78456466,
    fax: 78457353,
    // email: "saidiali1997@gmail.com",
    address: {
      fr: "Administrative District 9000 Béja",
      en: "Cité Administrative 9000 Béja",
      ar: "الحي الاداري - باجة - 9000",
    },
   map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24584.07638619258!2d9.160693287849417!3d36.72427513001905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fca7007fc8eb7f%3A0xbd989b6e12316251!2sDR%20odesypano%20Beja!5e1!3m2!1sfr!2stn!4v1731076443384!5m2!1sfr!2stn"
  },
  {
    city: {
      fr: "Regional Administration of Kef",
      en: "Direction Régionale de Kef",
      ar: "الادارة الجهوية بالكاف",
    },
    id: 1,
    title: {
      fr: "Regional Administration of Kef",
      en: "Direction Régionale de Kef",
      ar: "الادارة الجهوية بالكاف",
    },
    tel: 78224126,
    fax: 78226312,
    // email: "chaabi_ali@yahoo.fr",
    address: {
      fr: "Dhaoui Hennablia Street-7115 Kef",
      en: "Rue Dhaoui Hennablia-7115 le Kef",
      ar: "شارع ضاوي حنابلية -7115-الكاف",
    },
    map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3095.3315810584418!2d8.69883407565736!3d36.16270797243567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fba500572b4d51%3A0x885a2ca9d8c141d8!2sOdesypano%20KEF!5e1!3m2!1sfr!2stn!4v1731062084425!5m2!1sfr!2stn" 
    // map: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d25768.301152502856!2d8.681634785203483!3d36.165638571093545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRue%20Dhaoui%20Hennablia%207115%20le%20Kef!5e0!3m2!1sfr!2stn!4v1715338299166!5m2!1sfr!2stn",
  },
  {
    city: {
      fr: "Regional Administration of Sejnane",
      en: "Direction Régionale de Sejnane",
      ar: "الادارة الجهوية بسجنان",
    },
    id: 2,
    title: {
      fr: "Regional Administration of Sejnane",
      en: "Direction Régionale de Sejnane",
      ar: "الادارة الجهوية بسجنان",
    },
    tel: 72469141,
    fax: 72469055,
    // email: "noureddine.Rjaibi2@gmail.com",
    address: {
      fr: "Tabarka Road-7010 Sejnane",
      en: "Route de Tabarka-7010 Sejnane",
      ar: "طريق طبرقة- 7010 -سجنان",
    },
  map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196237.3500611199!2d9.044146016987373!3d36.89390733527782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e357000d66a537%3A0x43073b68d099a0ea!2sodesypano%20sejnen!5e1!3m2!1sfr!2stn!4v1731076303161!5m2!1sfr!2stn" 
  },
  {
    city: {
      fr: "Regional Administration of Ain Drahem",
      en: "Direction Régionale de Ain Drahem",
      ar: "الادارة الجهوية بعين دراهم",
    },
    id: 3,
    title: {
      fr: "Regional Administration of Ain Drahem",
      en: "Direction Régionale de Ain Drahem",
      ar: "الادارة الجهوية بعين دراهم",
    },
    tel: 78655810,
    fax: 78655176,
    // email: "aloui_kam@hotmail.com",
    address: {
      fr: "Ibn Charaf Street 8130 Ain Drahem",
      en: "Rue Ibn Charaf 8130 Ain Drahem",
      ar: "شارع ابن شرف - 8130 - عين دراهم",
    },
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.657659487959!2d8.679838675644016!3d36.775789572254105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fb3b007a6dc217%3A0x490f882bffdf1284!2sOdesypano%20Aindrahem!5e1!3m2!1sfr!2stn!4v1731311445238!5m2!1sfr!2stn",
    // map: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d12783.343564187411!2d8.675658706610324!3d36.77450419371814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRue%20Ibn%20Charaf%208130%20Ain%20Drahem!5e0!3m2!1sfr!2stn!4v1715339240542!5m2!1sfr!2st",
  },
  {
    city: {
      fr: "Support Unit for the Krib Project",
      en: "Unité  d'appui au projet du Krib",
      ar: "وحدة دعم المشروع على مستوى ولاية سليانة",
    },
    id: 4, 
    title: {
      fr: "Support Unit for the Krib Project",
      en: "Unité  d'appui au projet du Krib",
      ar: "وحدة دعم المشروع على مستوى ولاية سليانة",
    },
    tel: 78891312,
    fax: 78891312,
    // email: "aloui_kam@hotmail.com",
    address: {
      fr: "Ali Zouaoui Avenue-6120 Krib",
      en: "Avenue Ali Zouaoui-6120 le Krib",
      ar: "شارع علي الزواوي - 6120 - الكريب",
    },
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1842.3221195067883!2d9.362240522250083!3d36.08482069202905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fc7ab395af42a3%3A0xb5aa3ed62676e9cf!2sODESYPANO%20UNITE%20SILIANA!5e1!3m2!1sfr!2stn!4v1731062349533!5m2!1sfr!2stn" 
  },
];

function DirectionsGenerale() {
  const [selectedData, setSelectedData] = useState(data[0]);
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const mainColor = import.meta.env.VITE_MAINCOLOR;

  const Card = ({ data }) => {
    return (
      <div className="bg-white shadow-lg p-6 rounded-lg w-full lg:w-2/3 mx-auto">
        <h4
          className="text-center text-xl font-bold mb-4"
          style={{ color: mainColor }}
        >
          <FcLeftDown2 className="inline-block mr-2" />
          {data.title[currentLanguage] || data.title.en}
        </h4>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
          <iframe
            width="300"
            height="200"
            src={data.map}
            className="rounded-lg border"
            allowFullScreen
            loading="lazy"
          ></iframe>
          <div
            dir={currentLanguage === "ar" ? "rtl" : "ltr"}
            className="text-left lg:ml-6 mt-4 lg:mt-0"
          >
            <p className="text-lg">
              <strong>{t("address")}:</strong>{" "}
              {data.address[currentLanguage] || data.address.en}
            </p>
            <p className="text-lg">
              <strong>{t("Téléphone")}:</strong> {data.tel}
            </p>
            <p className="text-lg">
              <strong>{t("Fax")}:</strong>  {data.fax}
            </p>
            {/* <p className="text-lg">
              <strong>{t("Email")}:</strong> {data.email}
            </p> */}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="flex justify-center flex-wrap gap-4 mb-8">
        {data.map((el) => (
          <button
            key={el.id}
            className={`px-4 py-2 rounded text-white font-bold transition-colors duration-300 ${
              selectedData.id === el.id
                ? "bg-green-800"
                : `bg-green-600 hover:bg-green-600`
            }`}
            onClick={() => setSelectedData(el)}
          >
            {el.city[currentLanguage] || el.city.en}
          </button>
        ))}
      </div>
      <Card data={selectedData} />
    </div>
  );
}

export default DirectionsGenerale;
