import React, { useRef, useState } from 'react'
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { FiPrinter } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";

function DemandePepinieres() {

  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;



  const data_ar =
  {

    data: `<h1 className="mb-3 text-center">كيفية الحصول على شتلات الزياتين او الاشجار المثمرة</h1>
    <br>
<h4 className="mb-3"> شروط عامة</h4>
<ul>
<li><strong>1. </strong>
  وجود برنامج غراسة الزياتين او الاشجار المثمرة ضمن عقد برنامج العمل المنبثق عن مخطط
التنميةالتشاركي للعمادة المعنية</li>
<li><strong>2. </strong>  يكون المنتفع من متساكني مناطق تدخل الديوان و تابع لجنة  أو مجمع التنمية المعنية</li>

<li><strong>3. </strong> له مستغلة فلاحية توجد بها مساحة ارض صالحة لللغراسات </li>

<h4 className="mb-3"> شروط خاصة</h4>
<li><strong>1. </strong>
الاتصال بلجنة او مجمع التنمية للتسجيل بالقائمة الاولية للراغبين في الحصول على شتلات
 الزياتين او الاشجار المثمرة
(ماي- جوان)</li>
<li><strong>2. </strong>
 اثر ذلك تقع معاينة القطع المقترحة من طرف فنيي الديوان
 (أوت)</li>
 <li><strong>3. </strong>
تحديد قائمة المنتفعين الذين تتوفر فيهم الشروط
(أوت)</li>
<li><strong>4. </strong>
 الشروع في اعداد الحفر
 (سبتمبر - نوفمبر)</li>
 <li><strong>5. </strong>
معاينة الحفر من طرف فني الديوان و إعداد محضر في الغرض  
(ديسمبر)</li>
<li><strong>6. </strong>
 تحديد القائمة النهائية
 (ديسمبر)</li>
 <li><strong>7. </strong>
 امضاءالتزام معرف به يتعهد من خلاله المنتفع بالغراسة، الصيانة و تطبيق التوصيات الفنية
 (جانفي)</li>
 <li><strong>8. </strong>
  الحصول على الكميات المطلوبة للمنتفعين
  (جانفي - 15 فيفري)</li>
  <li><strong>9. </strong>
  معاينة عملية الغراسة
(جانفي - أفريل)</li>
</ul>
`

  }


  const data_eng =
  {

    data: ` <h1 className="mb-3 text-center">How to Obtain Olive or Fruit Tree Seedlings</h1>
    <br>
    <h4 className="mb-3">General Conditions</h4>
    <ul>
        <li><strong>1. </strong>Having an olive or fruit tree planting program included in contract program stemming from the development plan community.</li>
        <li><strong>2. </strong>The beneficiary must be a resident of the intervention areas of the Office and belong to an agricultural development committee or agricultural development group.</li>
        <li><strong>3. </strong>Possess an agricultural exploitation with land suitable for plantations.</li>
    </ul>

    <h4 className="mb-3">Specific Conditions</h4>
    <ul>
        <li><strong>1. </strong>Contact the committee or agricultural development group to register on the preliminary list of applicants for olive or fruit tree seedlings.(May-June)</li>
        <li><strong>2. </strong>After that, the proposed plots are inspected by the Office's technicians.(August)</li>
        <li><strong>3. </strong>Determine the list of beneficiaries meeting the conditions.(August)</li>
        <li><strong>4. </strong>Begin preparing the planting holes.(September-November)</li>
        <li><strong>5. </strong>Inspection of the planting holes by an Office technician and preparation of a report for this purpose.(December)</li>
        <li><strong>6. </strong>Determine the final list of beneficiaries.(December)</li>
        <li><strong>7. </strong>Sign a notarized commitment whereby the beneficiary undertakes to plant, maintain, and follow the technical recommendations.(January)</li>
        <li><strong>8. </strong>Receive the required quantities and collect the seedlings.(January-15 Febrary)</li>
        <li><strong>9. </strong>Inspection of the installation of the plots by the technicians.(January-April)</li>
    </ul>
`
  }

  const data_fr = {
    data: ` <h1 className="mb-3 text-center">Comment obtenir des plants d'oliviers ou d'arbres fruitiers</h1>
    <br>
    <h4 className="mb-3">Conditions générales</h4>
    <ul>
        <li><strong>1. </strong>Avoir un programme de plantation d'oliviers ou d'arbres fruitiers inclus dans le contrat de programme découlant du plan de développement communautaire.</li>
        <li><strong>2. </strong>Le bénéficiaire doit être résident dans les zones d'intervention de l'Office et appartient à un comité ou une coopérative de développement agricole.</li>
        <li><strong>3. </strong>Posséder une exploitation agricole avec des terres appropriées pour les plantations.</li>
    </ul>

    <h4 className="mb-3">Conditions spécifiques</h4>
    <ul>
        <li><strong>1. </strong>Contacter le comité ou le groupement de développement agricole pour s'inscrire dans la liste préliminaire des demandeurs de plants d'oliviers ou d'arbres fruitiers.(mai-juin)</li>
        <li><strong>2. </strong>Ensuite, les parcelles proposées sont constatées par les techniciens de l'Office.(Août)</li>
        <li><strong>3. </strong>Déterminer la liste des bénéficiaires remplissant les conditions requises.(Août)</li>
        <li><strong>4. </strong>Commencer la préparation des trous de plantation.(Septembre-Novembre)</li>
        <li><strong>5. </strong>Constatation des trous de plantation par un technicien de l'Office et rédaction d'un procès-verbal à cet effet.(Décembre)</li>
        <li><strong>6. </strong>Déterminer la liste finale des bénéficiaires.(Décembre)</li>
        <li<strong>7. </strong>>Signer un engagement notarié par lequel le bénéficiaire s'engage à planter, entretenir et suivre les recommandations techniques.(Janvier)</li>
        <li><strong>8. </strong>Recevoir les quantités requises et collecter les plants.(Janvier-15Février)</li>
        <li><strong>9. </strong>Constatation de la plantation des plants par les techniciens de l'ODESYPANO.(Janvier-Avril)</li>
    </ul>

   `
  }


  const data = [
    { "gouvernorat": "Beja", "delegation": "Amdoun", "localite": "Beni Malek" },
    { "gouvernorat": "Beja", "delegation": "Amdoun", "localite": "El Fraijia" },
    { "gouvernorat": "Beja", "delegation": "Amdoun", "localite": "El Hamra" },
    { "gouvernorat": "Beja", "delegation": "Amdoun", "localite": "El Jouza" },
    { "gouvernorat": "Beja", "delegation": "Amdoun", "localite": "El Mejaless" },
    { "gouvernorat": "Beja", "delegation": "Amdoun", "localite": "Ghozia" },
    { "gouvernorat": "Beja", "delegation": "Amdoun", "localite": "Zahret Medien Sud" },
    { "gouvernorat": "Beja", "delegation": "Beja Sud", "localite": "Mekhachbia" },
    { "gouvernorat": "Beja", "delegation": "Beja Sud", "localite": "Mestouta" },
    { "gouvernorat": "Beja", "delegation": "Beja Sud", "localite": "Sidi Smail" },
    { "gouvernorat": "Beja", "delegation": "Goubellat", "localite": "Bir El Euch" },
    { "gouvernorat": "Beja", "delegation": "Goubellat", "localite": "Cheikh El Ouediane" },
    { "gouvernorat": "Beja", "delegation": "Goubellat", "localite": "El Gammarti" },
    { "gouvernorat": "Beja", "delegation": "Goubellat", "localite": "Guerram" },
    { "gouvernorat": "Beja", "delegation": "Goubellat", "localite": "Khacheb" },
    { "gouvernorat": "Beja", "delegation": "Goubellat", "localite": "Kheniguet Ed-Dahane" },
    { "gouvernorat": "Beja", "delegation": "Medjez_El_Bab", "localite": "Chaouach" },
    { "gouvernorat": "Beja", "delegation": "Medjez_El_Bab", "localite": "Hidouss" },
    { "gouvernorat": "Beja", "delegation": "Medjez_El_Bab", "localite": "Toukaber" },
    { "gouvernorat": "Beja", "delegation": "Nefza", "localite": "Bou-Zenna" },
    { "gouvernorat": "Beja", "delegation": "Nefza", "localite": "Dehiret" },
    { "gouvernorat": "Beja", "delegation": "Nefza", "localite": "Djamila" },
    { "gouvernorat": "Beja", "delegation": "Nefza", "localite": "Fatnassa" },
    { "gouvernorat": "Beja", "delegation": "Nefza", "localite": "Ghayadha" },
    { "gouvernorat": "Beja", "delegation": "Nefza", "localite": "Nefza Est" },
    { "gouvernorat": "Beja", "delegation": "Nefza", "localite": "Oued El Maaden" },
    { "gouvernorat": "Beja", "delegation": "Nefza", "localite": "Tebaba" },
    { "gouvernorat": "Beja", "delegation": "Nefza", "localite": "Zaga" },
    { "gouvernorat": "Beja", "delegation": "Teboursouk", "localite": "Ain El Hammam" },
    { "gouvernorat": "Beja", "delegation": "Teboursouk", "localite": "Ain El Melliti" },
    { "gouvernorat": "Beja", "delegation": "Teboursouk", "localite": "Bir Ettouta" },
    { "gouvernorat": "Beja", "delegation": "Teboursouk", "localite": "Rihana" },
    { "gouvernorat": "Beja", "delegation": "Testour", "localite": "Mzougha" },
    { "gouvernorat": "Beja", "delegation": "Testour", "localite": "Zeldou" },
    { "gouvernorat": "Beja", "delegation": "Tibar", "localite": "Ain Ed-Defali" },
    { "gouvernorat": "Beja", "delegation": "Tibar", "localite": "Djebba" },
    { "gouvernorat": "Bizerte", "delegation": "Ghezala", "localite": "El Arab" },
    { "gouvernorat": "Bizerte", "delegation": "Ghezala", "localite": "Ouled El May" },
    { "gouvernorat": "Bizerte", "delegation": "Joumine", "localite": "Bazina" },
    { "gouvernorat": "Bizerte", "delegation": "Joumine", "localite": "Chnena" },
    { "gouvernorat": "Bizerte", "delegation": "Joumine", "localite": "Ouled Ghanem" },
    { "gouvernorat": "Bizerte", "delegation": "Joumine", "localite": "Rouaha" },
    { "gouvernorat": "Bizerte", "delegation": "Joumine", "localite": "Touajnia" },
    { "gouvernorat": "Bizerte", "delegation": "Sejnane", "localite": "El Ababsa" },
    { "gouvernorat": "Bizerte", "delegation": "Sejnane", "localite": "El Hchachna" },
    { "gouvernorat": "Bizerte", "delegation": "Sejnane", "localite": "El Maalia" },
    { "gouvernorat": "Bizerte", "delegation": "Sejnane", "localite": "Mcherga" },
    { "gouvernorat": "Bizerte", "delegation": "Sejnane", "localite": "Mouaden" },
    { "gouvernorat": "Bizerte", "delegation": "Sejnane", "localite": "Sehabna" },
    { "gouvernorat": "Bizerte", "delegation": "Sejnane", "localite": "Sejnane" },
    { "gouvernorat": "Bizerte", "delegation": "Sejnane", "localite": "Sidi Mechreg" },
    { "gouvernorat": "Jendouba", "delegation": "Ain Draham", "localite": "Ain Sallem" },
    { "gouvernorat": "Jendouba", "delegation": "Ain Draham", "localite": "El Homrane" },
    { "gouvernorat": "Jendouba", "delegation": "Ain Draham", "localite": "Errouii" },
    { "gouvernorat": "Jendouba", "delegation": "Ain Draham", "localite": "Khmeyria" },
    { "gouvernorat": "Jendouba", "delegation": "Ain Draham", "localite": "Oued Ezzan" },
    { "gouvernorat": "Jendouba", "delegation": "Ain Draham", "localite": "Selloul" },
    { "gouvernorat": "Jendouba", "delegation": "Ain Draham", "localite": "Tegma" },
    { "gouvernorat": "Jendouba", "delegation": "Fernana", "localite": "El Adher" },
    { "gouvernorat": "Jendouba", "delegation": "Fernana", "localite": "Gloub Ethirane" },
    { "gouvernorat": "Jendouba", "delegation": "Fernana", "localite": "Gloub Ethirane Nord" },
    { "gouvernorat": "Jendouba", "delegation": "Fernana", "localite": "Hedhil" },
    { "gouvernorat": "Jendouba", "delegation": "Fernana", "localite": "Hlima" },
    { "gouvernorat": "Jendouba", "delegation": "Fernana", "localite": "Jouaouda" },
    { "gouvernorat": "Jendouba", "delegation": "Fernana", "localite": "Oued Ghrib" },
    { "gouvernorat": "Jendouba", "delegation": "Fernana", "localite": "Ouled Mefada" },
    { "gouvernorat": "Jendouba", "delegation": "Fernana", "localite": "Rbiaa" },
    { "gouvernorat": "Jendouba", "delegation": "Fernana", "localite": "Sidi Ammar" },
    { "gouvernorat": "Jendouba", "delegation": "Ghardimaou", "localite": "Ain Soltane" },
    { "gouvernorat": "Jendouba", "delegation": "Ghardimaou", "localite": "El Maaden" },
    { "gouvernorat": "Jendouba", "delegation": "Ghardimaou", "localite": "Es Sraya" },
    { "gouvernorat": "Jendouba", "delegation": "Ghardimaou", "localite": "Faj Hassine" },
    { "gouvernorat": "Jendouba", "delegation": "Ghardimaou", "localite": "Forksen" },
    { "gouvernorat": "Jendouba", "delegation": "Ghardimaou", "localite": "Ouechtata" },
    { "gouvernorat": "Jendouba", "delegation": "Tabarka", "localite": "Ain Esnoussi" },
    { "gouvernorat": "Jendouba", "delegation": "Tabarka", "localite": "El Hammem" },
    { "gouvernorat": "Jendouba", "delegation": "Tabarka", "localite": "Nadhour" },
    { "gouvernorat": "Kef", "delegation": "Kef_Est", "localite": "Dyr El Kef" },
    { "gouvernorat": "Kef", "delegation": "Kef_Est", "localite": "Oued Souani" },
    { "gouvernorat": "Kef", "delegation": "Kef_Est", "localite": "Oued Souani Sud" },
    { "gouvernorat": "Kef", "delegation": "Kef_Est", "localite": "Zaafrane" },
    { "gouvernorat": "Kef", "delegation": "Kef_Ouest", "localite": "Oued Remel Nord" },
    { "gouvernorat": "Kef", "delegation": "Kef_Ouest", "localite": "Oued Remel Sud" },
    { "gouvernorat": "Kef", "delegation": "Nebeur", "localite": "Bahra" },
    { "gouvernorat": "Kef", "delegation": "Nebeur", "localite": "Chetatla" },
    { "gouvernorat": "Kef", "delegation": "Nebeur", "localite": "Sidi Medien" },
    { "gouvernorat": "Kef", "delegation": "Nebeur", "localite": "Tel El Ghozlane" },
    { "gouvernorat": "Kef", "delegation": "Sakiet_Sidi_Youssef", "localite": "Ain El Karma" },
    { "gouvernorat": "Kef", "delegation": "Sakiet_Sidi_Youssef", "localite": "Ferchan" },
    { "gouvernorat": "Kef", "delegation": "Sakiet_Sidi_Youssef", "localite": "Jradou" },
    { "gouvernorat": "Kef", "delegation": "Sakiet_Sidi_Youssef", "localite": "Sidi Rabeh" },
    { "gouvernorat": "Kef", "delegation": "Sers", "localite": "Bousliaa" },
    { "gouvernorat": "Kef", "delegation": "Sers", "localite": "Es-Sers Nord" },
    { "gouvernorat": "Kef", "delegation": "Sers", "localite": "Lorbeus" },
    { "gouvernorat": "Kef", "delegation": "Touiref", "localite": "Ledhieb" },
    { "gouvernorat": "Kef", "delegation": "Touiref", "localite": "Mellala" },
    { "gouvernorat": "Kef", "delegation": "Touiref", "localite": "Oueljet Essedra" },
    { "gouvernorat": "Kef", "delegation": "Touiref", "localite": "Touiref" },
    { "gouvernorat": "Siliana", "delegation": "Bourouis", "localite": "Ain Achour" },
    { "gouvernorat": "Siliana", "delegation": "Bourouis", "localite": "El Abbassi" },
    { "gouvernorat": "Siliana", "delegation": "Bourouis", "localite": "Ettricha" },
    { "gouvernorat": "Siliana", "delegation": "El_Krib", "localite": "Borj Messaoudi Est" },
    { "gouvernorat": "Siliana", "delegation": "El_Krib", "localite": "Borj Messaoudi Ouest" },
    { "gouvernorat": "Siliana", "delegation": "El_Krib", "localite": "Doukhania" },
    { "gouvernorat": "Siliana", "delegation": "El_Krib", "localite": "El Krib Nord" },
    { "gouvernorat": "Siliana", "delegation": "El_Krib", "localite": "El Krib Sud" },
    { "gouvernorat": "Siliana", "delegation": "El_Krib", "localite": "Hammam Biadha Nord" },
    { "gouvernorat": "Siliana", "delegation": "El_Krib", "localite": "Hammam Biadha Sud" },
    { "gouvernorat": "Siliana", "delegation": "Siliana_Nord", "localite": "Ain Eddissa" },
    { "gouvernorat": "Siliana", "delegation": "Siliana_Nord", "localite": "El Joua" },
    { "gouvernorat": "Siliana", "delegation": "Siliana_Nord", "localite": "El Khalsa" },
    { "gouvernorat": "Siliana", "delegation": "Siliana_Nord", "localite": "Jemma" },
    { "gouvernorat": "Siliana", "delegation": "Siliana_Nord", "localite": "Massouj" }
  ]


  const data_cities_ar = [
    { "gouvernorat": "باجة", "delegation": "عمدون", "localite": "بني مالك" },
    { "gouvernorat": "باجة", "delegation": "عمدون", "localite": "الفرايجة" },
    { "gouvernorat": "باجة", "delegation": "عمدون", "localite": "الحمراء" },
    { "gouvernorat": "باجة", "delegation": "عمدون", "localite": "الجوزة" },
    { "gouvernorat": "باجة", "delegation": "عمدون", "localite": "المجلس" },
    { "gouvernorat": "باجة", "delegation": "عمدون", "localite": "غزية" },
    { "gouvernorat": "باجة", "delegation": "عمدون", "localite": "زهرة مدين الجنوبية" },
    { "gouvernorat": "باجة", "delegation": "باجة الجنوبية", "localite": "مخشبية" },
    { "gouvernorat": "باجة", "delegation": "باجة الجنوبية", "localite": "مستوتة" },
    { "gouvernorat": "باجة", "delegation": "باجة الجنوبية", "localite": "سيدي اسماعيل" },
    { "gouvernorat": "باجة", "delegation": "قبلاط", "localite": "بير العوش" },
    { "gouvernorat": "باجة", "delegation": "قبلاط", "localite": "شيخ الوديان" },
    { "gouvernorat": "باجة", "delegation": "قبلاط", "localite": "القامرتي" },
    { "gouvernorat": "باجة", "delegation": "قبلاط", "localite": "غرام" },
    { "gouvernorat": "باجة", "delegation": "قبلاط", "localite": "خاشب" },
    { "gouvernorat": "باجة", "delegation": "قبلاط", "localite": "خنيقة الدهان" },
    { "gouvernorat": "باجة", "delegation": "مجاز الباب", "localite": "شاوش" },
    { "gouvernorat": "باجة", "delegation": "مجاز الباب", "localite": "هيدوس" },
    { "gouvernorat": "باجة", "delegation": "مجاز الباب", "localite": "توكابر" },
    { "gouvernorat": "باجة", "delegation": "نفزة", "localite": "بوزنة" },
    { "gouvernorat": "باجة", "delegation": "نفزة", "localite": "دهيرت" },
    { "gouvernorat": "باجة", "delegation": "نفزة", "localite": "جميلة" },
    { "gouvernorat": "باجة", "delegation": "نفزة", "localite": "فطناسة" },
    { "gouvernorat": "باجة", "delegation": "نفزة", "localite": "غياضة" },
    { "gouvernorat": "باجة", "delegation": "نفزة", "localite": "نفزة الشرقية" },
    { "gouvernorat": "باجة", "delegation": "نفزة", "localite": "واد المادن" },
    { "gouvernorat": "باجة", "delegation": "نفزة", "localite": "تيبابة" },
    { "gouvernorat": "باجة", "delegation": "نفزة", "localite": "زقة" },
    { "gouvernorat": "باجة", "delegation": "تبرسق", "localite": "عين الحمام" },
    { "gouvernorat": "باجة", "delegation": "تبرسق", "localite": "عين المليتي" },
    { "gouvernorat": "باجة", "delegation": "تبرسق", "localite": "بير التوتة" },
    { "gouvernorat": "باجة", "delegation": "تبرسق", "localite": "ريحانة" },
    { "gouvernorat": "باجة", "delegation": "تستور", "localite": "مزوغة" },
    { "gouvernorat": "باجة", "delegation": "تستور", "localite": "زلدو" },
    { "gouvernorat": "باجة", "delegation": "تيبار", "localite": "عين الدفالي" },
    { "gouvernorat": "باجة", "delegation": "تيبار", "localite": "دجبة" },
    { "gouvernorat": "بنزرت", "delegation": "غزالة", "localite": "العرب" },
    { "gouvernorat": "بنزرت", "delegation": "غزالة", "localite": "واد الماي" },
    { "gouvernorat": "بنزرت", "delegation": "جومين", "localite": "بازينة" },
    { "gouvernorat": "بنزرت", "delegation": "جومين", "localite": "شننة" },
    { "gouvernorat": "بنزرت", "delegation": "جومين", "localite": "واد الغنم" },
    { "gouvernorat": "بنزرت", "delegation": "جومين", "localite": "روابة" },
    { "gouvernorat": "بنزرت", "delegation": "جومين", "localite": "تواجنة" },
    { "gouvernorat": "بنزرت", "delegation": "سجنان", "localite": "العبابسة" },
    { "gouvernorat": "بنزرت", "delegation": "سجنان", "localite": "الحشاشنة" },
    { "gouvernorat": "بنزرت", "delegation": "سجنان", "localite": "المعلية" },
    { "gouvernorat": "بنزرت", "delegation": "سجنان", "localite": "مشارقة" },
    { "gouvernorat": "بنزرت", "delegation": "سجنان", "localite": "موادن" },
    { "gouvernorat": "بنزرت", "delegation": "سجنان", "localite": "سحابنة" },
    { "gouvernorat": "بنزرت", "delegation": "سجنان", "localite": "سجنان" },
    { "gouvernorat": "بنزرت", "delegation": "سجنان", "localite": "سيدي مشارق" },
    { "gouvernorat": "جندوبة", "delegation": "عين دراهم", "localite": "عين سلام" },
    { "gouvernorat": "جندوبة", "delegation": "عين دراهم", "localite": "الحمران" },
    { "gouvernorat": "جندوبة", "delegation": "عين دراهم", "localite": "الروي" },
    { "gouvernorat": "جندوبة", "delegation": "عين دراهم", "localite": "خمايرية" },
    { "gouvernorat": "جندوبة", "delegation": "عين دراهم", "localite": "واد الزان" },
    { "gouvernorat": "جندوبة", "delegation": "عين دراهم", "localite": "سلول" },
    { "gouvernorat": "جندوبة", "delegation": "عين دراهم", "localite": "تقمة" },
    { "gouvernorat": "جندوبة", "delegation": "فرنانة", "localite": "العاذر" },
    { "gouvernorat": "جندوبة", "delegation": "فرنانة", "localite": "قلوب الثيران" },
    { "gouvernorat": "جندوبة", "delegation": "فرنانة", "localite": "قلوب الثيران الشمالية" },
    { "gouvernorat": "جندوبة", "delegation": "فرنانة", "localite": "هذيل" },
    { "gouvernorat": "جندوبة", "delegation": "فرنانة", "localite": "حليمة" },
    { "gouvernorat": "جندوبة", "delegation": "فرنانة", "localite": "جوادة" },
    { "gouvernorat": "جندوبة", "delegation": "فرنانة", "localite": "واد غريب" },
    { "gouvernorat": "جندوبة", "delegation": "فرنانة", "localite": "اولاد مفادة" },
    { "gouvernorat": "جندوبة", "delegation": "فرنانة", "localite": "ربية" },
    { "gouvernorat": "جندوبة", "delegation": "فرنانة", "localite": "سيدي عمار" },
    { "gouvernorat": "جندوبة", "delegation": "غار الدماء", "localite": "عين سلطان" },
    { "gouvernorat": "جندوبة", "delegation": "غار الدماء", "localite": "المعادن" },
    { "gouvernorat": "جندوبة", "delegation": "غار الدماء", "localite": "السرايا" },
    { "gouvernorat": "جندوبة", "delegation": "غار الدماء", "localite": "فج حسين" },
    { "gouvernorat": "جندوبة", "delegation": "غار الدماء", "localite": "فركسان" },
    { "gouvernorat": "جندوبة", "delegation": "غار الدماء", "localite": "وشتاتة" },
    { "gouvernorat": "جندوبة", "delegation": "طبرقة", "localite": "عين السنوسي" },
    { "gouvernorat": "جندوبة", "delegation": "طبرقة", "localite": "الحمام" },
    { "gouvernorat": "جندوبة", "delegation": "طبرقة", "localite": "ناظور" },
    { "gouvernorat": "الكاف", "delegation": "الكاف", "localite": "ديرالكاف" },
    { "gouvernorat": "الكاف", "delegation": "الكاف", "localite": "واد سواني" },
    { "gouvernorat": "الكاف", "delegation": "الكاف", "localite": "واد سواني الجنوبية" },
    { "gouvernorat": "الكاف", "delegation": "الكاف", "localite": "زعفران" },
    { "gouvernorat": "الكاف", "delegation": "الكاف", "localite": "واد رمال الشمالية" },
    { "gouvernorat": "الكاف", "delegation": "الكاف", "localite": "واد رمال الجنوبية" },
    { "gouvernorat": "الكاف", "delegation": "نبر", "localite": "بهرة" },
    { "gouvernorat": "الكاف", "delegation": "نبر", "localite": "شتاتلة" },
    { "gouvernorat": "الكاف", "delegation": "نبر", "localite": "سيدي مدين" },
    { "gouvernorat": "الكاف", "delegation": "نبر", "localite": "تل الغزلان" },
    { "gouvernorat": "الكاف", "delegation": "ساقية سيدي يوسف", "localite": "عين الكرمة" },
    { "gouvernorat": "الكاف", "delegation": "ساقية سيدي يوسف", "localite": "فرشان" },
    { "gouvernorat": "الكاف", "delegation": "ساقية سيدي يوسف", "localite": "جرادو" },
    { "gouvernorat": "الكاف", "delegation": "ساقية سيدي يوسف", "localite": "سيدي رابح" },
    { "gouvernorat": "الكاف", "delegation": "السرس", "localite": "بوصلية" },
    { "gouvernorat": "الكاف", "delegation": "السرس", "localite": "السرس الشمالية" },
    { "gouvernorat": "الكاف", "delegation": "السرس", "localite": "لربص" },
    { "gouvernorat": "الكاف", "delegation": "طويرف", "localite": "لذياب" },
    { "gouvernorat": "الكاف", "delegation": "طويرف", "localite": "ملالة" },
    { "gouvernorat": "الكاف", "delegation": "طويرف", "localite": "ولجة السدرة" },
    { "gouvernorat": "الكاف", "delegation": "طويرف", "localite": "طويرف" },
    { "gouvernorat": "سليانة", "delegation": "بورويس", "localite": "عين عاشور" },
    { "gouvernorat": "سليانة", "delegation": "بورويس", "localite": "العباسي" },
    { "gouvernorat": "سليانة", "delegation": "بورويس", "localite": "التريشة" },
    { "gouvernorat": "سليانة", "delegation": "الكريب", "localite": "برج مسعودي الشرقية" },
    { "gouvernorat": "سليانة", "delegation": "الكريب", "localite": "برج مسعودي الغربية" },
    { "gouvernorat": "سليانة", "delegation": "الكريب", "localite": "دخانية" },
    { "gouvernorat": "سليانة", "delegation": "الكريب", "localite": "الكريب الشمالية" },
    { "gouvernorat": "سليانة", "delegation": "الكريب", "localite": "الكريب الجنوبية" },
    { "gouvernorat": "سليانة", "delegation": "الكريب", "localite": "حمام بياضة الشمالية" },
    { "gouvernorat": "سليانة", "delegation": "الكريب", "localite": "حمام بياضة الجنوبية" },
    { "gouvernorat": "سليانة", "delegation": "سليانة_الشمالية", "localite": "عين الديسة" },
    { "gouvernorat": "سليانة", "delegation": "سليانة_الشمالية", "localite": "الجوة" },
    { "gouvernorat": "سليانة", "delegation": "سليانة_الشمالية", "localite": "الخلصة" },
    { "gouvernorat": "سليانة", "delegation": "سليانة_الشمالية", "localite": "جمة" },
    { "gouvernorat": "سليانة", "delegation": "سليانة_الشمالية", "localite": "مسوج" }
  ]




  const [selectedGouvernorat, setSelectedGouvernorat] = useState('');
  const [selectedDelegation, setSelectedDelegation] = useState('');
  const [selectedLocalite, setSelectedLocalite] = useState('');
  const [selectedImplantsType, setSelectedImplantsType] = useState('');
  const [otherImplantType, setOtherImplantType] = useState("")
  const [oliveType, setOliveType] = useState("")
  const [personFullName, setPersonFullName] = useState("")
  const [cin, setCin] = useState(0)
  const [telephone, setTelephone] = useState(0)
  const [plantsNb, setPlantsNb] = useState(0)
  const [superficie, setSuperficie] = useState(0)
  const [show, setShow] = useState(false);
  const [modalContent, setModalContent] = useState(null)
  const [validationErrors, setValidationErrors] = useState({});



  const handleClick = () => {
    console.log(currentLanguage)
    if (currentLanguage == 'en') {
      setModalContent(data_fr.data)
    } else if (currentLanguage == 'fr') {
      setModalContent(data_eng.data)

    } else if (currentLanguage == 'ar') {
      setModalContent(data_ar.data)

    }
    setShow(true)

  }


  function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  const demandeCode = generateRandomString(8)


  const gouvernorats = [...new Set(data.map(item => item.gouvernorat))];
  const gouvernorats_ar = [...new Set(data_cities_ar.map(item => item.gouvernorat))];

  const delegations = selectedGouvernorat
    ? [...new Set(data.filter(item => item.gouvernorat === selectedGouvernorat).map(item => item.delegation))]
    : [];
  const delegations_ar = selectedGouvernorat
    ? [...new Set(data_cities_ar.filter(item => item.gouvernorat === selectedGouvernorat).map(item => item.delegation))]
    : [];
  const localites = selectedDelegation
    ? data.filter(item => item.delegation === selectedDelegation).map(item => item.localite)
    : [];
  const localites_ar = selectedDelegation
    ? data_cities_ar.filter(item => item.delegation === selectedDelegation).map(item => item.localite)
    : [];
  const currentDate = new Date();


  const conditionRef = useRef();
  const demandeRef = useRef();

  const handlePrintConditions = () => {
    const printContent = conditionRef.current;
    const printWindow = window.open('', '', 'width=900,height=900');
    const direction = currentLanguage === 'ar' ? 'rtl' : 'ltr';

    printWindow.document.write('<html><head><title>' + document.title + '</title>');
    printWindow.document.write('</head><body dir="' + direction + '">');
    printWindow.document.write(printContent.innerHTML);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
  };


  const handlePrintDemande = () => {
    setValidationErrors({})
    const printContent = `
    <div dir="${currentLanguage === 'ar' ? 'rtl' : 'ltr'}" style="padding: 16px; border: 1px solid #ccc;">
    <div className="d-flex justify-content-center">
    <img id="printImage" src="./img/entete_demandes.png" alt="Entete Demandes" width="100%" /> 
    <div>
      <h1 style="text-align: center;">${t('demande pepiniers')}</h1>
      <div style="display: flex; flex-direction: row; align-items: center;">
        <div style="margin-bottom: 8px; font-size: 1.125rem; font-weight: 500; color: #4a4a4a;">
          - ${t("registrationCode")}: <span style="color: #16a34a; text-decoration: underline;">${demandeCode}</span>
        </div>
        <div style="margin-bottom: 8px; font-size: 1.125rem; font-weight: 500; color: #4a4a4a; margin-left: 20px;">
          - ${t("registrationDate")}: ${currentDate.toLocaleString('fr-FR')}
        </div>
      </div>

      <div style="display: flex; flex-direction: column;">
        <div style="margin-bottom: 8px; font-size: 1.125rem; font-weight: 500; color: #4a4a4a;">
          ${t('Gouvernorat')}: ${selectedGouvernorat}
        </div>
      </div>

      ${selectedGouvernorat ? `
        <div style="display: flex; flex-direction: column;">
          <div style="margin-bottom: 8px; font-size: 1.125rem; font-weight: 500; color: #4a4a4a;">
            ${t('Delegation')}: ${selectedDelegation}
          </div>
        </div>
      ` : ''}

      ${selectedDelegation ? `
        <div style="display: flex; flex-direction: column;">
          <div style="margin-bottom: 8px; font-size: 1.125rem; font-weight: 500; color: #4a4a4a;">
            ${t('Localité')}: ${selectedLocalite}
          </div>
        </div>
      ` : ''}

      <div style="display: flex; flex-direction: column;">
        <div style="margin-bottom: 8px; font-size: 1.125rem; font-weight: 500; color: #4a4a4a;">
          ${t('Type des implants')}: ${selectedImplantsType}
        </div>
      </div>

      ${selectedImplantsType === "olivier" ? `
        <div style="display: flex; flex-direction: column;">
          <div style="margin-bottom: 8px; font-size: 1.125rem; font-weight: 500; color: #4a4a4a;">
            ${t('Type')}: ${oliveType}
          </div>
        </div>
      ` : ''}

       ${selectedImplantsType === "amandiers" ? `
        <div style="display: flex; flex-direction: column;">
          <div style="margin-bottom: 8px; font-size: 1.125rem; font-weight: 500; color: #4a4a4a;">
            ${t('Type')}: ${otherImplantType}
          </div>
        </div>
      ` : ''}

       ${selectedImplantsType === "arbres fruitiers" ? `
        <div style="display: flex; flex-direction: column;">
          <div style="margin-bottom: 8px; font-size: 1.125rem; font-weight: 500; color: #4a4a4a;">
            ${t('Type')}: ${otherImplantType}
          </div>
        </div>
      ` : ''}

      <div style="display: flex; flex-direction: column;">
        <div style="margin-bottom: 8px; font-size: 1.125rem; font-weight: 500; color: #4a4a4a;">
          ${t('Le nom du bénéficiaire (le nom complet)')}: ${personFullName}
        </div>
      </div>

      <div style="display: flex; flex-direction: column;">
        <div style="margin-bottom: 8px; font-size: 1.125rem; font-weight: 500; color: #4a4a4a;">
          ${t('N° C.I.N')}: ${cin}
        </div>
      </div>

      <div style="display: flex; flex-direction: column;">
        <div style="margin-bottom: 8px; font-size: 1.125rem; font-weight: 500; color: #4a4a4a;">
          ${t('N° Télephone')}: ${telephone}
        </div>
      </div>

      <div style="display: flex; flex-direction: column;">
        <div style="margin-bottom: 8px; font-size: 1.125rem; font-weight: 500; color: #4a4a4a;">
          ${t('Nombre des plants')}: ${plantsNb}
        </div>
      </div>

      <div style="display: flex; flex-direction: column;">
        <div style="margin-bottom: 8px; font-size: 1.125rem; font-weight: 500; color: #4a4a4a;">
          ${t('Superficie')}: ${superficie}
        </div>
      </div>

      <div style="display: flex; flex-direction: row; justify-content: space-between; margin-top: 16px;">
        <div style="display: flex; flex-direction: column; align-items: center;">
          <div style="text-align: center; margin-bottom: 8px; font-size: 1.125rem; font-weight: 500; color: #4a4a4a;">
            ${t('signature utilisateur')}
          </div>
          <div style="width: 200px; height: 50px; border: 1px solid #ccc;"></div>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center;">
          <div style="text-align: center; margin-bottom: 8px; font-size: 1.125rem; font-weight: 500; color: #4a4a4a;">
            ${t('signature groupe developpement')}
          </div>
          <div style="width: 200px; height: 50px; border: 1px solid #ccc;"></div>
        </div>
      </div>
    </div>
  `;


    let isValid = true;
    const errors = {};

    const validateField = (fieldValue, fieldName) => {
      if ((fieldValue === '' || (fieldValue === 0))) {
        setValidationErrors(prevErrors => ({ ...prevErrors, [fieldName]: true }));
        console.log(validationErrors);
        isValid = false;
        return true;
      }
      return false;
    }

    if (
      validateField(selectedGouvernorat, 'gouvernorat') ||
      validateField(selectedDelegation, 'delegation') ||
      validateField(selectedLocalite, 'localite') ||
      validateField(selectedImplantsType, 'selectedImplantsType') ||
      validateField(oliveType, 'oliveType') ||
      validateField(otherImplantType, 'otherImplantType') ||
      validateField(personFullName, 'personFullName') ||
      validateField(cin, 'cin') ||
      validateField(telephone, 'telephone') ||
      validateField(plantsNb, 'plantsNb') ||
      validateField(superficie, 'superficie')

    ) {
      return;
    }


    const printWindow = window.open('', '', 'width=900,height=900');
    const direction = currentLanguage === 'ar' ? 'rtl' : 'ltr';
    printWindow.document.write('<html><head><title>' + document.title + '</title>');
    printWindow.document.write('</head><body dir="' + direction + '"> ');
    printWindow.document.write(printContent);
    printWindow.document.write('</body></html>');
    printWindow.document.close();

    // Wait for the image to load before printing
    const printImage = printWindow.document.getElementById('printImage');
    printImage.onload = () => {
      printWindow.print();
    };
    // Fallback in case the image doesn't load
    printImage.onerror = () => {
      printWindow.print();
    };
  };


  return (

    <>
      {show && <div style={{ zIndex: 999, backgroundColor: "whitesmoke", height: '70vh', width: "100vw", position: "fixed", top: "40%", left: "50%", transform: "translate(-50%, -50%)", padding: "20px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", borderRadius: "5px" }}>

        <div className='d-flex'>
          <Button className="mx-2 mb-3 d-flex align-items-center" variant="danger" onClick={() => setShow(false)}>
            {t('fermer')} <RxCross1 className='mx-2' />
          </Button>
          <Button className="mx-2 mb-3 d-flex align-items-center" variant="primary" onClick={() => handlePrintConditions()}
          >
            {t('Imprimer')} <FiPrinter className='mx-2' />
          </Button>
        </div>
        <div ref={conditionRef} dir={currentLanguage == 'ar' ? 'rtl' : 'ltr'} dangerouslySetInnerHTML={{ __html: modalContent }}></div>

      </div>}

      <div ref={demandeRef} className="p-4 space-y-4 border" dir={currentLanguage === "ar" ? "rtl" : "ltr"}>
        <h1 className='text-center'>{t('demande pepiniers')}</h1>
        <div className="flex flex-row align-items-center">
          <>
            <label className="mb-2 text-lg font-medium text-gray-700">- {t("registrationCode")}</label>
            <label className="mb-2 mx-2 text-lg font-medium text-gray-700">
              <span className='text-green-600 text-decoration-underline'>{demandeCode}</span>
            </label>

          </>
          <div className='mx-5'>
            <label className="mb-2 text-lg font-medium text-gray-700">- {t("registrationDate")} : {currentDate.toLocaleString('fr-FR')}</label>
          </div>
          <button onClick={() => handleClick()} className="mb-2 mx-2 text-lg font-medium text-red-400 text-decoration-underline">{t('voir les conditions')}</button>
        </div>

        <div className="flex flex-col">
          <label className="mb-2 text-lg font-medium text-gray-700">{t('Gouvernorat')}:</label>
          <select
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={selectedGouvernorat}
            onChange={(e) => {
              setSelectedGouvernorat(e.target.value);
              setSelectedDelegation('');
              setSelectedLocalite('');
            }}
          >
            <option value=""> {t('Sélectionnez la Gouvernorat')} </option>
            {currentLanguage === 'ar' ? gouvernorats_ar.map(gouvernorat => (
              <option key={gouvernorat} value={gouvernorat}>{gouvernorat}</option>
            )) :
              gouvernorats.map(gouvernorat => (
                <option key={gouvernorat} value={gouvernorat}>{gouvernorat}</option>))
            }
          </select>
          {validationErrors.gouvernorat && (
            <span style={{ color: "red" }}>{t('Ce champ est obligatoire')}</span>
          )}
        </div>

        {selectedGouvernorat && (
          <div className="flex flex-col">
            <label className="mb-2 text-lg font-medium text-gray-700">{t('Delegation')} :</label>
            <select
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedDelegation}
              onChange={(e) => {
                setSelectedDelegation(e.target.value);
                setSelectedLocalite('');
              }}
            >
              <option value=""> {t('Sélectionnez Délégation')}</option>
              {currentLanguage === 'ar' ? delegations_ar.map(delegation => (
                <option key={delegation} value={delegation}>{delegation}</option>
              )) :

                delegations.map(delegation => (
                  <option key={delegation} value={delegation}>{delegation}</option>
                ))


              }
            </select>
            {validationErrors.delegation && (
              <span style={{ color: "red" }}>{t('Ce champ est obligatoire')}</span>
            )}
          </div>
        )}

        {selectedDelegation && (
          <div className="flex flex-col">
            <label className="mb-2 text-lg font-medium text-gray-700">{t('Localité')}:</label>
            <select
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedLocalite}
              onChange={(e) => setSelectedLocalite(e.target.value)}
            >
              <option value="">
                {t('Sélectionnez la localité')}
              </option>
              {currentLanguage === 'ar' ? localites_ar.map(localite => (
                <option key={localite} value={localite}>{localite}</option>
              ))
                :
                localites.map(localite => (
                  <option key={localite} value={localite}>{localite}</option>
                ))

              }
            </select>
            {validationErrors.localite && (
              <span style={{ color: "red" }}>{t('Ce champ est obligatoire')}</span>
            )}
          </div>
        )}
        <div className="flex flex-col">
          <label className="mb-2 text-lg font-medium text-gray-700"> {t('Type des implants')}
          </label>
          <select
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={selectedImplantsType}
            onChange={(e) => setSelectedImplantsType(e.target.value)}
          >
            <option value="">
              {t('Sélectionnez le type des implants')}
            </option>
            <option key={"Olivier"} value={"olivier"}>{t("olivier")}</option>
            <option key={"Amandiers"} value={"amandiers"}>{t("amandiers")}</option>
            <option key={"arbres fruitiers"} value={"arbres fruitiers"}>{t("arbres fruitiers")}</option>
          </select>
          {validationErrors.selectedImplantsType && (
            <span style={{ color: "red" }}>{t('Ce champ est obligatoire')}</span>
          )}
        </div>
        {selectedImplantsType == "olivier" && (
          <div className="flex flex-col">
            <label className="mb-2 text-lg font-medium text-gray-700">{t('Type')}:</label>
            <select
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={oliveType}
              onChange={(e) => setOliveType(e.target.value)}
            >
              <option value="">
                {t('Sélectionnez le type')}
              </option>
              <option key={" Olives oléagineuses"} value={" Olives oléagineuses"}>{t("Olives oléagineuses")}</option>
              <option key={" Olives comestibles"} value={" Olives comestibles"}>{t("Olives comestibles")}</option>
            </select>
            {validationErrors.oliveType && (
              <span style={{ color: "red" }}>{t('Ce champ est obligatoire')}</span>
            )}
          </div>
        )}
        {selectedImplantsType == ("amandiers") && (
          <div className="flex flex-col">
            <label className="mb-2 text-lg font-medium text-gray-700">{t('Type')}:</label>
            <input
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={otherImplantType}
              onChange={(e) => setOtherImplantType(e.target.value)}
            />

            {validationErrors.otherImplantType && (
              <span style={{ color: "red" }}>{t('Ce champ est obligatoire')}</span>
            )}
          </div>
        )}
        {selectedImplantsType == ("arbres fruitiers") && (
          <div className="flex flex-col">
            <label className="mb-2 text-lg font-medium text-gray-700">{t('Type')}:</label>
            <input
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={otherImplantType}
              onChange={(e) => setOtherImplantType(e.target.value)}
            />

            {validationErrors.otherImplantType && (
              <span style={{ color: "red" }}>{t('Ce champ est obligatoire')}</span>
            )}
          </div>
        )}
        <div className="flex flex-col">
          <label className="mb-2 text-lg font-medium text-gray-700">
            {t('Le nom du bénéficiaire (le nom complet)')}
          </label>
          <input
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={personFullName}
            onChange={(e) => setPersonFullName(e.target.value)}
          />
          {validationErrors.personFullName && (
            <span style={{ color: "red" }}>{t('Ce champ est obligatoire')}</span>
          )}
        </div>
        <div className="flex flex-col">
          <label className="mb-2 text-lg font-medium text-gray-700">
            {t('N° C.I.N')}
          </label>
          <input
            type="number"
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder='8 chiffres'
            value={cin}
            onChange={(e) => setCin(e.target.value)}
          />
          {validationErrors.cin && (
            <span style={{ color: "red" }}>{t('Ce champ est obligatoire')}</span>
          )}
        </div>
        <div className="flex flex-col">
          <label className="mb-2 text-lg font-medium text-gray-700">
            {t('N° Télephone')} :
          </label>
          <input
            type="number"
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder='xx xxx xxx'
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
          />
          {validationErrors.telephone && (
            <span style={{ color: "red" }}>{t('Ce champ est obligatoire')}</span>
          )}
        </div>
        <div className="flex flex-col">
          <label className="mb-2 text-lg font-medium text-gray-700">
            {t('Nombre des plants')} :
          </label>
          <input
            type="number"
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder='xx xxx xxx'
            value={plantsNb}
            onChange={(e) => setPlantsNb(e.target.value)}
          />
          {validationErrors.plantsNb && (
            <span style={{ color: "red" }}>{t('Ce champ est obligatoire')}</span>
          )}
        </div>
        <div className="flex flex-col">
          <label className="mb-2 text-lg font-medium text-gray-700">
            {t('Superficie')} :
          </label>
          <input
            type="number"
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"

            value={superficie}
            onChange={(e) => setSuperficie(e.target.value)}
          />
          {validationErrors.superficie && (
            <span style={{ color: "red" }}>{t('Ce champ est obligatoire')}</span>
          )}
        </div>

        <div className="flex flex-row justify-between mt-4">
          <div className='d-flex flex-column align-items-center'>
            <label className="text-center mb-2 text-lg font-medium text-gray-700">
              {t('signature utilisateur')}
            </label>
            <div className='signature_box'></div>
          </div>
          <div>
            <div className="d-flex flex-column align-items-center"> <label className="text-center mb-2 text-lg font-medium text-gray-700">
              {t('signature groupe developpement')}
            </label>
              <div className='signature_box'>
              </div></div>
          </div>
        </div>
        <div className=" mt-4 col-6 flex flex-row justify-content-around">
          <button onClick={() => handlePrintDemande(demandeRef)} className='d-flex  align-items-center btn btn-primary'>{t('Imprimer')}<FiPrinter className='mx-2' /></button>
        </div>
      </div>
    </>

  )
}

export default DemandePepinieres