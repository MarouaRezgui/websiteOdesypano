
import React from "react";
import { useTranslation } from 'react-i18next';

const data = [{
    id: 1,
    data: `<table class="table-bordered" border="1" cellspacing="0" cellpadding="0" width='90%' align='center'>
  <tr border="1" >
    <td border="1" width="250" valign="top"><p align="center"><strong>&nbsp;Désignation</strong>&nbsp;</p></td>
    <td border="1" width="108" valign="top" ><p align="center"><strong>Période d’exécution</strong></p></td>
    <td border="1" width="122" valign="top"><p align="center"><strong>Coût (Million de DT)</strong></p></td>
  </tr>
  <tr border="1" >
    <td border="1" colspan="3" valign="top"><p><strong>&nbsp;</strong></p></td>
  </tr>
  <tr>
    <td colspan="3" valign="top"><p><strong>1. Projet de Développement des Zones Montagneuses et Forestières du Nord Ouest : Cofinancé avec l’aide de la Banque Mondiale</strong></p></td>
  </tr>
  <tr>
    <td width="250" valign="top"><p><strong>- Première Phase (PNO1)</strong></p></td>
    <td width="108" valign="top"><p align="center">1981-1989</p></td>
    <td width="122" valign="top"><p align="center">24</p></td>
  </tr>
  <tr>
    <td width="250" valign="top"><p><strong>- Deuxième Phase (PNO2)</strong></p></td>
    <td width="108" valign="top"><p align="center">1994-2001</p></td>
    <td width="122" valign="top"><p align="center">53</p></td>
  </tr>
  <tr>
    <td width="250" valign="top"><p><strong>- Troisième Phase (PNO3)</strong></p></td>
    <td width="108" valign="top"><p align="center">2003-2009</p></td>
    <td width="122" valign="top"><p align="center">59</p></td>
  </tr>
  <tr>
    <td width="250" valign="top"><p><strong>- Quatrième Phase (PNO4)</strong></p></td>
    <td width="108" valign="top"><p align="center">2011-2016</p></td>
    <td width="122" valign="top"><p align="center">80</p></td>
  </tr>
  <tr>
    <td colspan="3" valign="top"><p><strong>&nbsp;</strong></p></td>
  </tr>
  <tr>
    <td colspan="3" valign="top"><p><strong>2. Projet de Développement des Clairières Forestières dans le gouvernorat de Jendouba: Cofinancé avec l’aide de la KFW</strong></p></td>
  </tr>
  <tr>
    <td width="250" valign="top"><p><strong>- Première Phase (PCF1)</strong></p></td>
    <td width="108" valign="top"><p align="center">1983-1996</p></td>
    <td width="122" valign="top"><p align="center">16</p></td>
  </tr>
  <tr>
    <td width="250" valign="top"><p><strong>- Deuxième Phase (PCF2)</strong></p></td>
    <td width="108" valign="top"><p align="center">1997-2003</p></td>
    <td width="122" valign="top"><p align="center">16</p></td>
  </tr>
  <tr>
    <td colspan="3" valign="top"><p><strong>&nbsp;</strong></p></td>
  </tr>
  <tr>
    <td colspan="3" valign="top"><p><strong>3. Projet de Développement des Zones Forestières dans le gouvernorat de Jendouba: Cofinancé avec l’aide de la KFW</strong> </p></td>
  </tr>
  <tr>
    <td width="250" valign="top"><p><strong>- Première Phase (PDZF)</strong></p></td>
    <td width="108" valign="top"><p align="center">1991-1997</p></td>
    <td width="122" valign="top"><p align="center">6</p></td>
  </tr>
  <tr>
    <td width="250" valign="top"><p><strong>- Extension (PDZF)</strong></p></td>
    <td width="108" valign="top"><p align="center">1998-2001</p></td>
    <td width="122" valign="top"><p align="center">7</p></td>
  </tr>
  <tr>
    <td colspan="3" valign="top"><p><strong>&nbsp;</strong></p></td>
  </tr>
  <tr>
    <td colspan="3" valign="top"><p><strong>4. Projet de Développement Rural Intégré de Séjenane : Cofinancé avec l’aide de l’Union Européenne</strong> </p></td>
  </tr>
  <tr>
    <td width="150" valign="top"><p><strong>- Première Phase (PS1)</strong></p></td>
    <td width="178" valign="top"><p align="center">1989-1993</p></td>
    <td width="152" valign="top"><p align="center">4</p></td>
  </tr>
  <tr>
    <td width="250" valign="top"><p><strong>- Deuxième Phase (PS2)</strong></p></td>
    <td width="108" valign="top"><p align="center">1994-2001</p></td>
    <td width="122" valign="top"><p align="center">10</p></td>
  </tr>
  <tr>
    <td colspan="3" valign="top"><p><strong>&nbsp;</strong></p></td>
  </tr>
    <tr>
    <td width="250" valign="top"> <p><strong>5-Programme Projet de consolidation des zones d’intervention  de l’ODESYPANO </strong> </p></td>
    <td width="108" valign="top"><p align="center">2017-2024</p></td>
    <td width="122" valign="top"><p align="center">18</p></td>
  </tr>
   

</table>
`
}, {
    id: 2,
    data: `<table class="table-bordered" border="1" cellspacing="0" cellpadding="0" width='90%' align='center'>
  <tr>
    <td width="250" valign="top"><p align="center"><strong>&nbsp;Description</strong>&nbsp;</p></td>
    <td width="108" valign="top" ><p align="center"><strong>Execution Period</strong></p></td>
    <td width="122" valign="top"><p align="center"><strong>Cost (Million DT)</strong></p></td>
  </tr>
  <tr>
    <td colspan="3" valign="top"><p><strong>&nbsp;</strong></p></td>
  </tr>
  <tr>
    <td colspan="3" valign="top"><p><strong>1. Development Project for Mountainous and Forested Areas in the Northwest: Co-financed with the assistance of the World Bank</strong></p></td>
  </tr>
  <tr>
    <td width="250" valign="top"><p><strong>- First Phase (PNO1)</strong></p></td>
    <td width="108" valign="top"><p align="center">1981-1989</p></td>
    <td width="122" valign="top"><p align="center">24</p></td>
  </tr>
  <tr>
    <td width="250" valign="top"><p><strong>- Second Phase (PNO2)</strong></p></td>
    <td width="108" valign="top"><p align="center">1994-2001</p></td>
    <td width="122" valign="top"><p align="center">53</p></td>
  </tr>
  <tr>
    <td width="250" valign="top"><p><strong>- Third Phase (PNO3)</strong></p></td>
    <td width="108" valign="top"><p align="center">2003-2009</p></td>
    <td width="122" valign="top"><p align="center">59</p></td>
  </tr>
  <tr>
    <td width="250" valign="top"><p><strong>- Fourth Phase (PNO4)</strong></p></td>
    <td width="108" valign="top"><p align="center">2011-2016</p></td>
    <td width="122" valign="top"><p align="center">80</p></td>
  </tr>
  <tr>
    <td colspan="3" valign="top"><p><strong>&nbsp;</strong></p></td>
  </tr>
  <tr>
    <td colspan="3" valign="top"><p><strong>2. Development Project for Forest Clearings in the Governorate of Jendouba: Co-financed with the assistance of KFW</strong></p></td>
  </tr>
  <tr>
    <td width="250" valign="top"><p><strong>- First Phase (PCF1)</strong></p></td>
    <td width="108" valign="top"><p align="center">1983-1996</p></td>
    <td width="122" valign="top"><p align="center">16</p></td>
  </tr>
  <tr>
    <td width="250" valign="top"><p><strong>- Second Phase (PCF2)</strong></p></td>
    <td width="108" valign="top"><p align="center">1997-2003</p></td>
    <td width="122" valign="top"><p align="center">16</p></td>
  </tr>
  <tr>
    <td colspan="3" valign="top"><p><strong>&nbsp;</strong></p></td>
  </tr>
  <tr>
    <td colspan="3" valign="top"><p><strong>3. Development Project for Forest Zones in the Governorate of Jendouba: Co-financed with the assistance of KFW</strong> </p></td>
  </tr>
  <tr>
    <td width="250" valign="top"><p><strong>- First Phase (PDZF)</strong></p></td>
    <td width="108" valign="top"><p align="center">1991-1997</p></td>
    <td width="122" valign="top"><p align="center">6</p></td>
  </tr>
  <tr>
    <td width="250" valign="top"><p><strong>- Extension (PDZF)</strong></p></td>
    <td width="108" valign="top"><p align="center">1998-2001</p></td>
    <td width="122" valign="top"><p align="center">7</p></td>
  </tr>
 <tr>
    <td colspan="3" valign="top"><p><strong>&nbsp;</strong></p></td>
  </tr>
  <tr>
    <td colspan="3" valign="top"><p><strong>4. Integrated Rural Development Project of Séjenane: Co-financed with the assistance of the European Union</strong> </p></td>
  </tr>
  <tr>
    <td width="150" valign="top"><p><strong>- First Phase (PS1)</strong></p></td>
    <td width="178" valign="top"><p align="center">1989-1993</p></td>
    <td width="152" valign="top"><p align="center">4</p></td>
  </tr>
  <tr>
    <td width="250" valign="top"><p><strong>- Second Phase (PS2)</strong></p></td>
    <td width="108" valign="top"><p align="center">1994-2001</p></td>
    <td width="122" valign="top"><p align="center">10</p></td>
  </tr>
 <tr>
    <td colspan="3" valign="top"><p><strong>&nbsp;</strong></p></td>
  </tr>
    <tr>
    <td width="250" valign="top"><p><strong>5-Project for the Consolidation of ODESYPANO Intervention Areas </strong> </p> </td>
    <td width="108" valign="top"><p align="center">2017-2024</p></td>
    <td width="122" valign="top"><p align="center">18</p></td>
  </tr>
</table>
`
}, {
    id: 3,
    data: `<table border="1" class="table-bordered" cellspacing="0" cellpadding="0" width='90%' align='center'>
  <tr>
    <td width="250" valign="top"><p align="center"><strong>&nbsp;الوصف</strong>&nbsp;</p></td>
    <td width="108" valign="top" ><p align="center"><strong>فترة التنفيذ</strong></p></td>
    <td width="122" valign="top"><p align="center"><strong>التكلفة (مليون دينار)</strong></p></td>
  </tr>
  <tr>
    <td colspan="3" valign="top"><p><strong>&nbsp;</strong></p></td>
  </tr>
  <tr>
    <td colspan="3" valign="top"><p><strong>1. مشروع تنمية المناطق الجبلية والغابية في الشمال الغربي: بتمويل مشترك مع مساعدة البنك الدولي</strong></p></td>
  </tr>
  <tr>
    <td width="250" valign="top"><p><strong>- المرحلة الأولى (PNO1)</strong></p></td>
    <td width="108" valign="top"><p align="center">1989-1981</p></td>
    <td width="122" valign="top"><p align="center">24</p></td>
  </tr>
  <tr>
    <td width="250" valign="top"><p><strong>- المرحلة الثانية (PNO2)</strong></p></td>
    <td width="108" valign="top"><p align="center">2001-1994</p></td>
    <td width="122" valign="top"><p align="center">53</p></td>
  </tr>
  <tr>
    <td width="250" valign="top"><p><strong>- المرحلة الثالثة (PNO3)</strong></p></td>
    <td width="108" valign="top"><p align="center">2009-2003</p></td>
    <td width="122" valign="top"><p align="center">59</p></td>
  </tr>
  <tr>
    <td width="250" valign="top"><p><strong>- المرحلة الرابعة (PNO4)</strong></p></td>
    <td width="108" valign="top"><p align="center">2016-2011</p></td>
    <td width="122" valign="top"><p align="center">80</p></td>
  </tr>
  <tr>
    <td colspan="3" valign="top"><p><strong>&nbsp;</strong></p></td>
  </tr>
  <tr>
    <td colspan="3" valign="top"><p><strong>2. مشروع تنمية المناطق الغابية في ولاية جندوبة: بتمويل مشترك مع مساعدة KFW</strong></p></td>
  </tr>
  <tr>
    <td width="250" valign="top"><p><strong>- المرحلة الأولى (PCF1)</strong></p></td>
    <td width="108" valign="top"><p align="center">1996-1983</p></td>
    <td width="122" valign="top"><p align="center">16</p></td>
  </tr>
  <tr>
    <td width="250" valign="top"><p><strong>- المرحلة الثانية (PCF2)</strong></p></td>
    <td width="108" valign="top"><p align="center">2003-1997</p></td>
    <td width="122" valign="top"><p align="center">16</p></td>
  </tr>
  <tr>
    <td colspan="3" valign="top"><p><strong>&nbsp;</strong></p></td>
  </tr>
  <tr>
    <td colspan="3" valign="top"><p><strong>3. مشروع تنمية المناطق الغابية في ولاية جندوبة: بتمويل مشترك مع مساعدة KFW</strong> </p></td>
  </tr>
  <tr>
    <td width="250" valign="top"><p><strong>- المرحلة الأولى (PDZF)</strong></p></td>
    <td width="108" valign="top"><p align="center">1997-1991</p></td>
    <td width="122" valign="top"><p align="center">6</p></td>
  </tr>
  <tr>
    <td width="250" valign="top"><p><strong>- التوسعة (PDZF)</strong></p></td>
    <td width="108" valign="top"><p align="center">2001-1998</p></td>
    <td width="122" valign="top"><p align="center">7</p></td>
  </tr>
  <tr>
    <td colspan="3" valign="top"><p><strong>&nbsp;</strong></p></td>
  </tr>
  <tr>
    <td colspan="3" valign="top"><p><strong>4. مشروع تنمية الريف المتكامل في سجنان: بتمويل مشترك مع مساعدة الاتحاد الأوروبي</strong> </p></td>
  </tr>
  <tr>
    <td width="150" valign="top"><p><strong>- المرحلة الأولى (PS1)</strong></p></td>
    <td width="178" valign="top"><p align="center">1993-1989</p></td>
    <td width="152" valign="top"><p align="center">4</p></td>
  </tr>
  <tr>
    <td width="250" valign="top"><p><strong>- المرحلة الثانية (PS2)</strong></p></td>
    <td width="108" valign="top"><p align="center">2001-1994</p></td>
     <td width="122" valign="top"><p align="center">10</p></td>
  </tr>
      <tr>
    <td colspan="3" valign="top"><p><strong>&nbsp;</strong></p></td>
  </tr>
    <tr>
    <td width="250" valign="top"><p><strong>5. البرنامج التدعيمي لمناطق تدخّل الديوان</strong> </p> </td>
    <td width="108" valign="top"><p align="center">2024-2017</p></td>
    <td width="122" valign="top"><p align="center">18</p></td>
  </tr>
</table>
`
}]


function ProjetOdysepano() {
    const { t, i18n } = useTranslation();
    let current_language = i18n.language
    return (
        <div dir={current_language == "ar" ? 'rtl' : 'ltr'} className="container mx-auto flex flex-col items-center py-3">

            <div className="block my-2 w-full max-w-[999px] p-6 bg-white border border-gray-200 rounded-lg shadow ">
                <h5 className="mb-4 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-700"> {t("projet de l'Odesypano")} </h5>

                <p className="font-normal text-gray-700 dark:text-gray-500 text-justify">{t("projet de l'Odesypano 1")}</p>

                {current_language == "ar" && <div dangerouslySetInnerHTML={{ __html: data[2].data }}></div>}
                {current_language == "fr" && <div dangerouslySetInnerHTML={{ __html: data[1].data }}></div>}
                {current_language == "en" && <div dangerouslySetInnerHTML={{ __html: data[0].data }}></div>}

            </div>


        </div>
    )
}

export default ProjetOdysepano;