import { useTranslation } from "react-i18next";
import { FaFacebook } from "react-icons/fa6";
import { ImYoutube } from "react-icons/im";
import { ImLinkedin } from "react-icons/im";
import PlanSite from "../pages/PlanSite";
import { useState } from "react";
function Footer() {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const contactInfo = {
    office: {
      en: "Office de Développement Sylvo Pastoral du Nord-Ouest",
      fr: "North-West Sylvo-Pastoral Development Office",
      ar: "ديوان تنمية الغابات و المراعي بالشمال الغربي",
    },
    address: {
      label: {
        en: "Addresse",
        fr: "Adress",
        ar: "العنوان",
      },
      value: {
        en: "AV. de l'Environnement Béja 9000",
        fr: "Environement avenue Beja 9000",
        ar: "شارع البيئة، باجة 9000",
      },
    },
    phone: {
      label: {
        en: "Téléphone",
        fr: "Phone",
        ar: "الهاتف",
      },
      value: "+216 78 450 500",
    },
    fax: {
      label: {
        en: "Fax",
        fr: "Fax",
        ar: "فاكس",
      },
      value: "+216 78 454 718",
    },
    email: {
      label: {
        en: "E-mail",
        fr: "E-mail",
        ar: "البريد الإلكتروني",
      },
      value: "dgle.odesypano@email.ati.tn",
    },
  };
  return (
    <footer className="bg-gray-900 text-white Myfooter rounded-t-lg">
      <div className="px-4 sm:px-6 md:px-8">
        <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 ">
          <div className="flex flex-col items-center sm:mb-6">
            <h4 className="text-center text-decoration-underline mb-4 text-orange-300 ">
              {t("localisation")}
            </h4>
            {/* <iframe
              width="350"
              height="150"
              
              // src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=P5FX+PG7,%20B%C3%A9ja%20beja+(odesypano)&amp;t=k&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe> */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d768.2156748549405!2d9.1955781!3d36.727945!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fca7821d332133%3A0xda7513100e04a63!2sOdesypano!5e1!3m2!1sfr!2stn!4v1731061369181!5m2!1sfr!2stn" width="350" height="150" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div
            dir={currentLanguage === "ar" ? "rtl" : "ltr"}
            className="flex flex-col items-center sm:mb-4"
          >
            <h4 className="text-center underline mb-4 text-orange-300">
              {t("contactFooter")}
            </h4>

            <div className="mx-1  text-justify px-auto">
              <h6 className="text-sm font-bold px-3">
                {contactInfo.office[currentLanguage] || contactInfo.office.en}
              </h6>
              <div className="px-3">
                <span className="text-sm font-bold text-grey">
                  {contactInfo.address.label[currentLanguage] ||
                    contactInfo.address.label.en}{" "}
                  :
                </span>
                <span className="text-grey-500">
                  {contactInfo.address.value[currentLanguage] ||
                    contactInfo.address.value.en}
                </span>
              </div>

              <div className="px-3">
                <span className="text-sm font-bold">
                  {contactInfo.phone.label[currentLanguage] ||
                    contactInfo.phone.label.en}{" "}
                  :
                </span>
                <span dir="ltr" className="text-grey-500">
                  {contactInfo.phone.value}
                </span>
              </div>

              <div className="px-3">
                {" "}
                <span className="text-sm  font-bold">
                  {contactInfo.fax.label[currentLanguage] ||
                    contactInfo.fax.label.en}{" "}
                  :
                </span>
                <span dir="ltr" className="text-grey-500">
                  {contactInfo.fax.value}
                </span>
              </div>

              <div>
                <span className="text-sm font-bold px-3">
                  {contactInfo.email.label[currentLanguage] ||
                    contactInfo.email.label.en}{" "}
                  :
                </span>
                <a
                  className="text-grey-500 no-underline"
                  href={`mailto:${contactInfo.email.value}`}
                >
                  <span className="text-white font-bold italic">
                    {contactInfo.email.value}
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* <div className="flex flex-col align-items-center sm:mb-4" >
                        <h4 className="text-center text-decoration-underline mb-4 text-orange-300 " >{t('للإتصال بنا')}</h4>

                        <div className=" mx-1 p-2" >
                            <h6 className="text-sm  text-center font-bold">Office de Développement Sylvo Pastoral  du Nord-Ouest</h6>
                            <span className="text-sm text-grey text-center font-bold">Adresse :</span> <span className="text-grey-500">AV. de l'Environnement Béja 9000 </span><br />
                            <span className="text-sm  text-center font-bold">Téléphone :</span> <span className="text-grey-500">+216 78 450 500 -</span>
                            <span className="text-sm  text-center font-bold"> Fax :</span> <span className="text-grey-500">78 45 47 18 </span><br />
                            <span className="text-sm  text-center font-bold">E-mail :</span> <a className="text-grey-500" href="mailto:dgle.odesypano@email.ati.tn"><span className="text-white font-bold italic">dgle.odesypano@email.ati.tn</span></a>
                        </div>
                    </div> */}

          {/* <div className="flex flex-col align-items-center sm:mb-4">
                        <h4 className="text-center  text-decoration-underline mb-4 text-orange-300"  >{t('روابط مفيدة')}</h4>
                        <div className="justify-flex">

                            <div className="mb-3 flex-start text-left d-flex align-items-center
                            ">
                                <div style={{
                                    position: 'relative',
                                    display: 'inline-block',
                                    width: '35px',
                                    height: '35px',
                                    backgroundColor: 'white',
                                    borderRadius: '50%'
                                }} className="mx-2 d-flex  align-items-center">
                                    <FaFacebook size={35} color="blue" />
                                </div>
                                <a href="https://www.facebook.com/profile.php?id=100076769091904" className=" text-sm text-white mx-1 text-decoration-none">Page Facebook</a>
                            </div>

                            <div className="mx-2 mb-3 d-flex text-left align-items-center">

                                <ImYoutube color="red" size={35} />



                                <a href="https://www.youtube.com/channel/UCzVoDG4dL_pQ0mTppLqGjxA"
                                    className=" text-sm text-white mx-1 text-decoration-none">Chaine Youtube</a>

                            </div>

                            <div className="mx-2 mb-3 d-flex text-left align-items-center">
                                <div style={{
                                    position: 'relative',
                                    display: 'inline-block',
                                    width: '35px',
                                    height: '35px',
                                    backgroundColor: 'white',
                                    borderRadius: '50%'
                                }}>
                                    <ImLinkedin color="#171B6B" size={35} /> </div><a className=" text-sm text-white mx-1 text-decoration-none">Page Linkedin</a> </div>
                        </div >
                    </div> */}

          <div className="flex text-white-100 flex-col align-items-center sm:mb-4">
            <button onClick={() => setModalIsOpen(true)}>
              <h4 className="text-center  text-decoration-underline mb-4 text-orange-300 ">
                {" "}
                {t("Plan de site")}
              </h4>
            </button>
          </div>
        </div>
      </div>
      {/* <div
        style={{ backgroundColor: "#3C5347" }}
        className="p-1 justify-content-center"
      >
        <h6 className=" text-white mt-2 block text-sm text-black sm:text-center ">
          © {new Date().toLocaleString("fr-FR").split("/")[2].substring(0, 4)}{" "}
          <a className="text-white font-bold" href="home.html">
            Odesypano™
          </a>
          . All Rights Reserved.
        </h6>
      </div> */}

      <PlanSite
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      />
    </footer>
  );
}

export default Footer;
