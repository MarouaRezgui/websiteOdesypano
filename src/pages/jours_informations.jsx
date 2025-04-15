import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { Carousel as MyCarousel } from "react-bootstrap";

function Jours_information() {
  const [joursFormation, setJoursFormation] = useState([]);
  const [isPlaying, setIsPlaying] = useState(null);

  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const db = getFirestore();

  useEffect(() => {
    const fetchArticles = async () => {
      const articlesCollection = collection(db, "jours_information");
      const snapshot = await getDocs(articlesCollection);
      const articlesList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      let invertedLanguage =
        i18n.language === "fr" ? "en" : i18n.language === "en" ? "fr" : "ar";

      setJoursFormation(
        articlesList
          .filter(
            (post) =>
              post.titles[invertedLanguage] &&
              post.descriptions[invertedLanguage]
          )
          .map((el) => ({
            ...el,
            title: el.titles[invertedLanguage],
            description: el.descriptions[invertedLanguage],
          }))
      );
      console.log(articlesList);
    };
    fetchArticles();
  }, [i18n.language]);

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
    <div>
      <h1 className="text-center text-green-800 m-3">
        {t("Journées d'information")}
      </h1>
      {joursFormation.length > 0 &&
        joursFormation.map((post, postIndex) => (
          <div
            dir="rtl"
            key={post.id}
            className="border p-2 mt-2 shadow d-flex px-4 flex-column align-items-center justify-content-center"
          >
            {/* <h4 className="text-center m2-4 mt-4 text-orange-600">
              {post.titles[i18n.language]}
            </h4>
            <div className="d-flex">
              <p className="postText">{post.descriptions[i18n.language]}</p>
            </div> */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <MyCarousel
                className=""
                style={{
                  backgroundColor: "white",
                  width: "50vw",
                  height: "60vh",
                }}
              >
                {post.images.map((el, imgIndex) => (
                  <MyCarousel.Item
                    key={`${post.id}-${imgIndex}`}
                    interval={5000}
                  >
                    {el.includes(".mp4") ? (
                      <div className="relative">
                        <video
                          id={`video-${post.id}-${imgIndex}`}
                          className="d-block mx-auto w-100 object-fit-cover"
                          src={el}
                          controls
                          style={{ height: "60vh", width: "60vw" }}
                          onPause={() => handlePause(post.id, imgIndex)}
                        >
                          Your browser does not support the video tag.
                        </video>
                        {isPlaying !== `${post.id}-${imgIndex}` && (
                          <div
                            className="absolute inset-0 flex items-center justify-center cursor-pointer"
                            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                            onClick={() => handlePlay(post.id, imgIndex)}
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
                        className="d-block mx-auto w-100 object-fit-contain"
                        src={el}
                        alt={`media-${post.id}-${imgIndex}`}
                        style={{ height: "60vh", width: "60vw" }}
                      />
                    )}
                    <MyCarousel.Caption></MyCarousel.Caption>
                  </MyCarousel.Item>
                ))}
              </MyCarousel>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Jours_information;
