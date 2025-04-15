import React, { useEffect, useState } from 'react';
import { getStorage, ref, listAll, getDownloadURL, uploadBytesResumable, deleteObject } from 'firebase/storage';
import { storage } from '../firebase/config';
import { useTranslation } from 'react-i18next';

const AdminHomeCarouselImages = () => {
    const [files, setFiles] = useState([]);
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState(null);
    const [imagesURLs, setImagesURLs] = useState([]);
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const fetchHomeImages = async () => {
            const listRef = ref(storage, 'home_carousel_images/');
            try {
                const res = await listAll(listRef);
                const urls = await Promise.all(res.items.map(itemRef => getDownloadURL(itemRef)));
                setImagesURLs(urls);
                console.log(urls)
            } catch (error) {
                setError(error);
            }
        };
        fetchHomeImages();
    }, []);

    const handleFileChange = (e) => {
        if (e.target.files) {
            setFiles(Array.from(e.target.files));
        }
    };

    const handleUpload = () => {
        if (files.length === 0) return;

        setUploading(true);
        setError(null);

        const uploadPromises = files.map(file => {
            const storageRef = ref(storage, `home_carousel_images/${file.name}`);
            const uploadTask = uploadBytesResumable(storageRef, file);

            return new Promise((resolve, reject) => {
                uploadTask.on(
                    'state_changed',
                    (snapshot) => { },
                    (error) => {
                        reject(error);
                    },
                    async () => {
                        try {
                            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                            resolve(downloadURL);
                        } catch (error) {
                            reject(error);
                        }
                    }
                );
            });
        });

        Promise.all(uploadPromises)
            .then(urls => {
                setImagesURLs(prevURLs => [...prevURLs, ...urls]);
                setUploading(false);
            })
            .catch(error => {
                setUploading(false);
                setError(error);
            });
    };

    const handleDelete = async (url) => {
        const fileRef = ref(storage, url);
        try {
            await deleteObject(fileRef);
            setImagesURLs((prevURLs) => prevURLs.filter((imageURL) => imageURL !== url));
        } catch (error) {
            setError(error);
        }
    };

    return (
        <div className="p-4 bg-gray-100 rounded-md shadow-md">
            <h1 className='text-center mb-4'>{t('home_carousel_images')}</h1>
            <input type="file" multiple accept="image/*" onChange={handleFileChange} className="mb-2" />
            <button
                onClick={handleUpload}
                disabled={uploading}
                className={`px-4 py-2 rounded-md text-white ${uploading ? 'bg-gray-300 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'}`}
            >
                {uploading ? t('Uploading') : t('Upload')}
            </button>
            {error && <div className="text-red-500 mt-2">{error.message}</div>}
            <div className="mt-4 row">
                {imagesURLs.map((url, index) => (
                    <div key={index} className="flex col-3 items-center mb-2">
                        <img src={url} style={{maxHeight:'10vh',maxWidth:'10vw'}} className="w-full h-auto" alt={`uploaded ${index}`} />
                        <button
                            onClick={() => handleDelete(url)}
                            className="mx-2 px-2 py-1 bg-red-500 text-white rounded"
                        >
                            {t('Delete')}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminHomeCarouselImages;