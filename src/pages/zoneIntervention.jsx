import React, { useState } from "react";
import { useEffect } from "react";
import { Image } from "react-bootstrap";
import { useTranslation } from 'react-i18next';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase/config';
function ZoneIntervention() {
    const { t, i18n } = useTranslation();
    let current_language = i18n.language
    const [imageList, setImageList] = useState([]);


    const data = {
        tab_1_ar: `<table border class="mb-4 p-1 text-center table-bordered" border="2">
        <thead>
            <tr >
                <th>الولاية</th>
                <th>المعتمديّات (عدد)</th>
                <th>العمادات (عدد)</th>
                <th>المساحة (هك)</th>
                <th>السكّان (عدد)</th>
                <th>الأسر (عدد)</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>باجة</td>
                <td>7</td>
                <td>27</td>
                <td>96552</td>
                <td>56710</td>
                <td>12469</td>
            </tr>
            <tr>
                <td>جندوبة</td>
                <td>4</td>
                <td>23</td>
                <td>98480</td>
                <td>83094</td>
                <td>17287</td>
            </tr>
            <tr>
                <td>سليانة</td>
                <td>3</td>
                <td>10</td>
                <td>61139</td>
                <td>24449</td>
                <td>5047</td>
            </tr>
            <tr>
                <td>بنرت</td>
                <td>2</td>
                <td>14</td>
                <td>85826</td>
                <td>69575</td>
                <td>14160</td>
            </tr>
            <tr>
                <td>الكاف</td>
                <td>5</td>
                <td>14</td>
                <td>117787</td>
                <td>34268</td>
                <td>7336</td>
            </tr>
            <tr>
                <td>الجملة</td>
                <td>21</td>
                <td>88</td>
                <td>459784</td>
                <td>268096</td>
                <td>56299</td>
            </tr>
        </tbody>
    </table>`,
        tab_2_ar: ` <table border class="mb-4 p-1 text-center table-bordered" border="2">
        <thead>
            <tr>
                <th>الولاية</th>
                <th>المعتمديّات (عدد)</th>
                <th>العمادات (عدد)</th>
                <th>المساحة (هك)</th>
                <th>السكّان (عدد)</th>
                <th>الأسر (عدد)</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>باجة</td>
                <td>7</td>
                <td>27</td>
                <td>96552</td>
                <td>56710</td>
                <td>12469</td>
            </tr>
            <tr>
                <td>جندوبة</td>
                <td>4</td>
                <td>23</td>
                <td>98480</td>
                <td>83094</td>
                <td>17287</td>
            </tr>
            <tr>
                <td>سليانة</td>
                <td>3</td>
                <td>10</td>
                <td>61139</td>
                <td>24449</td>
                <td>5047</td>
            </tr>
            <tr>
                <td>بنرت</td>
                <td>2</td>
                <td>14</td>
                <td>85826</td>
                <td>69575</td>
                <td>14160</td>
            </tr>
            <tr>
                <td>الكاف</td>
                <td>5</td>
                <td>14</td>
                <td>117787</td>
                <td>34268</td>
                <td>7336</td>
            </tr>
            <tr>
                <td>الجملة</td>
                <td>21</td>
                <td>88</td>
                <td>459784</td>
                <td>268096</td>
                <td>56299</td>
            </tr>
            <tr>
                <td>باجة</td>
                <td>3</td>
                <td>9</td>
                <td>45246</td>
                <td>13414</td>
                <td>2567</td>
            </tr>
            <tr>
                <td>جندوبة</td>
                <td>2</td>
                <td>3</td>
                <td>10291</td>
                <td>8669</td>
                <td>1936</td>
            </tr>
            <tr>
                <td>سليانة</td>
                <td>1</td>
                <td>4</td>
                <td>23274</td>
                <td>5743</td>
                <td>1210</td>
            </tr>
            <tr>
                <td>بنرت</td>
                <td>1</td>
                <td>2</td>
                <td>14821</td>
                <td>4013</td>
                <td>889</td>
            </tr>
            <tr>
                <td>الكاف</td>
                <td>4</td>
                <td>7</td>
                <td>50661</td>
                <td>18497</td>
                <td>4099</td>
            </tr>
            <tr>
                <td>الجملة</td>
                <td>13</td>
                <td>25</td>
                <td>144293</td>
                <td>50336</td>
                <td>10701</td>
            </tr>
        </tbody>
    </table>`,
        tab_3_ar: ` <table border class="p-1 text-center table-bordered" border="2">
        <thead>
            <tr>
                <th>الولاية</th>
                <th>المعتمديّات (عدد)</th>
                <th>العمادات (عدد)</th>
                <th>المساحة (هك)</th>
                <th>السكّان (عدد)</th>
                <th>الأسر (عدد)</th>
            </tr>
        </thead>
        <tbody>

            <tr>
                <td>باجة</td>
                <td>3</td>
                <td>9</td>
                <td>45246</td>
                <td>13414</td>
                <td>2567</td>
            </tr>
            <tr>
                <td>جندوبة</td>
                <td>2</td>
                <td>3</td>
                <td>10291</td>
                <td>8669</td>
                <td>1936</td>
            </tr>
            <tr>
                <td>سليانة</td>
                <td>1</td>
                <td>4</td>
                <td>23274</td>
                <td>5743</td>
                <td>1210</td>
            </tr>
            <tr>
                <td>بنرت</td>
                <td>1</td>
                <td>2</td>
                <td>14821</td>
                <td>4013</td>
                <td>889</td>
            </tr>
            <tr>
                <td>الكاف</td>
                <td>4</td>
                <td>7</td>
                <td>50661</td>
                <td>18497</td>
                <td>4099</td>
            </tr>
            <tr>
                <td>الجملة</td>
                <td>13</td>
                <td>25</td>
                <td>144293</td>
                <td>50336</td>
                <td>10701</td>
            </tr>
            <tr>
                <td>باجة</td>
                <td>8</td>
                <td>36</td>
                <td>141798</td>
                <td>70124</td>
                <td>15036</td>
            </tr>
            <tr>
                <td>جندوبة</td>
                <td>4</td>
                <td>26</td>
                <td>108771</td>
                <td>91763</td>
                <td>19223</td>
            </tr>
            <tr>
                <td>سليانة</td>
                <td>3</td>
                <td>14</td>
                <td>84413</td>
                <td>30192</td>
                <td>6257</td>
            </tr>
            <tr>
                <td>بنرت</td>
                <td>3</td>
                <td>16</td>
                <td>100647</td>
                <td>73588</td>
                <td>15049</td>
            </tr>
            <tr>
                <td>الكاف</td>
                <td>5</td>
                <td>21</td>
                <td>168448</td>
                <td>52765</td>
                <td>11435</td>
            </tr>
            <tr>
                <td>الجملة</td>
                <td>23</td>
                <td>113</td>
                <td>604077</td>
                <td>318432</td>
                <td>67000</td>
            </tr>
        </tbody>
    </table>`,
        tab_1_en: `<table border class="mb-4 p-1 text-center table-bordered" border="2">
    <thead>
        <tr>
            <th>Direction</th>
            <th>Délégation (nb)</th>
            <th>Secteurs (nb)</th>
            <th>Superficie (ha)</th>
            <th>Population (nb)</th>
            <th>Ménages (nb)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Béja</td>
            <td>7</td>
            <td>27</td>
            <td>96 552</td>
            <td>56 710</td>
            <td>12 469</td>
        </tr>
        <tr>
            <td>Jendouba</td>
            <td>4</td>
            <td>23</td>
            <td>98 480</td>
            <td>83 094</td>
            <td>17 287</td>
        </tr>
        <tr>
            <td>Siliana</td>
            <td>3</td>
            <td>10</td>
            <td>61 139</td>
            <td>24 449</td>
            <td>5 047</td>
        </tr>
        <tr>
            <td>Bizerte</td>
            <td>2</td>
            <td>14</td>
            <td>85 826</td>
            <td>69 575</td>
            <td>14 160</td>
        </tr>
        <tr>
            <td>Le Kef</td>
            <td>5</td>
            <td>14</td>
            <td>117 787</td>
            <td>34 268</td>
            <td>7 336</td>
        </tr>
        <tr>
            <td>Total</td>
            <td>21</td>
            <td>88</td>
            <td>459 784</td>
            <td>268 096</td>
            <td>56 299</td>
        </tr>
    </tbody>
</table`,
        tab_2_en: `<table border class="mb-4 p-1 text-center table-bordered" border="2">
    <thead>
        <tr>
            <th>Direction</th>
            <th>Délégation (nb)</th>
            <th>Secteurs (nb)</th>
            <th>Superficie (ha)</th>
            <th>Population (nb)</th>
            <th>Ménages (nb)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Béja</td>
            <td>3</td>
            <td>9</td>
            <td>45 246</td>
            <td>13 414</td>
            <td>2 567</td>
        </tr>
        <tr>
            <td>Jendouba</td>
            <td>2</td>
            <td>3</td>
            <td>10 291</td>
            <td>8 669</td>
            <td>1 936</td>
        </tr>
        <tr>
            <td>Siliana</td>
            <td>1</td>
            <td>4</td>
            <td>23 274</td>
            <td>5 743</td>
            <td>1 210</td>
        </tr>
        <tr>
            <td>Bizerte</td>
            <td>1</td>
            <td>2</td>
            <td>14 821</td>
            <td>4 013</td>
            <td>889</td>
        </tr>
        <tr>
            <td>Le Kef</td>
            <td>4</td>
            <td>7</td>
            <td>50 661</td>
            <td>18 497</td>
            <td>4 099</td>
        </tr>
        <tr>
            <td>Total</td>
            <td>13</td>
            <td>25</td>
            <td>144 293</td>
            <td>50 336</td>
            <td>10 701</td>
        </tr>
    </tbody>
</table>`,
        tab_3_en: `<table border class="mb-4 p-1 text-center table-bordered" border="2">
    <thead>
        <tr>
            <th>Direction</th>
            <th>Délégation (nb)</th>
            <th>Secteurs (nb)</th>
            <th>Superficie (ha)</th>
            <th>Population (nb)</th>
            <th>Ménages (nb)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Béja</td>
            <td>8</td>
            <td>36</td>
            <td>141 798</td>
            <td>70 124</td>
            <td>15 036</td>
        </tr>
        <tr>
            <td>Jendouba</td>
            <td>4</td>
            <td>26</td>
            <td>108 771</td>
            <td>91 763</td>
            <td>19 223</td>
        </tr>
        <tr>
            <td>Siliana</td>
            <td>3</td>
            <td>14</td>
            <td>84 413</td>
            <td>30 192</td>
            <td>6 257</td>
        </tr>
        <tr>
            <td>Bizerte</td>
            <td>3</td>
            <td>16</td>
            <td>100 647</td>
            <td>73 588</td>
            <td>15 049</td>
        </tr>
        <tr>
            <td>Le Kef</td>
            <td>5</td>
            <td>21</td>
            <td>168 448</td>
            <td>52 765</td>
            <td>11 435</td>
        </tr>
        <tr>
            <td>Total</td>
            <td>23</td>
            <td>113</td>
            <td>604 077</td>
            <td>318 432</td>
            <td>67 000</td>
        </tr>
    </tbody>
</table>`,
        tab_1_fr: `<table border class="mb-4 p-1 text-center table-bordered" border="2">
    <thead>
       <tr>
            <th>Directorate</th>
            <th>Delegation (nb)</th>
            <th>Sectors (nb)</th>
            <th>Area (ha)</th>
            <th>Population (nb)</th>
            <th>Households (nb)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Béja</td>
            <td>7</td>
            <td>27</td>
            <td>96 552</td>
            <td>56 710</td>
            <td>12 469</td>
        </tr>
        <tr>
            <td>Jendouba</td>
            <td>4</td>
            <td>23</td>
            <td>98 480</td>
            <td>83 094</td>
            <td>17 287</td>
        </tr>
        <tr>
            <td>Siliana</td>
          <td>3</td>
            <td>10</td>
            <td>61 139</td>
            <td>24 449</td>
            <td>5 047</td>
        </tr>
        <tr>
            <td>Bizerte</td>
            <td>3</td>
            <td>16</td>
            <td>100 647</td>
            <td>73 588</td>
            <td>15 049</td>
        </tr>
        <tr>
            <td>Le Kef</td>
            <td>5</td>
            <td>21</td>
            <td>168 448</td>
            <td>52 765</td>
            <td>11 435</td>
        </tr>
        <tr>
            <td>Total</td>
            <td>23</td>
            <td>113</td>
            <td>604 077</td>
            <td>318 432</td>
            <td>67 000</td>
        </tr>
    </tbody>
</table>
`,
        tab_2_fr: `<table border class="mb-4 p-1 text-center table-bordered" border="2">
    <thead>
        <tr>
            <th>Directorate</th>
            <th>Delegation (nb)</th>
            <th>Sectors (nb)</th>
            <th>Area (ha)</th>
            <th>Population (nb)</th>
            <th>Households (nb)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Beja</td>
            <td>3</td>
            <td>9</td>
            <td>45 246</td>
            <td>13 414</td>
            <td>2 567</td>
        </tr>
        <tr>
            <td>Jendouba</td>
            <td>2</td>
            <td>3</td>
            <td>10 291</td>
            <td>8 669</td>
            <td>1 936</td>
        </tr>
        <tr>
            <td>Siliana</td>
            <td>1</td>
            <td>4</td>
            <td>23 274</td>
            <td>5 743</td>
            <td>1 210</td>
        </tr>
        <tr>
            <td>Bizerte</td>
            <td>1</td>
            <td>2</td>
            <td>14 821</td>
            <td>4 013</td>
            <td>889</td>
        </tr>
        <tr>
            <td>Le Kef</td>
            <td>4</td>
            <td>7</td>
            <td>50 661</td>
            <td>18 497</td>
            <td>4 099</td>
        </tr>
        <tr>
            <td>Total</td>
            <td>13</td>
            <td>25</td>
            <td>144 293</td>
            <td>50 336</td>
            <td>10 701</td>
        </tr>
    </tbody>
</table>
`,
        tab_3_fr: `<table border class="mb-4 p-1 text-center table-bordered" border="2">
    <thead>
        <tr>
            <th>Directorate</th>
            <th>Delegation (nb)</th>
            <th>Sectors (nb)</th>
            <th>Area (ha)</th>
            <th>Population (nb)</th>
            <th>Households (nb)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Beja</td>
            <td>8</td>
            <td>36</td>
            <td>141 798</td>
            <td>70 124</td>
            <td>15 036</td>
        </tr>
        <tr>
            <td>Jendouba</td>
            <td>4</td>
            <td>26</td>
            <td>108 771</td>
            <td>91 763</td>
            <td>19 223</td>
        </tr>
        <tr>
            <td>Siliana</td>
            <td>3</td>
            <td>14</td>
            <td>84 413</td>
            <td>30 192</td>
            <td>6 257</td>
        </tr>
        <tr>
            <td>Bizerte</td>
            <td>2</td>
            <td>14</td>
            <td>85 826</td>
            <td>69 575</td>
            <td>14 160</td>
        </tr>
        <tr>
            <td>Le Kef</td>
            <td>5</td>
            <td>14</td>
            <td>117 787</td>
            <td>34 268</td>
            <td>7 336</td>
        </tr>
        <tr>
            <td>Total</td>
            <td>21</td>
            <td>88</td>
            <td>459 784</td>
            <td>268 096</td>
            <td>56 299</td>
        </tr>
    </tbody>
</table>
`,
    }



    useEffect(() => {
        const fetchImages = async () => {
            const listRef = ref(storage, 'zones_int/');
            try {
                const res = await listAll(listRef);
                const items = res.items;
                const urls = await Promise.all(
                    items.map(async (itemRef) => {
                        const url = await getDownloadURL(itemRef);
                        return {
                            name: itemRef.name,
                            url: url
                        };
                    })
                );
                setImageList(urls);
                console.log(urls)
            } catch (error) {
                setError(error);
            }
        };

        fetchImages();
    }, []);
    return (
        <div className="block my-2 w-full max-w-[999px] p-6 bg-white border border-gray-200 rounded-lg shadow ">
            <h5 dir={current_language == "ar" ? "rtl" : 'ltr'} className="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-700">
                {t("zone intervention titre")} </h5>
            <img src={imageList.length > 0 && imageList.filter(el => el.name == `zones_int_${i18n.language}.jpg`)[0].url} />

            <p dir={current_language == "ar" ? "rtl" : 'ltr'} className="font-normal text-gray-700 dark:text-gray-500 text-justify">
                {t("zone intervention1")}<br></br>
                {t("zone intervention2")}
            </p>
            <p dir={current_language == "ar" ? "rtl" : 'ltr'} className="font-normal text-gray-700 dark:text-gray-500 text-justify">
                <strong><li> {t("zone intervention3")} </li>
                    <div dangerouslySetInnerHTML={{ __html: data[`tab_1_${i18n.language}`] }}></div>
                </strong>
                <strong><li> {t("zone intervention4")} </li>
                    <div dangerouslySetInnerHTML={{ __html: data[`tab_2_${i18n.language}`] }}></div>
                </strong>
                <strong><li> {t("zone intervention5")}  </li>
                    <div dangerouslySetInnerHTML={{ __html: data[`tab_3_${i18n.language}`] }}></div>

                </strong>

            </p>


        </div>
    )
}

export default ZoneIntervention;