import React, { useState, useEffect } from 'react';
import { getStorage, getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { storage } from '../firebase/config';
import { firestore } from '../firebase/config';
import { useTranslation } from 'react-i18next';
import { PDFDownloadLink, PDFViewer, Document, Page, Text, StyleSheet, View, Image } from '@react-pdf/renderer';
import { Modal } from 'react-bootstrap'; // you can use any modal library

const AdminComplaints = () => {

    const { t, i18n } = useTranslation();
    const [articles, setArticles] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null); const db = getFirestore();
    const openModal = (content) => {
        setModalContent(content);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalContent(null);
    };
    useEffect(() => {
        const fetchArticles = async () => {
            const articlesCollection = collection(db, 'complains');
            const snapshot = await getDocs(articlesCollection);
            const articlesList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setArticles(articlesList);
        };
        fetchArticles();
    }, []);



    const handleDelete = async (id) => {
        try {
            await deleteDoc(doc(db, 'complains', id));
            setArticles(articles.filter(article => article.id !== id));
        } catch (error) {
            setError(error.message);
        }
    };


    const generatePDF = (currentData) => (
        <Document>
            <Page style={styles.page}>
                <Image style={styles.banner} src={`/img/banner_${i18n.language}.png`} />
                <Text style={styles.header}>{t('complaintForm')}</Text>
                <View style={styles.section}>
                    <Text style={styles.label}>{t('registrationCode')}:</Text>
                    <Text style={styles.value}>{currentData.registrationCode}</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.label}>{t('registrationDate')}:</Text>
                    <Text style={styles.value}>{currentData.registrationDate}</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.label}>{t('firstName')}:</Text>
                    <Text style={styles.value}>{currentData.firstName}</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.label}>{t('lastName')}:</Text>
                    <Text style={styles.value}>{currentData.lastName}</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.label}>{t('email')}:</Text>
                    <Text style={styles.value}>{currentData.email}</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.label}>{t('phoneNumber')}:</Text>
                    <Text style={styles.value}>{currentData.phoneNumber}</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.label}>{t('subject')}:</Text>
                    <Text style={styles.value}>{currentData.subject}</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.label}>{t('description')}:</Text>
                    <Text style={styles.value}>{currentData.description}</Text>
                </View>
            </Page>
        </Document>
    );

    const styles = StyleSheet.create({
        banner: {
            marginBottom: "20px"
        },
        page: {
            padding: 30,
            backgroundColor: '#f6f6f6',
            fontFamily: 'Helvetica'
        },
        section: {
            margin: 2,
            padding: 5,
            borderBottomWidth: 1,
            borderBottomColor: '#e6e6e6',
            borderBottomStyle: 'solid',
        },
        header: {
            fontSize: 24,
            textAlign: 'center',
            marginBottom: 20,
            color: '#333'
        },
        label: {
            fontSize: 14,
            marginBottom: 5,
            color: '#555',
        },
        value: {
            fontSize: 16,
            marginBottom: 10,
            color: '#000',
        }
    });


    return (
        <div className="p-4 bg-gray-100 rounded-md shadow-md border">
            <h1 className='text-center mb-5'>{t('complaintList')}</h1>


            <div className="mt-4 row" >
                {articles.map(article => (
                    <ul key={article.id} dir={i18n.language == "ar" ? "rtl" : "ltr"} className='col-12  border-1 border-green-600'>
                        <div className='col-2 m-2'>
                            <button onClick={() => handleDelete(article.id)} className="mx-2 w-100 btn btn-danger">{t('Delete')}</button>
                            <PDFDownloadLink className="col-6 mx-2 w-100 btn btn-success mt-3" document={generatePDF(article)} fileName="reclamation.pdf">
                                {t('Imprimer')}
                            </PDFDownloadLink>
                        </div>
                        <div className="flex  justify-around border border-grey shadow p-2 items-center border-b border-gray-200 px-4">
                            <div className=' w-100'>
                                <div className='d-flex'>
                                     <div className='col-5'> 
                                    <h6 className="text-lg  font-semibold"> {t('registrationDate')} : {article.registrationDate}</h6>
                                    <h6 className="text-lg  font-semibold"> {t('registrationCode')} : {article.registrationCode}</h6>
                                    <h6 className="text-lg  font-semibold"> {t('firstName')} : {article.firstName}</h6>
                                    <h6 className="text-lg  font-semibold"> {t('lastName')} : {article.lastName}</h6>
                                    <h6 className="text-lg  font-semibold"> {t('email')} : {article.email}</h6>
                                    <h6 className="text-lg  font-semibold"> {t('phoneNumber')} : {article.phoneNumber}</h6>
                                </div>
                                    <div className='col-7 border-right border-2'> 
                                     <h6 className="text-lg  font-semibold">{t('subject')} :{article.subject}</h6>


                                    <h6 className="text-lg  font-semibold">{t('description')} : </h6>

                                    <p className='py-4 px-1 h-75 font-bold  border border-black shadow'>{article.description}</p></div></div>
                               



                                <h4 className='text-orange-700 text-decoration-underline'> {t('attachment')}</h4>
                                <div className='flex'>
                                    {article.images && article.images.map((image, index) => (
                                        <div key={index} className='relative mt-4'>
                                            {image.includes("pdf") ? (
                                                <iframe src={image} width="400px" height="400px" className='block' />
                                            ) : (
                                                <img src={image} width="400px" height="400px" alt={`Article ${index}`} className='block' />
                                            )}
                                            <div
                                                className='absolute px-3 top-0 right-0 mt-2 p-2 bg-blue-400 bg-opacity-100 text-white rounded cursor-pointer'
                                                onClick={() => openModal(image.includes("pdf") ? <iframe src={image} width="800px" height="800px" /> : <img src={image} width="800px" height="800px" alt={`Article ${index}`} />)}
                                            >
                                                🔍
                                            </div>
                                        </div>
                                    ))}
                                    {isModalOpen && <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50" onClick={closeModal}>
                                        <button className="absolute top-4 right-4 text-white text-2xl font-bold" onClick={closeModal}>X</button>
                                        <div className="relative w-full md:w-4/5 lg:w-3/4 xl:w-2/3 p-4  rounded-md" onClick={e => e.stopPropagation()}>
                                            {modalContent}
                                        </div>
                                    </div>}
                                </div>

                            </div>

                        </div>
                    </ul>
                ))}
            </div>
        </div>
    );
};

export default AdminComplaints;


