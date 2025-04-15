import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useTranslation } from 'react-i18next';

import { FaRegFilePdf } from "react-icons/fa6";

function AccesInfo() {
    const [showModal, setShowModal] = useState(false)
    const [pdfUrl, setPdfUrl] = useState("")
    const setCurrentPdf = (url) => {
        setPdfUrl(url)
        setShowModal(true)
    }
    const { t, i18n } = useTranslation();
    
    //////////////////////
    const [show, setShow] = useState(false);
    const [modalContent, setModalContent] = useState(null)

    let current_language = i18n.language

    const data_ar = [
        {
            id: 1,
            data: `<table class="text-center border-collapse border border-slate-500" style="width: 90vw; border-collapse: collapse; border: 1px solid black;">
  <!--DWLayoutTable-->
  <tr>
    <td style="border: 1px solid black;" width="35"><p align="center" dir="RTL"><strong> معطيات حول</strong></p></td>
    <td style="border: 1px solid black;" width="201"><p align="center" dir="RTL"><strong>المكلف بالنفاذ إلى المعلومة</strong></p></td>
    <td style="border: 1px solid black;" width="95"><p align="center" dir="RTL"><strong>نائب المكلف بالنفاذ إلى المعلومة</strong></p></td>
    
    
  </tr>
  
  
  <tr>
    <td style="border: 1px solid black;" width="30" align="center"><p dir="RTL"><strong>الاسم واللقب</strong></p></td>
    <td style="border: 1px solid black;" width="201"><p dir="RTL">منجي الرحايمي</p></td>
    <td style="border: 1px solid black;" width="95"><p dir="RTL">لطفي الجندوبي</p></td>
    
    
    
  </tr>
  <tr>
    <td style="border: 1px solid black;" width="30" align="center"><p dir="RTL"><p dir="RTL"><strong>الرتبة/الخطةالوظيفية</strong></p></td>
    <td style="border: 1px solid black;" width="201"><p dir="RTL"><p dir="RTL">مهندس عام/ كاهية مدير</p></td>
    <td style="border: 1px solid black;" width="95"><p dir="RTL">محلل عام/ مدير</p></td>
  </tr>
    <tr>
    <td style="border: 1px solid black;" width="30" align="center"><p dir="RTL"><strong>العنوان الاكتروني</strong></p></td>
    <td style="border: 1px solid black;" width="201"><p dir="RTL">   rhaimi.mongi@odesypano.agrinet.tn    </p></td>
    <td style="border: 1px solid black;" width="95"><p dir="RTL">   jendoubi.lotfi@odesypano.agrinet.tn  </p></td>
  </tr>
    <tr>
    <td style="border: 1px solid black;" width="30" align="center"><p dir="RTL"><strong>الهاتف</strong></p></td>
    <td style="border: 1px solid black;" width="201"><p dir="RTL"> 500 450 78  </p></td>
    <td style="border: 1px solid black;" width="95"><p dir="RTL">500 450 78</p></td>
  </tr>
 
</TABLE>`


        }
    ]

    const data_eng = [
        {
            id: 1,
            data: `<table class="text-center border-collapse border border-slate-500" style="width: 90vw; border-collapse: collapse; border: 1px solid black;">
  <!--DWLayoutTable-->
  <tr>
    <td style="border: 1px solid black;" width="35"><p align="center" dir="RTL"><strong> Information about </strong></p></td>
    <td style="border: 1px solid black;" width="201"><p align="center" dir="RTL"><strong>The responsible for access to information </strong></p></td>
    <td style="border: 1px solid black;" width="95"><p align="center" dir="RTL"><strong>The vice responsible for access to information</strong></p></td>
    
    
  </tr>
  
  
  <tr>
    <td style="border: 1px solid black;" width="30" align="center"><p dir="RTL"><strong>Name and Surname</strong></p></td>
    <td style="border: 1px solid black;" width="201"><p>Monji Rhaimi </p></td>
    <td style="border: 1px solid black;" width="95"><p>Lotfi Jendoubi </p></td>
    
    
    
  </tr>
  <tr>
    <td style="border: 1px solid black;" width="30" align="center"><p><strong>Function/Grade</strong></p></td>
    <td style="border: 1px solid black;" width="201"><p dir="RTL"><p>Chief Ingeneer/Assistant Director  </p></td>
    <td style="border: 1px solid black;" width="95"><p>General Analyst/Director </p></td>
  </tr>
    <tr>
    <td style="border: 1px solid black;" width="30" align="center"><p><strong> Email</strong></p></td>
    <td style="border: 1px solid black;" width="201"><p>   rhaimi.mongi@odesypano.agrinet.tn    </p></td>
    <td style="border: 1px solid black;" width="95"><p>   jendoubi.lotfi@odesypano.agrinet.tn  </p></td>
  </tr>
    <tr>
    <td style="border: 1px solid black;" width="30" align="center"><p dir="RTL"><strong>Phone</strong></p></td>
    <td style="border: 1px solid black;" width="201"><p> 78 450 500  </p></td>
    <td style="border: 1px solid black;" width="95"><p>78 450 500</p></td>
  </tr>
 
</TABLE>`
        },
       
    ]


    const data_fr = [
        {
            id: 1,
            data: `<table class="text-center border-collapse border border-slate-500" style="width: 90vw; border-collapse: collapse; border: 1px solid black;">
  <!--DWLayoutTable-->
  <tr>
    <td style="border: 1px solid black;" width="35"><p align="center" dir="RTL"><strong> Informations sur </strong></p></td>
    <td style="border: 1px solid black;" width="201"><p align="center" dir="RTL"><strong>   Chargé de l'accés à l'information</strong></p></td>
    <td style="border: 1px solid black;" width="95"><p align="center" dir="RTL"><strong>    Le vice chargé de l'accés à l'information </strong></p></td>
    
    
  </tr>
  
  
  <tr>
    <td style="border: 1px solid black;" width="30" align="center"><p dir="RTL"><strong>Nom et Prénom</strong></p></td>
    <td style="border: 1px solid black;" width="201"><p>Mongi Rhaimi </p></td>
    <td style="border: 1px solid black;" width="95"><p>Lotfi Jendoubi </p></td>
    
    
    
  </tr>
  <tr>
    <td style="border: 1px solid black;" width="30" align="center"><p><strong>Fonction/Grade</strong></p></td>
    <td style="border: 1px solid black;" width="201"><p dir="RTL"><p>Ingénieur Géneral/Sous directeur  </p></td>
    <td style="border: 1px solid black;" width="95"><p>Analyste géneral/Directeur</p></td>
  </tr>
    <tr>
    <td style="border: 1px solid black;" width="30" align="center"><p><strong> Email</strong></p></td>
    <td style="border: 1px solid black;" width="201"><p> rhaimi.mongi@odesypano.agrinet.tn    </p></td>
    <td style="border: 1px solid black;" width="95"><p>  jendoubi.lotfi@odesypano.agrinet.tn  </p></td>
  </tr>
    <tr>
    <td style="border: 1px solid black;" width="30" align="center"><p dir="RTL"><strong>Phone</strong></p></td>
    <td style="border: 1px solid black;" width="201"><p> 78 450 500  </p></td>
    <td style="border: 1px solid black;" width="95"><p>78 450 500</p></td>
  </tr>
 
</TABLE>`
        }
    ]




    let currentLanguage = i18n.language



    let dir = currentLanguage == "ar" ? "rtl" : "ltr"

    const handleClick = (i) => {
        console.log(current_language)
        if (current_language == 'en') {
            setModalContent(data_fr[i].data)
        } else if (current_language == 'fr') {
            setModalContent(data_eng[i].data)

        } else if (current_language == 'ar') {
            setModalContent(data_ar[i].data)

        }
        setShow(true)

    }

   

    return (
        <>
        {show && <div style={{ zIndex: 999, backgroundColor: "whitesmoke", width: "100vw", position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", padding: "20px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", borderRadius: "5px" }}>

            <div>
                <Button className="mb-3" variant="danger" onClick={() => setShow(false)}>
                {t('fermer')}
                </Button>

            </div>
            <div dir={i18n.language == "ar" ? "rtl" : "ltr"} dangerouslySetInnerHTML={{ __html: modalContent }}></div>

        </div>}

        <div>

            <Modal show={showModal} centered style={{
                top: "50% !important",
                transform: "translateX(-20%)"
            }} onHide={() => setShowModal(false)} >
                <iframe src={pdfUrl} width="900px" height="600px"> </iframe>
            </Modal>


            <div className="text-center d-flex flex-column align-items-center">
                <h4 className="text-rose-600 text-center mt-4">- {t("Les reponsables chargés de l'accés à l'information au niveau de l'Office de Développement Sylvo-Pastoral du Nord-Ouest")}-</h4>
                <div className="d-flex">
                    {/* <button className="d-flex btn align-items-center mt-2" onClick={() => setCurrentPdf('./pdfs/contact_charges.pdf')} ><FaRegFilePdf color="red" className="mx-2" />
                       {t('Contact des chargés')}</button > */}
                      
                       

 <button onClick={() => { handleClick(0) }} className="d-flex btn align-items-center mt-2" >   {t('Contact des chargés')}</button>


                    <button className="d-flex align-items-center btn mt-2" onClick={() => setCurrentPdf('./pdfs/charge.pdf')} >   {t("Le charge d'accés à l'information")}</button >
                </div>
                <h4 className="text-rose-600 text-center mt-4">-{t('Textes de Loi')}-</h4>
                <div className="d-flex">
                    <button className="d-flex align-items-center btn mt-2" onClick={() => setCurrentPdf('./pdfs/Loi24mars2016DroitAccesInformation2016.pdf')} ><FaRegFilePdf color="red" className="mx-2" />  {t("Loi du 24 mars 2016 : Droit d'Accés à l'Information 2016")} </button >
                    {/* <button className="d-flex align-items-center btn mt-2" onClick={() => setCurrentPdf('./pdfs/Loi2016_22Arabe.pdf')} > <FaRegFilePdf color="red" className="mx-2" />   {t("Décret de Loi 41-2011 : accés aux Documents Administratifs")}    </button> */}
                </div>
                <h4 className="text-rose-600 text-center mt-4">  - {t("Demandes d'accés à l'information")}-</h4>
                <div className="d-flex">
                    <button className="d-flex align-items-center btn mt-2" onClick={() => setCurrentPdf('./pdfs/demande_access.pdf')} ><FaRegFilePdf color="red" className="mx-2" />  {t("Demande d'accés à l'information")} </button >
                    <button className="d-flex align-items-center btn mt-2" onClick={() => setCurrentPdf('./pdfs/demande_plainte.pdf')} ><FaRegFilePdf color="red" className="mx-2" />      {t("Demande de plainte2")}</button >
                </div>
                <br></br>
                {/* <h4 className="text-rose-600 text-center mt-4 text-decoration-none cursor-pointer"  onClick={() => navigate("https://agridata.tn/fr/")}
            href="">  - {t("agridata")}-</h4> */}
             <h4 > <a className="text-rose-600 text-center mt-4 text-decoration-none cursor-pointer" href="https://agridata.tn/fr/" target="_blanc" rel="noopener noreferrer"> - {t("agridata")}- </a></h4>

            

            </div>
        </div>
        </>

    )
}

export default AccesInfo;