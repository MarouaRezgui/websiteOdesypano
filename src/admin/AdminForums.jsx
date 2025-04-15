import React, { useState, useEffect } from "react";
import {
  getStorage,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  Timestamp,
} from "firebase/firestore";
import { storage } from "../firebase/config";
import { firestore } from "../firebase/config";
import { useTranslation } from "react-i18next";
import { FaEdit } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { Carousel as MyCarousel } from "react-bootstrap";

const AdminForums = () => {
  const [titles, setTitles] = useState({ en: "", fr: "", ar: "" });

  const [descriptions, setDescriptions] = useState({ en: "", fr: "", ar: "" });
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);
  const [editId, setEditId] = useState(null);
  const { t, i18n } = useTranslation();
  const [articles, setArticles] = useState([]);
  const [isPlaying, setIsPlaying] = useState(null);

  const db = getFirestore();

  useEffect(() => {
    const fetchArticles = async () => {
      const articlesCollection = collection(db, "forums");
      const snapshot = await getDocs(articlesCollection);
      const articlesList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setArticles(articlesList);
    };
    fetchArticles();
  }, []);

  const handleFileChange = (e) => {
    setFiles(Array.from(e.target.files));
  };

  const handleUpload = async () => {
    if (
      !titles.ar ||
      !descriptions.ar ||
      !titles.fr ||
      !descriptions.fr ||
      !titles.en ||
      !descriptions.en ||
      (files.length === 0 && !editId)
    ) {
      setError(t("Ce champ est obligatoire"));
      return;
    }

    setUploading(true);
    setError(null);

    try {
      let downloadURLs = [];
      if (files.length > 0) {
        const uploadPromises = files.map(async (file) => {
          const storageRef = ref(storage, `forums/${file.name}`);
          const uploadTask = uploadBytesResumable(storageRef, file);

          await uploadTask;

          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          return downloadURL;
        });

        downloadURLs = await Promise.all(uploadPromises);
      }

      if (editId) {
        const articleRef = doc(firestore, "forums", editId);
        await updateDoc(articleRef, {
          titles,
          descriptions,
          createdAt: Timestamp.now(),

          ...(files.length > 0 && { images: downloadURLs }),
        });

        setArticles(
          articles.map((article) =>
            article.id === editId
              ? {
                  ...article,
                  titles,
                  descriptions,
                  ...(files.length > 0 && { images: downloadURLs }),
                }
              : article
          )
        );
        setEditId(null);
      } else {
        const docRef = await addDoc(collection(firestore, "forums"), {
          titles,
          descriptions,
          images: downloadURLs,
          createdAt: Timestamp.now(),
        });

        setArticles([
          ...articles,
          { id: docRef.id, titles, descriptions, images: downloadURLs },
        ]);
      }

      setTitles("");
      setDescriptions("");
      setFiles([]);
    } catch (error) {
      console.error("Error uploading document: ", error);
      setError("An error occurred, please try again");
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "forums", id));
      setArticles(articles.filter((article) => article.id !== id));
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

  const handlePlay = (index) => {
    setIsPlaying(index);
    const video = document.getElementById(`video-${index}`);
    if (video) {
      video.play();
    }
  };

  const handlePause = (index) => {
    setIsPlaying(null);
    const video = document.getElementById(`video-${index}`);
    if (video) {
      video.pause();
    }
  };

  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-md">
      <h1 className="text-center mb-5">{t("Séminaires et forums")}</h1>
      <div className="flex justify-around col-12">
        <div className="flex flex-column">
          <h6>العربية</h6>

          <input
            type="text"
            placeholder={t("title")}
            value={titles.ar}
            onChange={(e) => setTitles({ ...titles, ar: e.target.value })}
            className="mb-2 px-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
          />
          <textarea
            placeholder={t("description")}
            value={descriptions.ar}
            onChange={(e) =>
              setDescriptions({ ...descriptions, ar: e.target.value })
            }
            className="mb-2 px-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>

        <div className="flex flex-column">
          <h6>English</h6>
          <input
            type="text"
            placeholder={t("title")}
            value={titles.fr}
            onChange={(e) => setTitles({ ...titles, fr: e.target.value })}
            className="mb-2 px-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
          />
          <textarea
            placeholder={t("description")}
            value={descriptions.fr}
            onChange={(e) =>
              setDescriptions({ ...descriptions, fr: e.target.value })
            }
            className="mb-2 px-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>

        <div className="flex flex-column">
          <h6>Français</h6>

          <input
            type="text"
            placeholder={t("title")}
            value={titles.en}
            onChange={(e) => setTitles({ ...titles, en: e.target.value })}
            className="mb-2 px-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
          />
          <textarea
            placeholder={t("description")}
            value={descriptions.en}
            onChange={(e) =>
              setDescriptions({ ...descriptions, en: e.target.value })
            }
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
        className={`px-4 py-2 rounded-md text-white ${
          uploading
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-green-500 hover:bg-green-600"
        }`}
      >
        {uploading ? t("Uploading") : t(editId ? t("Update") : t("Upload"))}
      </button>
      {error && <div className="text-red-500 mt-2">{error}</div>}
      <div className="mt-4 row" dir={i18n.language == "ar" ? "rtl" : "ltr"}>
        {articles.map((article) => (
          <ul key={article.id} className="col-6 text-center">
            <div className="flex  px-2 justify-around border border-grey shadow ) items-center border-b border-gray-200 ">
              <div className="text-center">
                <div className="col-6 mb-3 flex">
                  <button
                    onClick={() => handleEdit(article)}
                    className=" d-flex justify-around align-items-center mx-2 w-100  btn btn-primary"
                  >
                    {" "}
                    <FaEdit /> <span>{t("Edit")}</span>
                  </button>
                  <button
                    onClick={() => handleDelete(article.id)}
                    className=" d-flex justify-around align-items-center mx-2 w-100 btn btn-danger"
                  >
                    {" "}
                    <FaDeleteLeft /> <span>{t("Delete")}</span>
                  </button>
                </div>
                <h3 className="text-lg  font-semibold">
                  {article.titles[i18n.language]}
                </h3>
                <p className="text-sm text-gray-600">
                  {t("Created at")}:{" "}
                  {article.createdAt &&
                    new Date(article.createdAt.seconds * 1000).toLocaleString(
                      i18n.language
                    )}
                </p>
                <p>{article.descriptions[i18n.language]}</p>
                <MyCarousel style={{ backgroundColor: "white", width: "30vw" }}>
                  {article.images.map((el, index) => (
                    <MyCarousel.Item key={index} interval={5000}>
                      {el.includes(".mp4") ? (
                        <div className="relative">
                          <video
                            id={`video-${index}`}
                            className="d-block mx-auto w-100 object-fit-cover"
                            src={el}
                            controls
                            style={{ height: "35vh", width: "30vw" }}
                            onPause={() => handlePause(index)}
                          >
                            Your browser does not support the video tag.
                          </video>
                          {isPlaying !== index && (
                            <div
                              className="absolute inset-0 flex items-center justify-center cursor-pointer"
                              style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                              onClick={() => handlePlay(index)}
                            >
                              <svg
                                className="w-16 h-16 text-white"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M4.5 3.5a1 1 0 011.54-.84l10 6.5a1 1 0 010 1.68l-10 6.5A1 1 0 014.5 16.5V3.5z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                          )}
                        </div>
                      ) : (
                        <img
                          className="d-block mx-auto w-100 object-fit-cover"
                          src={el}
                          alt={`media-${index}`}
                          style={{ height: "35vh", width: "30vw" }}
                          à
                        />
                      )}
                      <MyCarousel.Caption></MyCarousel.Caption>
                    </MyCarousel.Item>
                  ))}
                </MyCarousel>
              </div>
            </div>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default AdminForums;
