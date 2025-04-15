
import React from "react";
import FourMenu from '../components/fourMenu';
import { useTranslation } from 'react-i18next';


const data = [{
  id: 1,
  data: `<table class="table-bordered" border="1" cellspacing="0" cellpadding="0" width="500" class="legend">
  <tr>
    <td width="338" rowspan="2"><p align="center"><strong>Composantes</strong></p></td>
    <td colspan="2"><p align="center"><strong>Millions de</strong></p></td>
    <td width="60" rowspan="2"><p align="center"><strong>%</strong></p></td>
  </tr>
  <tr>
    <td width="100"><p align="center"><strong>DT</strong></p></td>
    <td width="98"><p align="center"><strong>$EU</strong></p></td>
  </tr>
  <tr>
    <td width="338"><p><strong>&nbsp;01. Support institutionnel</strong></p></td>
    <td width="100"><p align="center"><strong>6,9</strong></p></td>
    <td width="98"><p align="center"><strong>5,0</strong></p></td>
    <td width="60"><p align="center"><strong>9%</strong></p></td>
  </tr>
  <tr>
    <td width="338"><p align="justify"><strong>&nbsp;02. Soutien à la production agricole et pastorale et aux AGRs</strong></p></td>
    <td width="100"><p align="center"><strong>6,6</strong></p></td>
    <td width="98"><p align="center"><strong>4,7</strong></p></td>
    <td width="60"><p align="center"><strong>8%</strong></p></td>
  </tr>
  <tr>
    <td width="338"><p align="justify"><strong>&nbsp;03. Consolidation/protection/gestion des ressources naturelles</strong></p></td>
    <td width="100"><p align="center"><strong>37,1</strong></p></td>
    <td width="98"><p align="center"><strong>26,5</strong></p></td>
    <td width="60"><p align="center"><strong>46%</strong></p></td>
  </tr>
  <tr>
    <td width="338"><p align="justify"><strong>&nbsp;04. Amélioration des infrastructures rurales</strong></p></td>
    <td width="100"><p align="center"><strong>29,4</strong></p></td>
    <td width="98"><p align="center"><strong>21,0</strong></p></td>
    <td width="60"><p align="center"><strong>37%</strong></p></td>
  </tr>
  <tr>
    <td width="338"><p align="justify" class="Style3">&nbsp;Coûts Totaux du PNO4 (2011-2016)</p></td>
    <td width="100"><p align="center" class="Style3">80,0</p></td>
    <td width="98"><p align="center" class="Style3">57,2</p></td>
    <td width="60"><p align="center" class="Style3">100%</p></td>
  </tr>
</table>
`
}, {
  id: 2,
  data: `<table class="table-bordered" border="1" cellspacing="0" cellpadding="0" width="500" class="legend">
  <tr>
    <td width="338" rowspan="2"><p align="center"><strong>Components</strong></p></td>
    <td colspan="2"><p align="center"><strong>Millions of</strong></p></td>
    <td width="60" rowspan="2"><p align="center"><strong>%</strong></p></td>
  </tr>
  <tr>
    <td width="100"><p align="center"><strong>DT</strong></p></td>
    <td width="98"><p align="center"><strong>$EU</strong></p></td>
  </tr>
  <tr>
    <td width="338"><p><strong>&nbsp;01. Institutional Support</strong></p></td>
    <td width="100"><p align="center"><strong>6.9</strong></p></td>
    <td width="98"><p align="center"><strong>5.0</strong></p></td>
    <td width="60"><p align="center"><strong>9%</strong></p></td>
  </tr>
  <tr>
    <td width="338"><p align="justify"><strong>&nbsp;02. Support for Agricultural and Pastoral Production and AGRs</strong></p></td>
    <td width="100"><p align="center"><strong>6.6</strong></p></td>
    <td width="98"><p align="center"><strong>4.7</strong></p></td>
    <td width="60"><p align="center"><strong>8%</strong></p></td>
  </tr>
  <tr>
    <td width="338"><p align="justify"><strong>&nbsp;03.Consolidation/Protection/Management of Natural Resources</strong></p></td>
    <td width="100"><p align="center"><strong>37.1</strong></p></td>
    <td width="98"><p align="center"><strong>26.5</strong></p></td>
    <td width="60"><p align="center"><strong>46%</strong></p></td>
  </tr>
  <tr>
    <td width="338"><p align="justify"><strong>&nbsp;04. Improvement of Rural Infrastructure</strong></p></td>
    <td width="100"><p align="center"><strong>29.4</strong></p></td>
    <td width="98"><p align="center"><strong>21.0</strong></p></td>
    <td width="60"><p align="center"><strong>37%</strong></p></td>
  </tr>
  <tr>
    <td width="338"><p align="justify" class="Style3"><h5>&nbsp;Total Costs of PNO4 (2011-2016)</h5></p></td>
    <td width="100"><p align="center" class="Style3"><strong>80.0</p></strong></td>
    <td width="98"><p align="center" class="Style3"><strong>57.2</strong></p></td>
    <td width="60"><p align="center" class="Style3"><strong>100%</strong></p></td>
  </tr>
</table>
`
}, {
  id: 3,
  data: `<table class="table-bordered" border="1" cellspacing="0" cellpadding="0" width="500" class="legend">
  <tr>
    <td width="338" rowspan="2"><p align="center"><strong>العـناصر</strong></p></td>
    <td colspan="2"><p align="center"><strong>مليون</strong></p></td>
    <td width="60" rowspan="2"><p align="center"><strong>%</strong></p></td>
  </tr>
  <tr>
    <td width="100"><p align="center"><strong>دينار</strong></p></td>
    <td width="98"><p align="center"><strong>دولار</strong></p></td>
  </tr>
  <tr>
    <td width="338"><p><strong>&nbsp;01</strong> - التدعيم المؤسساتي للفئات المستهدفة والشركاء وللديوان</p></td>
    <td width="100"><p align="center"><strong>6.9</strong></p></td>
    <td width="98"><p align="center"><strong>5.0</strong></p></td>
    <td width="60"><p align="center"><strong>9%</strong></p></td>
  </tr>
  <tr>
    <td width="338"><p align="justify"><strong>&nbsp;02</strong> - دعم الإنتاج الفلاحي والرعوي وتدعيم خلق مواطن الرزق</p></td>
    <td width="100"><p align="center"><strong>6.6</strong></p></td>
    <td width="98"><p align="center"><strong>4.7</strong></p></td>
    <td width="60"><p align="center"><strong>8%</strong></p></td>
  </tr>
  <tr>
    <td width="338"><p align="justify"><strong>&nbsp;03</strong> - دعم المحافظة على الموارد الطبيعية وحسن التصرف فيها</p></td>
    <td width="100"><p align="center"><strong>37.1</strong></p></td>
    <td width="98"><p align="center"><strong>26.5</strong></p></td>
    <td width="60"><p align="center"><strong>46%</strong></p></td>
  </tr>
  <tr>
    <td width="338"><p align="justify"><strong>&nbsp;04</strong> - تحسين وتطوير البنية الأساسية</p></td>
    <td width="100"><p align="center"><strong>29.4</strong></p></td>
    <td width="98"><p align="center"><strong>21.0</strong></p></td>
    <td width="60"><p align="center"><strong>37%</strong></p></td>
  </tr>
  <tr>
    <td width="338"><p align="justify" class="Style3">&nbsp;<strong>المجموع: </strong>(2011-2016)</p></td>
    <td width="100"><p align="center" class="Style3"><strong>80.0</strong></p></td>
    <td width="98"><p align="center" class="Style3"><strong>57.2</strong></p></td>
    <td width="60"><p align="center" class="Style3"><strong>100%</strong></p></td>
  </tr>
</table>
`
}]


function Couts() {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  return (
    <React.Fragment>
      <FourMenu />
      <div className="block my-2 w-full max-w-[999px] p-6 bg-white border border-gray-200 rounded-lg shadow ">
        <h5 className=" text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-700">{t("couts 1")} </h5>
        <p dir={currentLanguage == "ar" ? "rtl" : "ltr"} className=" text-justify">

          <h5>  - {t("couts 2")} </h5>

        </p>

        {currentLanguage == "ar" && <div dir={currentLanguage == "ar" ? "rtl" : "ltr"} dangerouslySetInnerHTML={{ __html: data[2].data }}></div>}
        {currentLanguage == "fr" && <div dangerouslySetInnerHTML={{ __html: data[1].data }}></div>}
        {currentLanguage == "en" && <div dangerouslySetInnerHTML={{ __html: data[0].data }}></div>}




        <div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Couts;