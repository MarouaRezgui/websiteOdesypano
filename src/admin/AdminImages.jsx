import React, { useEffect, useState } from "react";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { storage } from "../firebase/config";
import { useTranslation } from "react-i18next";

const AdminImages = () => {
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);
  const [imageList, setImageList] = useState([]);
  const [titles, setTitles] = useState({ en: "", fr: "", ar: "" });
  const [editMode, setEditMode] = useState(false);
  const [editData, setEditData] = useState(null);
  const { t, i18n } = useTranslation();
  const db = getFirestore();

  const handleFileChange = (e) => {
    setFiles([...files, ...e.target.files]); // Append new files to existing ones
  };

  const handleTitleChange = (e) => {
    const { name, value } = e.target;
    setTitles({ ...titles, [name]: value });
  };

  const handleUpload = async () => {
    if (!files.length) return;

    setUploading(true);
    setError(null);

    try {
      const uploadedImages = await Promise.all(
        files.map(async (file) => {
          const storageRef = ref(storage, `images/${file.name}`);
          const uploadTask = uploadBytesResumable(storageRef, file);

          await new Promise((resolve, reject) => {
            uploadTask.on(
              "state_changed",
              null,
              (error) => reject(error),
              () => resolve()
            );
          });

          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          return downloadURL;
        })
      );

      await addDoc(collection(db, "images"), {
        urls: uploadedImages,
        titles,
      });

      setFiles([]);
      setTitles({ en: "", fr: "", ar: "" });
      fetchImages();
    } catch (error) {
      setError(error);
    } finally {
      setUploading(false);
    }
  };

  const fetchImages = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "images"));
      const images = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setImageList(images);
    } catch (error) {
      setError(error);
    }
  };

  const handleDeleteGroup = async (id, urls) => {
    try {
      await Promise.all(
        urls.map(async (url) => {
          const storageRef = ref(storage, url);
          await deleteObject(storageRef);
        })
      );
      await deleteDoc(doc(db, "images", id));
      fetchImages();
    } catch (error) {
      setError(error);
    }
  };

  const handleEdit = (image) => {
    setEditData(image);
    setTitles(image.titles);
    setFiles(image.urls.map((url) => ({ url })));
    setEditMode(true);
  };

  const handleEditSubmit = async () => {
    try {
      const docRef = doc(db, "images", editData.id);

      const newUrls = await Promise.all(
        files.map(async (file) => {
          if (file.url) return file.url; // Skip existing URLs
          const storageRef = ref(storage, `images/${file.name}`);
          const uploadTask = uploadBytesResumable(storageRef, file);

          await new Promise((resolve, reject) => {
            uploadTask.on(
              "state_changed",
              null,
              (error) => reject(error),
              () => resolve()
            );
          });

          return await getDownloadURL(uploadTask.snapshot.ref);
        })
      );

      await updateDoc(docRef, {
        titles,
        urls: newUrls,
      });

      setEditData(null);
      setEditMode(false);
      setFiles([]);
      setTitles({ en: "", fr: "", ar: "" });
      fetchImages();
    } catch (error) {
      setError(error);
    }
  };

  const handleDeleteSingleImage = async (url) => {
    setFiles(files.filter((file) => file.url !== url));
    await deleteObject(ref(storage, url));
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-md">
      <h1 className="text-center mb-4">{t("Images Management")}</h1>
      <div className="flex align-center justify-around">
        <input
          type="file"
          multiple
          onChange={handleFileChange}
          className="mb-2"
        />

        <div>
          <input
            type="text"
            name="en"
            placeholder="Title (English)"
            value={titles.en}
            onChange={handleTitleChange}
            className="mb-2"
          />
          <br/>
          <input
            type="text"
            name="fr"
            placeholder="Title (French)"
            value={titles.fr}
            onChange={handleTitleChange}
            className="mb-2"
          />
          <br/>
          <input
            type="text"
            name="ar"
            placeholder="Title (Arabic)"
            value={titles.ar}
            onChange={handleTitleChange}
            className="mb-2"
          />
        </div>

        {editMode ? (
          <button
            onClick={handleEditSubmit}
            disabled={uploading}
            className={`px-4 py-2 rounded-md text-white ${
              uploading ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500"
            }`}
          >
            {t("Save")}
          </button>
        ) : (
          <button
            onClick={handleUpload}
            disabled={uploading}
            className={`px-4 py-2 rounded-md text-white ${
              uploading ? "bg-gray-300 cursor-not-allowed" : "bg-green-500"
            }`}
          >
            {uploading ? t("Uploading") : t("Upload")}
          </button>
        )}
      </div>

      {editMode && (
        <div className="mt-4 flex row border-1 border-black mt-3">
          {files.map((file, index) => (
            <div key={index} className="col-2 flex relative mb-2">
              <button
                onClick={() => handleDeleteSingleImage(file.url)}
                className="px-1 m-1 bg-red-500 text-white rounded-full"
              >
                &times;
              </button>
              <img
                src={file.url || URL.createObjectURL(file)}
                alt={`uploaded ${index}`}
                className="w-20 h-auto rounded-md shadow-md"
              />
            </div>
          ))}
        </div>
      )}

      {error && <div className="text-red-500 mt-2">{error.message}</div>}

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {imageList.map(({ id, urls, titles }) => (
          <div key={id} className="relative border-1 border-grey">
            <div className="flex justify-content-around mb-2">
              <button
                onClick={() => handleEdit({ id, urls, titles })}
                className="absolute p-1 top-0 right-10 bg-blue-500 text-white rounded-full"
              >
                ✎
              </button>
              <button
                onClick={() => handleDeleteGroup(id, urls)}
                className="absolute p-1 top-0 right-0 bg-red-500 text-white rounded-full"
              >
                &times;
              </button>
            </div>
            <h6>{titles[i18n.language]}</h6>
            <div className="row ">
              {urls.map((url, index) => (
                <img
                  key={index}
                  src={url}
                  alt={`uploaded ${index}`}
                  className="col-4 w-50 mb-2 h-auto rounded-md shadow-md"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminImages;