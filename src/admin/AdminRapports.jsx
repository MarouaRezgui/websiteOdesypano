import React, { useState, useEffect } from 'react';
import { getStorage, getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { storage } from '../firebase/config';
import { firestore } from '../firebase/config';
import { useTranslation } from 'react-i18next';
import { FaEdit } from 'react-icons/fa';
import { FaDeleteLeft } from 'react-icons/fa6';

const AdminRapports = () => {

    const [titles, setTitles] = useState({ en: '', fr: '', ar: '' });
    const [files, setFiles] = useState([]);
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState(null);
    const [editId, setEditId] = useState(null);
    const { t, i18n } = useTranslation();
    const [articles, setArticles] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const db = getFirestore();

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
            const articlesCollection = collection(db, 'rapports');
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
                    const storageRef = ref(storage, `rapports/${file.name}`);
                    const uploadTask = uploadBytesResumable(storageRef, file);
                    await uploadTask;
                    const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                    return downloadURL;
                });

                downloadURLs = await Promise.all(uploadPromises);
            }

            if (editId) {
                const articleRef = doc(firestore, 'rapports', editId);
                await updateDoc(articleRef, {
                    titles,
                    ...(files.length > 0 && { images: downloadURLs })
                });

                setArticles(articles.map(article => article.id === editId ? { ...article, titles, ...(files.length > 0 && { images: downloadURLs }) } : article));
                setEditId(null);
            } else {
                const docRef = await addDoc(collection(firestore, 'rapports'), {
                    titles,
                    images: downloadURLs
                });

                setArticles([...articles, { id: docRef.id, titles, images: downloadURLs }]);
            }

            setTitles({ en: '', fr: '', ar: '' });
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
            await deleteDoc(doc(db, 'rapports', id));
            setArticles(articles.filter(article => article.id !== id));
        } catch (error) {
            setError(error.message);
        }
    };

    const handleEdit = (article) => {
        setTitles(article.titles);
        setFiles([]);
        setEditId(article.id);
    };

    return (
        <div className="p-4 bg-gray-100 rounded-md shadow-md">
            <h1 className="text-center mb-5">{t("Rapports")}</h1>
            <div className="flex flex-wrap justify-around col-12">
                <div className="flex col-3 align-items-center m-2 w-full md:w-1/3">
                    <h6>العربية</h6>
                    <input
                        type="text"
                        placeholder={t('title')}
                        value={titles.ar}
                        onChange={(e) => setTitles({ ...titles, ar: e.target.value })}
                        className="mb-2 px-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="flex col-3 align-items-center m-2 w-full md:w-1/3">
                    <h6>English</h6>
                    <input
                        type="text"
                        placeholder={t('title')}
                        value={titles.en}
                        onChange={(e) => setTitles({ ...titles, en: e.target.value })}
                        className="mb-2 px-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="flex col-3 align-items-center m-2 w-full md:w-1/3">
                    <h6>Français</h6>
                    <input
                        type="text"
                        placeholder={t('title')}
                        value={titles.fr}
                        onChange={(e) => setTitles({ ...titles, fr: e.target.value })}
                        className="mb-2 px-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
                    />
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
                {uploading ? t('Uploading') : editId ? t('Update') : t('Upload')}
            </button>
            {error && <div className="text-red-500 mt-2">{error}</div>}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {articles.map(article => (
                    <div key={article.id} className="bg-white p-4 rounded-md shadow-md">
                        <div className="mb-3 flex justify-between items-center">
                            <button onClick={() => handleEdit(article)}
                                className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                                <FaEdit className="mr-2" />
                                {t('Edit')}
                            </button>
                            <button onClick={() => handleDelete(article.id)} className="flex items-center px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
                                <FaDeleteLeft className="mr-2" />
                                {t('Delete')}
                            </button>
                        </div>
                        <div className="border border-gray-200 shadow p-2">
                            <h3 className="text-lg text-center font-semibold">{article.titles[i18n.language]}</h3>
                            <div className="mt-4">
                                {article.images && article.images.map((image, index) => (
                                    <div key={index} className="relative mt-4">
                                        {image.includes("pdf") ? (
                                            <iframe src={image} className="w-full h-40 md:h-64" />
                                        ) : (
                                            <img src={image} className="w-full h-40 md:h-64 object-cover" alt={`Article ${index}`} />
                                        )}
                                        <div
                                            className="absolute top-0 right-0 mt-2 p-2 bg-blue-400 text-white rounded cursor-pointer"
                                            onClick={() => openModal(image.includes("pdf") ? <iframe src={image} width="800px" height="600px" /> : <img src={image} className="w-full h-full object-cover" alt={`Article ${index}`} />)}
                                        >
                                            🔍
                                        </div>
                                    </div>
                                ))}
                                {isModalOpen && (
                                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50" onClick={closeModal}>
                                        <button className="absolute top-4 right-4 text-white text-2xl font-bold" onClick={closeModal}>X</button>
                                        <div className="relative w-full h-100 md:w-4/5 lg:w-3/4 xl:w-2/3 p-4 bg-white rounded-md" onClick={e => e.stopPropagation()}>
                                            {modalContent}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminRapports;
