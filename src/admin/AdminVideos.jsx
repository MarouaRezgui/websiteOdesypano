import React, { useState, useEffect } from 'react';
import { getStorage, getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { storage } from '../firebase/config';
import { firestore } from '../firebase/config';
import { useTranslation } from 'react-i18next';
import { FaEdit } from 'react-icons/fa';
import { FaDeleteLeft } from 'react-icons/fa6';

const AdminVideos = () => {
  const [titles, setTitles] = useState({ en: '', fr: '', ar: '' });
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);
  const [editId, setEditId] = useState(null);
  const { t, i18n } = useTranslation();
  const [videos, setVideos] = useState([]);
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
    const fetchVideos = async () => {
      const videosCollection = collection(db, 'videos');
      const snapshot = await getDocs(videosCollection);
      const videosList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setVideos(videosList);
      console.log(videosList)
    };
    fetchVideos();
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
          const storageRef = ref(storage, `videos/${file.name}`);
          const uploadTask = uploadBytesResumable(storageRef, file);
          await uploadTask;
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          return downloadURL;
        });

        downloadURLs = await Promise.all(uploadPromises);
      }

      if (editId) {
        const articleRef = doc(firestore, 'videos', editId);
        await updateDoc(articleRef, {
          titles,
          ...(files.length > 0 && { images: downloadURLs })
        });

        setVideos(articles.map(article => article.id === editId ? { ...article, titles, ...(files.length > 0 && { images: downloadURLs }) } : article));
        setEditId(null);
      } else {
        const docRef = await addDoc(collection(firestore, 'videos'), {
          titles,
          images: downloadURLs
        });

        setVideos([...articles, { id: docRef.id, titles, images: downloadURLs }]);
      }

      setTitles('');
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
      await deleteDoc(doc(db, 'videos', id));
      setVideos(articles.filter(article => article.id !== id));
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
      <h1 className='text-center mb-5'>{t("Vidéos")}</h1>
      <div className='flex flex-col md:flex-row justify-around'>
        <div className='flex flex-col mb-4 md:mb-0'>
          <h6>العربية</h6>
          <input
            type="text"
            placeholder={t('title')}
            value={titles.ar}
            onChange={(e) => setTitles({ ...titles, ar: e.target.value })}
            className="mb-2 px-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className='flex flex-col mb-4 md:mb-0'>
          <h6>English</h6>
          <input
            type="text"
            placeholder={t('title')}
            value={titles.fr}
            onChange={(e) => setTitles({ ...titles, fr: e.target.value })}
            className="mb-2 px-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className='flex flex-col'>
          <h6>Français</h6>
          <input
            type="text"
            placeholder={t('title')}
            value={titles.en}
            onChange={(e) => setTitles({ ...titles, en: e.target.value })}
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
        className={`px-4 py-2 rounded-md text-white w-full md:w-auto ${uploading ? 'bg-gray-300 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'}`}
      >
        {uploading ? t('Uploading') : editId ? t('Update') : t('Upload')}
      </button>
      {error && <div className="text-red-500 mt-2">{error}</div>}
      <div className="mt-4 flex flex-wrap -mx-2" dir={i18n.language === "ar" ? "rtl" : "ltr"}>
        {videos.map(article => (
          <div key={article.id} className='w-full md:w-1/2 px-2 mb-4'>
            <div className="flex flex-col justify-around border border-gray-300 shadow p-4 items-center">
              <div className='w-full mb-3 flex justify-around'>
                <button onClick={() => handleEdit(article)} className="d-flex col-4 justify-content-center align-items-center mx-2 px-4 py-2 w-full btn btn-primary">
                  <FaEdit /><span className="ml-2 mx-2">{t('Edit')}</span>
                </button>
                <button onClick={() => handleDelete(article.id)} className="d-flex  col-4 justify-center items-center mx-2 px-4 py-2 w-full btn btn-danger">
                  <FaDeleteLeft /><span className="ml-2 mx-2">{t('Delete')}</span>
                </button>
              </div>
              <h2 className="text-lg font-semibold">{article.titles[i18n.language]}</h2>
              <div className='text-center'>
                {article.images && article.images.map((image, index) => (
                  <div key={index} className='relative mt-4'>
                   
                      <video src={image} className="w-full h-40 md:h-64" />
                   
                   
                  </div>
                ))}
               
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminVideos;
