import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useTranslation } from 'react-i18next';

function GroupeCible() {
    const { t, i18n } = useTranslation();
    const [show, setShow] = useState(false);
    const [modalContent, setModalContent] = useState(null)

    let current_language = i18n.language

    const data_ar = [
        {
            id: 1,
            data: `<table style="border : black 2px solid" border class="p-1 text-center table-bordered" border="5">
  <!--DWLayoutTable-->
  <tr>
    <td valign="top"><p align="center" dir="RTL"><strong>ع ر</strong></p></td>
    <td valign="top"><p align="center" dir="RTL"><strong>الفئات المستهدفة</strong></p></td>
    <td valign="top"><p align="center" dir="RTL"><strong>الأهمّية</strong></p></td>
    <td valign="top"><p align="center" dir="RTL"><strong>الخصائص</strong></p></td>
    <td valign="top"><p align="center" dir="RTL"><strong>نوع التدخلات</strong></p></td>
  </tr>
  <tr>
    <td colspan="5" valign="top"><p dir="RTL"><strong><span dir="LTR">I</span></strong><span dir="RTL"> </span><span dir="RTL"> </span><strong><span dir="RTL"> </span><span dir="RTL"> </span>- الملكيّة العقّاريّة</strong></p></td>
  </tr>
  <tr>
    <td valign="top"><p dir="RTL"><strong>01</strong></p></td>
    <td valign="top"><p dir="RTL"><strong>مالكي المستغلاّت    الكبرى</strong></p></td>
    <td valign="top"><p dir="RTL">2 <span dir="LTR"> </span><span dir="LTR"> </span><span dir="LTR"><span dir="LTR"> </span><span dir="LTR"> </span>%</span></p></td>
    <td valign="top"><p dir="RTL">فلاحة عصريّة موجّهة للسّوق ومندمجة مع المنظومة البنكيّة</p></td>
    <td valign="top"><p dir="RTL">الأنشطة    الجماعيّة والخدمات الفلاحيّة </p></td>
  </tr>
  <tr>
    <td valign="top"><p dir="RTL"><strong>02</strong></p></td>
    <td valign="top"><p dir="RTL"><strong>مستغلّين    فلاحيّين في وضعيّة مستقرّة</strong></p></td>
    <td valign="top"><p dir="RTL">20 <span dir="LTR"> </span><span dir="LTR"> </span><span dir="LTR"><span dir="LTR"> </span><span dir="LTR"> </span>%</span> </p></td>
    <td valign="top"><p dir="RTL">نشطين، في وضعيّة    مستقرّة ومتقبّلين لأنشطة الدّيوان </p></td>
    <td valign="top"><p dir="RTL">الاستشارة    الفلاحيّة والأنشطة المدرّة للدّخل</p></td>
  </tr>
  <tr>
    <td valign="top"><p dir="RTL"><strong>03</strong></p></td>
    <td valign="top"><p dir="RTL"><strong>مستغلّين    فلاحيّين في وضعيّة هشّة</strong></p></td>
    <td valign="top"><p dir="RTL">50 <span dir="LTR"> </span><span dir="LTR"> </span><span dir="LTR"><span dir="LTR"> </span><span dir="LTR"> </span>%</span> </p></td>
    <td valign="top"><p dir="RTL">المجموعة الأكثر    تمثيليّة تطلب خصوصا التشغيل</p></td>
    <td valign="top"><p dir="RTL">تسهيل النّفاذ    إلى الموارد الطّبيعيّة والأنشطة المدرّة للدّخل</p></td>
  </tr>
  <tr>
    <td valign="top"><p dir="RTL"><strong>04</strong></p></td>
    <td valign="top"><p dir="RTL"><strong>مربّو الحيوانات    وغير مالكين للأرض</strong></p></td>
    <td valign="top"><p dir="RTL">28 <span dir="LTR"> </span><span dir="LTR"> </span><span dir="LTR"><span dir="LTR"> </span><span dir="LTR"> </span>%</span> </p></td>
    <td valign="top"><p dir="RTL">فئة تظمّ العمّال    ذوي الدّخل القارّ والموسمي والحرفيّين والفئات المحتاجة</p></td>
    <td valign="top"><p dir="RTL">التكوين المختصّ    و النّهوض بالتشغيل</p></td>
  </tr>
  <tr>
    <td colspan="5" valign="top"><p dir="RTL"><strong><span dir="LTR">II</span></strong><span dir="RTL"> </span><span dir="RTL"> </span><strong><span dir="RTL"> </span><span dir="RTL"> </span>- المرأة الرّيفيّة</strong></p></td>
  </tr>
  <tr>
    <td valign="top"><p dir="RTL"><strong>01</strong></p></td>
    <td valign="top"><p dir="RTL"><strong>المرأة العاملة    في مستغلّتها</strong></p></td>
    <td valign="top"><p dir="RTL">20<span dir="LTR"> </span><span dir="LTR"> </span><span dir="LTR"><span dir="LTR"> </span><span dir="LTR"> </span> </span><span dir="RTL"> </span><span dir="RTL"> </span><span dir="RTL"> </span><span dir="RTL"> </span> <span dir="LTR"> </span><span dir="LTR"> </span><span dir="LTR"><span dir="LTR"> </span><span dir="LTR"> </span>%</span> </p></td>
    <td valign="top"><p dir="RTL">زوجات الفلاّحين    الذين هم في وضعيّة مستقرّة</p></td>
    <td valign="top"><p dir="RTL">الأنشطة المدرّة    للدّخل واستثمارات متوسّطة المدى</p></td>
  </tr>
  <tr>
    <td valign="top"><p dir="RTL"><strong>02</strong></p></td>
    <td valign="top"><p dir="RTL"><strong>المرأة بدون شغل    /العاملة خارج الضّيعة</strong></p></td>
    <td valign="top"><p dir="RTL">78 <span dir="LTR"> </span><span dir="LTR"> </span><span dir="LTR"><span dir="LTR"> </span><span dir="LTR"> </span>%</span> </p></td>
    <td valign="top"><p dir="RTL">زوجات الفلاّحين    الذين هم في وضعيّة هشّة أو بدون أرض</p></td>
    <td valign="top"><p dir="RTL">التكوين وخلق    مواطن الشّغل</p></td>
  </tr>
  <tr>
    <td colspan="5" valign="top"><p dir="RTL"><strong><span dir="LTR">III</span>    -    الشّباب </strong></p></td>
  </tr>
  <tr>
    <td valign="top"><p dir="RTL"><span dir="RTL"> </span><span dir="RTL"> </span><strong><span dir="RTL"> </span><span dir="RTL"> </span>01</strong></p></td>
    <td valign="top"><p dir="RTL"><strong>أبناء العمّال</strong></p></td>
    <td valign="top"><p dir="RTL"> ؟ <span dir="LTR"> </span><span dir="LTR"> </span><span dir="LTR"><span dir="LTR"> </span><span dir="LTR"> </span>%</span><span dir="RTL"> </span><span dir="RTL"> </span><span dir="RTL"> </span><span dir="RTL"> </span>  </p></td>
    <td valign="top"><p dir="RTL">يمتلكون معارف فنيّة في المجال الفلاحي وهم في وضعيّة اقتصاديّة هشّة</p></td>
    <td valign="top"><p dir="RTL">دعم منظومات الإنتاج والصّناعات التحويليّة للمنتوجات الفلاحيّة </p></td>
  </tr>
  <tr>
    <td valign="top"><p dir="RTL"><strong>02</strong></p></td>
    <td valign="top"><p dir="RTL"><strong>أبناء الفلاّحين</strong></p></td>
    <td valign="top"><p dir="RTL"> ؟ <span dir="LTR"> </span><span dir="LTR"> </span><span dir="LTR"><span dir="LTR"> </span><span dir="LTR"> </span>%</span> </p></td>
    <td valign="top"><p dir="RTL">أبناء مالكي    المستغلاّت الكبرى </p></td>
    <td valign="top"><p dir="RTL">دعم خلق    المؤسّسات الصّغرى والتكوين المرتبط بذلك</p></td>
  </tr>
  <tr>
    <td valign="top"><p dir="RTL"><strong>03</strong></p></td>
    <td valign="top"><p dir="RTL"><strong>أصحاب الشّهائد</strong></p></td>
    <td valign="top"><p dir="RTL"> ؟ <span dir="LTR"> </span><span dir="LTR"> </span><span dir="LTR"><span dir="LTR"> </span><span dir="LTR"> </span>%</span> </p></td>
    <td valign="top"><p dir="RTL">ينحدرون من مناطق    فلاحيّة لكن غير متحمّسين للعمل الفلاحي، مستهدفين من طرف الدّولة عبر الآليّات    الخاصّة بالتشغيل</p></td>
    <td valign="top"><p dir="RTL">النهوض بالأنشطة    المدرّة الدّخل</p></td>
  </tr>
</TABLE>`


        }, {
            id: 2,
            data: `<table class="text-center border-collapse border border-slate-500" style="width: 90vw; border-collapse: collapse; border: 1px solid black;">
<tr style="border: 1px solid black;">
  <td style="border: 1px solid black;" width="300" align="center" ><p><strong>الأهمية</strong></p></td>
  <td style="border: 1px solid black;" width="400" ><p align="center">20%</p></td>
</tr>
<tr style="border: 1px solid black;">
<td style="border: 1px solid black;" width="300" align="center" ><strong>الخصائص</strong> </td>
<td style="border: 1px solid black;" width="400" ><p align="justify">فلاحة عصريّة موجّهة للسّوق ومندمجة مع المنظومة البنكيّة</p></td>
</tr>
<tr style="border: 1px solid black;" >
<td style="border: 1px solid black;" width="300" align="center"><p ><strong> نوع التدخلات

</strong></p></td>
<td style="border: 1px solid black;" width="400" align="justify"><p >الأنشطة الجماعيّة والخدمات الفلاحيّة

</p></td>
</tr>
</table>`
        }, {
            id: 3,
            data: `<table class="text-center border-collapse border border-slate-500" style="width: 90vw; border-collapse: collapse; border: 1px solid black;">
<tr>
  <td style="border: 1px solid black;" width="300" align="center" ><p><strong>الأهمية</strong></p></td>
  <td style="border: 1px solid black;" width="400" ><p align="center">20% </p></td>
</tr>
<tr>
<td style="border: 1px solid black;" width="300" align="center" ><strong>الخصائص</strong> </td>
<td style="border: 1px solid black;" width="400"  align="justify"><p> نشطين، في وضعيّة مستقرّة ومتقبّلين لأنشطة الدّيوان

</p></td>
</tr>
<tr>
<td style="border: 1px solid black;" width="300" align="center" ><p ><strong> نوع التدخلات

</strong></p></td>
<td style="border: 1px solid black;" width="400" align="justify"><p > الاستشارة الفلاحيّة والأنشطة المدرّة للدّخل

 </p></td>
</tr>
</table>`
        }, {
            id: 4,
            data: `<table class="text-center border-collapse border border-slate-500" style="width: 90vw; border-collapse: collapse; border: 1px solid black;">
    <!--DWLayoutTable-->
<TR style="border: 1px solid black;">
  <TD style="border: 1px solid black;" width="300" align="center" ><p><strong>الأهمية</strong></p></TD>
  <TD style="border: 1px solid black;" width="400" ><p align="center">50% </p></TD>
</TR>
<TR style="border: 1px solid black;">
<TD style="border: 1px solid black;" width="300" align="center"><strong>الخصائص</strong> </TD>
<TD style="border: 1px solid black;" width="400"  align="justify"><p> المجموعة الأكثر تمثيليّة تطلب خصوصا التشغيل </p></TD>
</TR>
<TR style="border: 1px solid black;">
<TD style="border: 1px solid black;" width="300" align="center"><p ><strong>نوع التدخلات

 </strong></p></TD>
<TD style="border: 1px solid black;" width="400" align="justify"><p >تسهيل النّفاذ إلى الموارد الطّبيعيّة والأنشطة المدرّة للدّخل

</p></TD>
</TR>
</TABLE>`
        }, {
            id: 5,
            data: `<table class="text-center border-collapse border border-slate-500" style="width: 90vw; border-collapse: collapse; border: 1px solid black;">
    <!--DWLayoutTable-->
<TR style="border: 1px solid black;">
  <TD style="border: 1px solid black;" width="300" align="center" ><p><strong>الأهمية</strong></p></TD>
  <TD style="border: 1px solid black;" width="400" ><p align="center">28% </p></TD>
</TR>
<TR style="border: 1px solid black;">
<TD style="border: 1px solid black;" width="300" align="center"><strong>الخصائص</strong> </TD>
<TD style="border: 1px solid black;" width="400"  align="justify"><p>فئة تظمّ العمّال ذوي الدّخل القارّ والموسمي والحرفيّين والفئات المحتاجة

</p></TD>
</TR>
<TR>
<TD style="border: 1px solid black;" width="300" align="center"><p ><strong>نوع التدخلات

 </strong></p></TD>
<TD style="border: 1px solid black;" width="400" align="justify"><p >التكوين المختصّ و النّهوض بالتشغيل

</p></TD>
</TR>
</TABLE>`
        }, {
            id: 6,
            data: `<table class="text-center border-collapse border border-slate-500" style="width: 90vw; border-collapse: collapse; border: 1px solid black;">
    <!--DWLayoutTable-->
<TR style="border: 1px solid black;">
  <TD style="border: 1px solid black;" height="19" valign="top"><div align="center" ><strong> الفئات المستهدفة
</strong></div></TD>
  <TD style="border: 1px solid black;" width="120"  valign="top"><div align="center" ><strong>الأهمية</strong></div></TD>
<TD style="border: 1px solid black;" width="300" align="center" valign="top"  ><strong>الخصائص</strong> </TD>
  <TD style="border: 1px solid black;" width="315" valign="top"><div align="center" ><strong> نوع التدخلات
</strong></div></TD>
</TR>
<TR style="border: 1px solid black;">
<TD style="border: 1px solid black;" width="120" height="79"valign="top"><p align="center" ><strong>  المرأة العاملة في مستغلّتها </strong></p></TD>
  <TD style="border: 1px solid black;" width="120" ><p align="center">20% </p></TD>
<TD style="border: 1px solid black;" width="300" valign="top"><p align="justify"> زوجات الفلاّحين الذين هم في وضعيّة مستقرّة </p></TD>
  <TD style="border: 1px solid black;" width="315" ><p align="justify"> الأنشطة المدرّة للدّخل واستثمارات متوسّطة المدى </p></TD>
</TR>
<TR style="border: 1px solid black;">
  <TD style="border: 1px solid black;" height="87" ><p align="center" class="Style1"><strong>المرأة بدون شغل /العاملة خارج الضّيعة</strong></p></TD>
<TD style="border: 1px solid black;" width="120" ><p align="center">20% </p></TD>
<TD style="border: 1px solid black;" width="300" ><p align="justify">	
زوجات الفلاّحين الذين هم في وضعيّة هشّة أو بدون أرض</p></TD>
  <TD style="border: 1px solid black;" width="315"><p align="justify">التكوين وخلق مواطن الشّغل

</p></TD>
</TR>
</TABLE>`
        }, {
            id: 7,
            data: `<table class="text-center border-collapse border border-slate-500" style="width: 90vw; border-collapse: collapse; border: 1px solid black;">
    <!--DWLayoutTable-->
<TR style="border: 1px solid black;">
  <TD style="border: 1px solid black;" width="104"  valign="top"><div align="center" ><strong> الفئات المستهدفة
</strong></div></TD>
<TD style="border: 1px solid black;" width="300" align="center" valign="top" ><strong>الخصائص</strong> </TD>
  <TD style="border: 1px solid black;" width="300" valign="top"><div align="center" ><strong>نوع التدخلات
 </strong></div></TD>
</TR>
<TR style="border: 1px solid black;">
  <TD style="border: 1px solid black;" width="104"valign="top"><p align="center"><strong>أبناء العمال</strong></p></TD>
<TD style="border: 1px solid black;" width="300" valign="top"><div align="justify"> يمتلكون معارف فنيّة في المجال الفلاحي وهم في وضعيّة اقتصاديّة هشّة </div></TD>
  <TD style="border: 1px solid black;" width="300" valign="top"><p align="justify">دعم منظومات الإنتاج والصّناعات التحويليّة للمنتوجات الفلاحيّة</p></TD>
</TR>
<TR style="border: 1px solid black;">
  <TD style="border: 1px solid black;" width="104"valign="top"><p align="center"><strong>أبناء الفلاحين</strong></p></TD>
<TD style="border: 1px solid black;" width="300" valign="top"><div align="justify">	
أبناء مالكي المستغلاّت الكبرى</div></TD>
  <TD style="border: 1px solid black;" width="300" valign="top"><p align="justify"> 	
دعم خلق المؤسّسات الصّغرى والتكوين المرتبط بذلك </p></TD>
</TR>
<TR style="border: 1px solid black;">
  <TD style="border: 1px solid black;" width="104"valign="top"><p align="center" ><strong>أصحاب الشّهائد

 </strong></p></TD>
<TD style="border: 1px solid black;" width="300" valign="top"><div>ينحدرون من مناطق فلاحيّة لكن غير متحمّسين للعمل الفلاحي، مستهدفين من طرف الدّولة عبر الآليّات الخاصّة بالتشغيل</div></TD>
  <TD style="border: 1px solid black;" width="300" valign="top"><p align="justify">النهوض بالأنشطة المدرّة الدّخل

</p></TD>
</TR>
</TABLE>`
        }
    ]

    const data_eng = [
        {
            id: 1,
            data: `<table class="text-center border-collapse border border-slate-500" style="width: 90vw; border-collapse: collapse; border: 1px solid black;">
    <tr style="border: 1px solid black;">
        <td style="border: 1px solid black;" width="35"><p align="center" class="legend"><strong>N°</strong></p></td>
        <td style="border: 1px solid black;" width="201"><p align="center"><strong>Target Group</strong></p></td>
        <td style="border: 1px solid black;" width="95"><strong>Importance</strong></td>
        <td style="border: 1px solid black;" width="355"><p><strong>Characteristics</strong></p></td>
        <td style="border: 1px solid black;" width="245"><p><strong>Type of intervention required</strong></p></td>
    </tr>
    <tr style="border: 1px solid black;">
        <td width="231" colspan="5"><p><strong>Landowners</strong></p></td>
    </tr>
    <tr style="border: 1px solid black;">
        <td style="border: 1px solid black;" width="30" align="center">01</td>
        <td style="border: 1px solid black;" width="201">Large Landowners</td>
        <td style="border: 1px solid black;"><p align="center">2%</p></td>
        <td style="border: 1px solid black;" width="355">Commercial and modern agriculture and integration into the banking system</td>
        <td style="border: 1px solid black;" width="245">Community development and agricultural services</td>
    </tr>
    <tr style="border: 1px solid black;">
        <td style="border: 1px solid black;" width="30" align="center">02</td>
        <td style="border: 1px solid black;" width="201">Stable Farmers</td>
        <td style="border: 1px solid black;"><p align="center">20%</p></td>
        <td style="border: 1px solid black;" width="355">Dynamic, stable, and receptive to ODESYPANO interventions</td>
        <td style="border: 1px solid black;" width="245">Agricultural advice and income-generating activities</td>
    </tr>
    <tr style="border: 1px solid black;">
        <td style="border: 1px solid black;" width="30" align="center">03</td>
        <td style="border: 1px solid black;" width="201">Farmers in precarious situations</td>
        <td style="border: 1px solid black;"><p align="center">50%</p></td>
        <td style="border: 1px solid black;" width="355">The largest group mainly seeking employment</td>
        <td style="border: 1px solid black;" width="245">Access facilitation to resources and income-generating activities</td>
    </tr>
    <tr style="border: 1px solid black;">
        <td style="border: 1px solid black;" width="30" align="center">04</td>
        <td style="border: 1px solid black;" width="201">Landless Breeders</td>
        <td style="border: 1px solid black;"><p align="center">28%</p></td>
        <td style="border: 1px solid black;" width="355">Category including fixed and occasional income workers, artisans, and the needy</td>
        <td style="border: 1px solid black;" width="245">Vocational training and job creation</td>
    </tr>
    <tr style="border: 1px solid black;">
        <td style="border: 1px solid black;" width="231" colspan="5"><p class="legend"><strong>Rural Women</strong></p></td>
    </tr>
    <tr style="border: 1px solid black;">
        <td style="border: 1px solid black;" width="30" align="center">01</td>
        <td style="border: 1px solid black;" width="201">Women working on their farms</td>
        <td style="border: 1px solid black;"><p align="center">20%</p></td>
        <td style="border: 1px solid black;" width="355">Women of stable farmers</td>
        <td style="border: 1px solid black;" width="245">Income-generating activities and medium-term investments</td>
    </tr>
    <tr style="border: 1px solid black;">
        <td style="border: 1px solid black;" width="30" align="center">02</td>
        <td style="border: 1px solid black;" width="201">Unemployed women/with off-farm jobs</td>
        <td style="border: 1px solid black;"><p align="center">78%</p></td>
        <td style="border: 1px solid black;" width="355">Women of farmers in precarious situations and the landless</td>
        <td style="border: 1px solid black;" width="245">Non-technical training and job creation</td>
    </tr>
    <tr style="border: 1px solid black;">
        <td style="border: 1px solid black;" width="201" colspan="5"><strong>Youth</strong></td>
    </tr>
    <tr style="border: 1px solid black;">
        <td style="border: 1px solid black;" width="30" align="center">01</td>
        <td style="border: 1px solid black;" width="201">Sons of workers</td>
        <td style="border: 1px solid black;">&nbsp;</td>
        <td style="border: 1px solid black;" width="355">Having knowledge in agricultural practices and being in very precarious economic situations</td>
        <td style="border: 1px solid black;" width="245">Support for the transformation of agricultural products and value chains</td>
    </tr>
    <tr style="border: 1px solid black;">
        <td style="border: 1px solid black;" width="30" align="center">02</td>
        <td style="border: 1px solid black;" width="201">Sons of farmers</td>
        <td style="border: 1px solid black;">&nbsp;</td>
        <td style="border: 1px solid black;" width="355">Sons of large landowners</td>
        <td style="border: 1px solid black;" width="245">Support for business creation processes and entrepreneurial training (CEFE)</td>
    </tr>
    <tr style="border: 1px solid black;">
        <td style="border: 1px solid black;" width="30" align="center">03</td>
        <td style="border: 1px solid black;" width="201">Young graduates</td>
        <td style="border: 1px solid black;">&nbsp;</td>
        <td style="border: 1px solid black;" width="355">Coming from agricultural areas but ambivalent towards agriculture, targeted by state mechanisms for promoting employment</td>
        <td style="border: 1px solid black;" width="245">Income-generating activities</td>
    </tr>
</table>
`
        },
        {
            id: 2,
            data: `<table class="text-center border-collapse border border-slate-500" style="width: 90vw; border-collapse: collapse; border: 1px solid black;">
    <tr style="border: 1px solid black;">
        <td style="border: 1px solid black;" width="300" align="center">
            <p><strong>Importance</strong></p>
        </td>
        <td style="border: 1px solid black;" width="400">
            <p align="center">20%</p>
        </td>
    </tr>
    <tr style="border: 1px solid black;">
        <td style="border: 1px solid black;" width="300" align="center">
            <strong>Characteristic</strong>
        </td>
        <td style="border: 1px solid black;" width="400">
            <p align="justify">Commercial and modern agriculture and integration into the banking system</p>
        </td>
    </tr>
    <tr style="border: 1px solid black;">
        <td style="border: 1px solid black;" width="300" align="center">
            <p><strong>Type of intervention</strong></p>
        </td>
        <td style="border: 1px solid black;" width="400">
            <p align="justify">Women of farmers in precarious situations and landless</p>
        </td>
    </tr>
</table>`
        }, {
            id: 3,
            data: `<table class="text-center border-collapse border border-slate-500" style="width: 90vw; border-collapse: collapse; border: 1px solid black;">
    <tr>
        <td style="border: 1px solid black;" width="300" align="center">
            <p><strong>Importance</strong></p>
        </td>
        <td style="border: 1px solid black;" width="400">
            <p align="center">20%</p>
        </td>
    </tr>
    <tr>
        <td style="border: 1px solid black;" width="300" align="center">
            <strong>Characteristic</strong>
        </td>
        <td style="border: 1px solid black;" width="400" align="justify">
            <p>Dynamic, stable, and receptive to ODESYPANO interventions</p>
        </td>
    </tr>
    <tr>
        <td style="border: 1px solid black;" width="300" align="center">
            <p><strong>Type of intervention</strong></p>
        </td>
        <td style="border: 1px solid black;" width="400" align="justify">
            <p>Agricultural advice and income-generating activities</p>
        </td>
    </tr>
</table>
`
        }, {
            id: 4,
            data: `<table class="text-center border-collapse border border-slate-500" style="width: 90vw; border-collapse: collapse; border: 1px solid black;">
    <tr style="border: 1px solid black;">
        <td style="border: 1px solid black;" width="300" align="center">
            <p><strong>Importance</strong></p>
        </td>
        <td style="border: 1px solid black;" width="400">
            <p align="center">50%</p>
        </td>
    </tr>
    <tr style="border: 1px solid black;">
        <td style="border: 1px solid black;" width="300" align="center">
            <strong>Characteristic</strong>
        </td>
        <td style="border: 1px solid black;" width="400" align="justify">
            <p>The largest group and primarily job seekers</p>
        </td>
    </tr>
    <tr style="border: 1px solid black;">
        <td style="border: 1px solid black;" width="300" align="center">
            <p><strong>Type of intervention</strong></p>
        </td>
        <td style="border: 1px solid black;" width="400" align="justify">
            <p>Facilitation of access to resources and income-generating activities</p>
        </td>
    </tr>
</table>
`
        }, {
            id: 5,
            data: `<table class="text-center border-collapse border border-slate-500" style="width: 90vw; border-collapse: collapse; border: 1px solid black;">
    <tr style="border: 1px solid black;">
        <td style="border: 1px solid black;" width="300" align="center">
            <p><strong>Importance</strong></p>
        </td>
        <td style="border: 1px solid black;" width="400">
            <p align="center">28%</p>
        </td>
    </tr>
    <tr style="border: 1px solid black;">
        <td style="border: 1px solid black;" width="300" align="center">
            <strong>Characteristic</strong>
        </td>
        <td style="border: 1px solid black;" width="400" align="justify">
            <p>Category including workers with fixed and occasional income, artisans, and the needy</p>
        </td>
    </tr>
    <tr style="border: 1px solid black;">
        <td style="border: 1px solid black;" width="300" align="center">
            <p><strong>Type of intervention</strong></p>
        </td>
        <td style="border: 1px solid black;" width="400" align="justify">
            <p>Qualifying training and job creation</p>
        </td>
    </tr>
</table>`
        },
        {
            id: 6,
            data: `<table class="text-center border-collapse border border-slate-500" style="width: 90vw; border-collapse: collapse; border: 1px solid black;">
    <tr style="border: 1px solid black;">
        <td style="border: 1px solid black;" height="19" valign="top"><div align="center" ><strong>Target Group</strong></div></td>
        <td style="border: 1px solid black;" width="120"  valign="top"><div align="center" ><strong>Importance</strong></div></td>
        <td style="border: 1px solid black;" width="300" align="center" valign="top"  ><strong>Characteristic</strong> </td>
        <td style="border: 1px solid black;" width="315" valign="top"><div align="center" ><strong>Type of Intervention</strong></div></td>
    </tr>
    <tr style="border: 1px solid black;">
        <td style="border: 1px solid black;" width="120" height="79" valign="top"><p align="center" ><strong>Women working on their farms</strong></p></td>
        <td style="border: 1px solid black;" width="120" ><p align="center">20% </p></td>
        <td style="border: 1px solid black;" width="300" valign="top"><p align="justify">Women from stable agricultural operators </p></td>
        <td style="border: 1px solid black;" width="315" ><p align="justify">Income-generating activities and medium-term investments</p></td>
    </tr>
    <tr style="border: 1px solid black;">
        <td style="border: 1px solid black;" height="87" ><p align="center" class="Style1"><strong>Women without jobs / with non-farm jobs</strong></p></td>
        <td style="border: 1px solid black;" width="120" ><p align="center">20% </p></td>
        <td style="border: 1px solid black;" width="300" ><p align="justify">Women from precarious agricultural operators and landless individuals </p></td>
        <td style="border: 1px solid black;" width="315"><p align="justify">Non-technical training and job creation</p></td>
    </tr>
</table>
`
        }, {
            id: 7,
            data: `<table class="text-center border-collapse border border-slate-500" style="width: 90vw; border-collapse: collapse; border: 1px solid black;">
    <tr style="border: 1px solid black;">
        <td style="border: 1px solid black;" width="104"  valign="top"><div align="center" ><strong>Target Group</strong></div></td>
        <td style="border: 1px solid black;" width="300" align="center" valign="top" ><strong>Characteristic</strong> </td>
        <td style="border: 1px solid black;" width="300" valign="top"><div align="center" ><strong>Type of Intervention</strong></div></td>
    </tr>
    <tr style="border: 1px solid black;">
        <td style="border: 1px solid black;" width="104" valign="top"><p align="center"><strong>Sons of workers</strong></p></td>
        <td style="border: 1px solid black;" width="300" valign="top"><div align="justify">Possessing knowledge in agricultural practices, and are in a very precarious economic situation </div></td>
        <td style="border: 1px solid black;" width="300" valign="top"><p align="justify">Support for agricultural product transformation and value chains</p></td>
    </tr>
    <tr style="border: 1px solid black;">
        <td style="border: 1px solid black;" width="104" valign="top"><p align="center"><strong>Sons of operators</strong></p></td>
        <td style="border: 1px solid black;" width="300" valign="top"><div align="justify">Sons of large landowners </div></td>
        <td style="border: 1px solid black;" width="300" valign="top"><p align="justify">Support for business creation processes and entrepreneurial training (CEFE)</p></td>
    </tr>
    <tr style="border: 1px solid black;">
        <td style="border: 1px solid black;" width="104" valign="top"><p align="center" ><strong>Graduates</strong></p></td>
        <td style="border: 1px solid black;" width="300" valign="top"><div>Coming from agricultural areas but ambivalent towards agriculture, targeted by state mechanisms for promoting employment </div></td>
        <td style="border: 1px solid black;" width="300" valign="top"><p align="justify">Income-generating activities</p></td>
    </tr>
</table>
`
        }
    ]


    const data_fr = [
        {
            id: 1,
            data: `<table class="text-center border-collapse border border-slate-500" style="width: 90vw; border-collapse: collapse; border: 1px solid black;">
                <tr style="border: 1px solid black;" >
                    <td  style="border: 1px solid black;" width="35"><p align="center" class="legend"><strong>N°</strong></p></td>
                    <td style="border: 1px solid black;" width="201"><p align="center"><strong>Groupe Cible</strong></p></td>
                    <td style="border: 1px solid black;" width="95"><strong>Importance</strong></td>
                    <td style="border: 1px solid black;" width="355"><p><strong>Caractéristiques</strong></p></td>
                    <td style="border: 1px solid black;" width="245"><p><strong>Type d'intervention demandée</strong></p></td>
                </tr>
                <tr style="border: 1px solid black;">
                    <td width="231" colspan="5"><p><strong>Le Foncier</strong></p></td>
                </tr>
                <tr style="border: 1px solid black;">
                    <td style="border: 1px solid black;" width="30" align="center">01</td>
                    <td style="border: 1px solid black;" width="201">Grands Propriétaires Fonciers</td>
                    <td style="border: 1px solid black;"><p align="center">2%</p></td>
                    <td style="border: 1px solid black;" width="355">Agriculture marchande et moderne et intégration au systéme bancaire</td>
                    <td style="border: 1px solid black;" width="245">Aménagement communautaires et services agricoles</td>
                </tr>
                <tr style="border: 1px solid black;">
                    <td style="border: 1px solid black;"  width="30" align="center">02</td>
                    <td style="border: 1px solid black;"  width="201">Exploitants agricoles stables</td>
                    <td style="border: 1px solid black;" ><p align="center">20%</p></td>
                    <td style="border: 1px solid black;"  width="355">Dynamique, stable et réceptif aux interventions de l'ODESYPANO</td>
                    <td style="border: 1px solid black;"  width="245">Conseils agricole et activités génératrices de revenus</td>
                </tr>
                <tr style="border: 1px solid black;">
                    <td style="border: 1px solid black;"  width="30" align="center">03</td>
                    <td style="border: 1px solid black;"  width="201" >Exploitants agricoles en situation précaire</td>
                    <td style="border: 1px solid black;" ><p align="center">50%</p></td>
                    <td style="border: 1px solid black;"  width="355" >Le groupe le plus large et demandeur essentiellement d'emploi</td>
                    <td style="border: 1px solid black;"  width="245">Facilitation d'accés aux ressources et activités génératrices de revenus</td>
                </tr>
                <tr style="border: 1px solid black;">
                    <td style="border: 1px solid black;"  width="30" align="center">04</td>
                    <td style="border: 1px solid black;"  width="201">Les Eleveurs sans terre</td>
                    <td style="border: 1px solid black;" ><p align="center">28%</p></td>
                    <td style="border: 1px solid black;"  width="355" >Catégorie regroupant les ouvriers é revenu    fixe et occasionnel, les artisans et les nécessiteux</td>
                    <td style="border: 1px solid black;"  width="245">Formation qualifiante et création de l'emploi</td>
                </tr>
                <tr style="border: 1px solid black;">
                    <td style="border: 1px solid black;"  width="231" colspan="5"><p class="legend"><strong>Les Femmes rurales</strong></p></td>
                </tr>
                <tr style="border: 1px solid black;">
                    <td style="border: 1px solid black;"  width="30" align="center">01</td>
                    <td style="border: 1px solid black;"  width="201">Femmes travaillant dans leurs exploitations</td>
                    <td style="border: 1px solid black;" ><p align="center">20%</p></td>
                    <td style="border: 1px solid black;"  width="355">Femmes des exploitants agricoles stables</td>
                    <td style="border: 1px solid black;"  width="245">Activités génératrices de revenus et    investissements é moyen terme</td>
                </tr>
                <tr style="border: 1px solid black;">
                    <td style="border: 1px solid black;"  width="30" align="center">02</td>
                    <td style="border: 1px solid black;"  width="201">Femmes Sans emploi/avec emploi hors ferme</td>
                    <td style="border: 1px solid black;" ><p align="center">78%</p></td>
                    <td style="border: 1px solid black;"  width="355">Femmes des exploitants agricoles en situation précaire et des sans terre</td>
                    <td style="border: 1px solid black;"  width="245">Formation non technique et création de l'emploi</td>
                </tr>
                <tr style="border: 1px solid black;">

                    <td style="border: 1px solid black;"  width="201" colspan="5"><strong>Les jeunes</strong></td>
                </tr>
                <tr style="border: 1px solid black;">
                    <td style="border: 1px solid black;"  width="30" align="center">01</td>
                    <td style="border: 1px solid black;"  width="201">Fils d'ouvriers</td>
                    <td style="border: 1px solid black;" >&nbsp;</td>
                    <td style="border: 1px solid black;"  width="355">Possédant des connaissances en pratiques agricoles, eté sont dans une situation économique trés précaire</td>
                    <td style="border: 1px solid black;"  width="245">Appui é la transformation des produits agricoles et aux filiéres</td>
                </tr>
                <tr style="border: 1px solid black;">
                    <td style="border: 1px solid black;"  width="30" align="center">02</td>
                    <td style="border: 1px solid black;"  width="201">Fils d'exploitants</td>
                    <td style="border: 1px solid black;" >&nbsp;</td>
                    <td style="border: 1px solid black;"  width="355">Fils de grands propriétaires fonciers</td>
                    <td style="border: 1px solid black;"  width="245">Appui processus de création d'entreprise et formation enrepreniale (CEFE)</td>
                </tr>
                <tr style="border: 1px solid black;">
                    <td style="border: 1px solid black;"  width="30" align="center">03</td>
                    <td style="border: 1px solid black;"  width="201">Jeunes diplémés</td>
                    <td style="border: 1px solid black;">&nbsp;</td>
                    <td style="border: 1px solid black;"  width="355">Provenant des zones agricoles mais ambivalents envers léagriculture, ciblés par les mécanismes    étatiques de promotion de léemploi </td>
                    <td style="border: 1px solid black;"  width="245">Activités génératrices de revenus</td>
                </tr>
            </table>`
        },
        {
            id: 2,
            data: `<table class="text-center border-collapse border border-slate-500" style="width: 90vw; border-collapse: collapse; border: 1px solid black;">

<tr style="border: 1px solid black;">
  <td style="border: 1px solid black;" width="300" align="center" ><p><strong>Importance</strong></p></td>
  <td style="border: 1px solid black;" width="400" ><p align="center">20% </p></td>
  
</tr>
<tr style="border: 1px solid black;">
<td style="border: 1px solid black;" width="300" align="center" ><strong>Caractéristique</strong> </td>
<td style="border: 1px solid black;" width="400" ><p align="justify">Agriculture marchande et moderne et intégration au  systéme bancaire</p></td>
</tr>

<tr style="border: 1px solid black;" >
<td style="border: 1px solid black;" width="300" align="center"><p ><strong>Type d'intervention</strong></p></td>
<td style="border: 1px solid black;" width="400" align="justify"><p >Femmes des exploitants agricoles en situation précaire et des sans terre </p></td>
</tr>
</table>`
        },
        {
            id: 3,
            data: `<table class="text-center border-collapse border border-slate-500" style="width: 90vw; border-collapse: collapse; border: 1px solid black;">

<tr>
  <td style="border: 1px solid black;" width="300" align="center" ><p><strong>Importance</strong></p></td>
  <td style="border: 1px solid black;" width="400" ><p align="center">20% </p></td>
  
</tr>
<tr>
<td style="border: 1px solid black;" width="300" align="center" ><strong>Caractéristique</strong> </td>
<td style="border: 1px solid black;" width="400"  align="justify"><p>Dynamique, stable et réceptif aux interventions de l'ODESYPANO</p></td>
</tr>

<tr>
<td style="border: 1px solid black;" width="300" align="center" ><p ><strong>Type d'intervention</strong></p></td>
<td style="border: 1px solid black;" width="400" align="justify"><p >Conseils agricole et activités génératrices de revenus </p></td>
</tr>
</table>`
        },
        {
            id: 4,
            data: `<table class="text-center border-collapse border border-slate-500" style="width: 90vw; border-collapse: collapse; border: 1px solid black;">
    <!--DWLayoutTable-->

<TR style="border: 1px solid black;">
  <TD style="border: 1px solid black;" width="300" align="center" ><p><strong>Importance</strong></p></TD>
  <TD style="border: 1px solid black;" width="400" ><p align="center">50% </p></TD>
  
</TR>
<TR style="border: 1px solid black;">
<TD style="border: 1px solid black;" width="300" align="center"><strong>Caractéristique</strong> </TD>
<TD style="border: 1px solid black;" width="400"  align="justify"><p>Le groupe le plus large et demandeur essentiellement d'emploi</p></TD>
</TR>

<TR style="border: 1px solid black;">
<TD style="border: 1px solid black;" width="300" align="center"><p ><strong>Type d'intervention</strong></p></TD>
<TD style="border: 1px solid black;" width="400" align="justify"><p >Facilitation d'accés aux ressources et activités génératrices de revenus</p></TD>
</TR>
</TABLE>`
        },
        {
            id: 5,
            data: `<table class="text-center border-collapse border border-slate-500" style="width: 90vw; border-collapse: collapse; border: 1px solid black;">
    <!--DWLayoutTable-->

<TR style="border: 1px solid black;">
  <TD style="border: 1px solid black;" width="300" align="center" ><p><strong>Importance</strong></p></TD>
  <TD style="border: 1px solid black;" width="400" ><p align="center">28% </p></TD>
  
</TR>
<TR style="border: 1px solid black;">
<TD style="border: 1px solid black;" width="300" align="center"><strong>Caractéristique</strong> </TD>
<TD style="border: 1px solid black;" width="400"  align="justify"><p>Catégorie regroupant les ouvriers é revenu fixe et occasionnel, les artisans et les nécessiteux</p></TD>
</TR>

<TR>
<TD style="border: 1px solid black;" width="300" align="center"><p ><strong>Type d'intervention</strong></p></TD>
<TD style="border: 1px solid black;" width="400" align="justify"><p >Formation qualifiante et création de l'emploi </p></TD>
</TR>
</TABLE>`
        },
        {
            id: 6,
            data: `<table class="text-center border-collapse border border-slate-500" style="width: 90vw; border-collapse: collapse; border: 1px solid black;">
    <!--DWLayoutTable-->
<TR style="border: 1px solid black;">
  <TD style="border: 1px solid black;" height="19" valign="top"><div align="center" ><strong>Groupe Cible</strong></div></TD>
  <TD style="border: 1px solid black;" width="120"  valign="top"><div align="center" ><strong>Importance</strong></div></TD>
<TD style="border: 1px solid black;" width="300" align="center" valign="top"  ><strong>Caractéristique</strong> </TD>
  <TD style="border: 1px solid black;" width="315" valign="top"><div align="center" ><strong>Type d'intervention</strong></div></TD>
</TR>
<TR style="border: 1px solid black;">
<TD style="border: 1px solid black;" width="120" height="79"valign="top"><p align="center" ><strong>Femmes travaillant dans leurs exploitations</strong></p></TD>
  <TD style="border: 1px solid black;" width="120" ><p align="center">20% </p></TD>
  
<TD style="border: 1px solid black;" width="300" valign="top"><p align="justify">Femmes des exploitants agricoles stables </p></TD>
  <TD style="border: 1px solid black;" width="315" ><p align="justify">Activités génératrices de revenus et investissements à moyen terme</p></TD>
</TR>
<TR style="border: 1px solid black;">
  <TD style="border: 1px solid black;" height="87" ><p align="center" class="Style1"><strong>Femmes Sans emploi / avec emploi hors ferme</strong></p></TD>
<TD style="border: 1px solid black;" width="120" ><p align="center">20% </p></TD>
<TD style="border: 1px solid black;" width="300" ><p align="justify">Femmes des exploitants agricoles en situation précaire et des sans terre </p></TD>
  <TD style="border: 1px solid black;" width="315"><p align="justify">Formation non technique et création de l'emploi</p></TD>
</TR>
</TABLE>`
        },
        {
            id: 7,
            data: `<table class="text-center border-collapse border border-slate-500" style="width: 90vw; border-collapse: collapse; border: 1px solid black;">
    <!--DWLayoutTable-->
<TR style="border: 1px solid black;">
  <TD style="border: 1px solid black;" width="104"  valign="top"><div align="center" ><strong>Groupe Cible</strong></div></TD>
<TD style="border: 1px solid black;" width="300" align="center" valign="top" ><strong>Caractéristique</strong> </TD>
  <TD style="border: 1px solid black;" width="300" valign="top"><div align="center" ><strong>Type d'intervention</strong></div></TD>
</TR>
<TR style="border: 1px solid black;">
  <TD style="border: 1px solid black;" width="104"valign="top"><p align="center"><strong>Fils d'ouvriers</strong></p></TD>
<TD style="border: 1px solid black;" width="300" valign="top"><div align="justify">Possédant des connaissances en pratiques agricoles, et  sont dans une situation économique trés précaire </div></TD>
  <TD style="border: 1px solid black;" width="300" valign="top"><p align="justify">Appui é la transformation des produits agricoles et aux filiéres</p></TD>
</TR>
<TR style="border: 1px solid black;">
  <TD style="border: 1px solid black;" width="104"valign="top"><p align="center"><strong>Fils d'exploitants</strong></p></TD>
<TD style="border: 1px solid black;" width="300" valign="top"><div align="justify">Fils de grands propriétaires fonciers </div></TD>
  <TD style="border: 1px solid black;" width="300" valign="top"><p align="justify">Appui processus de création d'entreprise et formation entrepreniale (CEFE)</p></TD>
</TR>
<TR style="border: 1px solid black;">
  <TD style="border: 1px solid black;" width="104"valign="top"><p align="center" ><strong>Jeunes diplémés</strong></p></TD>
<TD style="border: 1px solid black;" width="300" valign="top"><div>Provenant des zones agricoles mais ambivalents envers léagriculture, ciblés par les mécanismes étatiques de promotion de léemploi </div></TD>
  <TD style="border: 1px solid black;" width="300" valign="top"><p align="justify">Activités génératrices de revenus</p></TD>
</TR>
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
                        Fermer
                    </Button>

                </div>
                <div dir={i18n.language == "ar" ? "rtl" : "ltr"} dangerouslySetInnerHTML={{ __html: modalContent }}></div>

            </div>}

            <div >

                <div className="block my-2 w-full max-w-[999px] p-6 bg-white border border-gray-200 rounded-lg shadow ">
                    <h5 className=" text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-700">
                        {t("groupe cible")}  </h5>
                    <p dir={dir} className=" text-justify">

                        <h6> {t("groupe cible1")} <button onClick={() => { handleClick(0) }} className="font-bold text-bg-danger py-1 px-2"> {t("groupe cible tableau")}</button></h6>

                    </p>
                    <p dir={dir} >
                        <button onClick={() => { handleClick(1) }} className="font-bold  py-1 px-2">   {t("groupe cible2")} </button>
                    </p>
                    <p dir={dir} >
                        <button onClick={() => { handleClick(2) }} className="font-bold  py-1 px-2">   {t("groupe cible3")} </button>
                    </p>

                    <p dir={dir} >
                        <button onClick={() => { handleClick(3) }} className="font-bold  py-1 px-2">   {t("groupe cible4")} </button>
                    </p>
                    <p dir={dir} >
                        <button onClick={() => { handleClick(4) }} className="font-bold  py-1 px-2">   {t("groupe cible5")} </button>
                    </p>
                    <p dir={dir} >
                        <button onClick={() => { handleClick(5) }} className="font-bold  py-1 px-2">   {t("groupe cible6")} </button>
                    </p>
                    <p dir={dir} >
                        <button onClick={() => { handleClick(6) }} className="font-bold  py-1 px-2">   {t("groupe cible7")} </button>
                    </p>
                    <div>
                    </div>



                </div>
            </div>
        </>

    )
}

export default GroupeCible;