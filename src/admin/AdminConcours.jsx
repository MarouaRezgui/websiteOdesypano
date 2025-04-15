import React, { useState, useEffect } from 'react';
import { getStorage, getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { storage } from '../firebase/config';
import { firestore } from '../firebase/config';
import { useTranslation } from 'react-i18next';
import { FaEdit } from 'react-icons/fa';
import { FaDeleteLeft } from 'react-icons/fa6';

const AdminConcours = () => {
    const [titles, setTitles] = useState({ en: '', fr: '', ar: '' });

    const [descriptions, setDescriptions] = useState({ en: '', fr: '', ar: '' });
    const [files, setFiles] = useState([]);
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState(null);
    const [editId, setEditId] = useState(null);
    const { t, i18n } = useTranslation();
    const [articles, setArticles] = useState([]);

    const db = getFirestore();

    useEffect(() => {
        const fetchArticles = async () => {
            const articlesCollection = collection(db, 'concours');
            const snapshot = await getDocs(articlesCollection);
            const articlesList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setArticles(articlesList);
        };
        fetchArticles();
    }, []);

    const handleFileChange = (e) => {
        setFiles(Array.from(e.target.files));
    };

    const handleUpload = async () => {
        if (!titles.ar || (files.length === 0 && !editId)) {
            setError(t('Ce champ est obligatoire'));
            return;
        }

        setUploading(true);
        setError(null);

        try {
            let downloadURLs = [];
            if (files.length > 0) {
                const uploadPromises = files.map(async (file) => {
                    const storageRef = ref(storage, `concours/${file.name}`);
                    const uploadTask = uploadBytesResumable(storageRef, file);

                    await uploadTask;

                    const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                    return downloadURL;
                });

                downloadURLs = await Promise.all(uploadPromises);
            }

            if (editId) {
                const articleRef = doc(firestore, 'concours', editId);
                await updateDoc(articleRef, {
                    titles,
                    descriptions,
                    ...(files.length > 0 && { images: downloadURLs })
                });

                setArticles(articles.map(article => article.id === editId ? { ...article, titles, descriptions, ...(files.length > 0 && { images: downloadURLs }) } : article));
                setEditId(null);
            } else {
                const docRef = await addDoc(collection(firestore, 'concours'), {
                    titles,
                    descriptions,
                    images: downloadURLs
                });

                setArticles([...articles, { id: docRef.id, titles, descriptions, images: downloadURLs }]);
            }

            setTitles('');
            setDescriptions('');
            setFiles([]);
        } catch (error) {
            console.error('Error uploading document: ', error);
            setError('An error occurred, please try again');
        } finally {
            setUploading(false);
        }
    };

    const handleDelete = async (id) => {
        try {
            await deleteDoc(doc(db, 'concours', id));
            setArticles(articles.filter(article => article.id !== id));
        } catch (error) {
            setError(error.message);
        }
    };

    const handleEdit = (article) => {
        setTitles(article.titles);
        setDescriptions(article.descriptions);
        setFiles([]);
        setEditId(article.id);
    };

    return (
        <div className="p-4 bg-gray-100 rounded-md shadow-md">
            <h1 className='text-center mb-5'> {t("concours 1")}</h1>
            <div className='flex justify-around col-12'>
                <div className='flex flex-column'>
                    <h6>العربية</h6>

                    <input
                        type="text"
                        placeholder={t('title')}
                        value={titles.ar}
                        onChange={(e) => setTitles({ ...titles, ar: e.target.value })}
                        className="mb-2 px-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
                    />
                    <textarea
                        placeholder={t("description")}
                        value={descriptions.ar}
                        onChange={(e) => setDescriptions({ ...descriptions, ar: e.target.value })}
                        className="mb-2 px-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
                    ></textarea>


                </div>

                <div className='flex flex-column'>
                    <h6>English</h6>
                    <input
                        type="text"
                        placeholder={t('title')}
                        value={titles.fr}
                        onChange={(e) => setTitles({ ...titles, fr: e.target.value })}
                        className="mb-2 px-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
                    />
                    <textarea
                        placeholder={t("description")}
                        value={descriptions.fr}
                        onChange={(e) => setDescriptions({ ...descriptions, fr: e.target.value })}
                        className="mb-2 px-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
                    ></textarea>

                </div>

                <div className='flex flex-column'>
                    <h6>Français</h6>

                    <input
                        type="text"
                        placeholder={t('title')}
                        value={titles.en}
                        onChange={(e) => setTitles({ ...titles, en: e.target.value })}
                        className="mb-2 px-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
                    />
                    <textarea
                        placeholder={t("description")}
                        value={descriptions.en}
                        onChange={(e) => setDescriptions({ ...descriptions, en: e.target.value })}
                        className="mb-2 px-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
                    ></textarea>
                </div>

            </div>

            <input
                type="file"
                multiple
                onChange={handleFileChange}
                className="mb-2 w-full"
            />
            <button
                onClick={handleUpload}
                disabled={uploading}
                className={`px-4 py-2 rounded-md text-white ${uploading ? 'bg-gray-300 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'}`}
            >
                {uploading ? t('Uploading') : t(editId ? t('Update') : t('Upload'))}
            </button>
            {error && <div className="text-red-500 mt-2">{error}</div>}
            <div className="mt-4 row" dir={i18n.language == "ar" ? "rtl" : "ltr"}>
                {articles.map(article => (
                    <ul key={article.id} className='col-6 text-center'>
                       
                        <div className="flex flex-column  justify-around border border-grey shadow p-2 items-center border-b border-gray-200 px-4">
                            <div className='col-6 mb-3 flex align-items-center'>
                                <button onClick={() => handleEdit(article)} className=" d-flex justify-around align-items-center mx-3 px-4 w-100  btn btn-primary"> <FaEdit className='mx-1' /> <span>{t('Edit')}</span></button>
                                <button onClick={() => handleDelete(article.id)} className=" d-flex justify-around align-items-center mx-2 px-4 w-100 btn btn-danger"> <FaDeleteLeft className='mx-1' /> <span>{t('Delete')}</span></button>
                            </div>
                            <h3 className="text-lg  font-semibold">{article.titles[i18n.language]}</h3>
                            <div className='text-center w-100'>
                                {article.images && article.images.map((image, index) => (
                                    <iframe key={index} style={{ maxWidth: "100%", maxHeight: '20vh',margin:'auto' }} src={image} alt={`Article ${index}`} />
                                ))}
                            </div>
                           
                        </div>
                    </ul>
                ))}
            </div>
        </div>
    );
};

export default AdminConcours;


