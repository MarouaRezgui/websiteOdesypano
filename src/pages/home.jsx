import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  MdOutlineArrowBack,
  MdOutlineArrowDownward,
  MdOutlineArrowForward,
  MdOutlineArrowUpward,
} from "react-icons/md";
import Slider from "react-slick";
import { Link, useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoMdEye } from "react-icons/io";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const CustomPrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={`${className} custom-arrow`} onClick={onClick}>
      <MdOutlineArrowBack size={35} />
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={`${className} custom-arrow`} onClick={onClick}>
      <MdOutlineArrowForward size={35} />
    </div>
  );
};

const CustomPrevVertArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={`${className} custom-arrow`} onClick={onClick}>
      <MdOutlineArrowUpward size={35} />
    </div>
  );
};

const CustomNextVertArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={`${className} custom-arrow`} onClick={onClick}>
      <MdOutlineArrowDownward size={35} />
    </div>
  );
};

function Home() {
  const [display, setDisplay] = useState(false);
  const [news, setNews] = useState([]);
  const [forums, setForums] = useState([]);
  const [isPlaying, setIsPlaying] = useState(null);

  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const db = getFirestore();

  useEffect(() => {
    const fetchArticles = async () => {
      const articlesCollection = collection(db, "news");
      const snapshot = await getDocs(articlesCollection);
      const articlesList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNews(articlesList);
    };

    const fetchForums = async () => {
      const forumsCollection = collection(db, "forums");
      const snapshot = await getDocs(forumsCollection);
      const forumsList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setForums(forumsList);
    };

    fetchArticles();
    fetchForums();
  }, [db]);

  useEffect(() => {
    const hasShownAnimation = localStorage.getItem("hasShownAnimation");
    if (!hasShownAnimation) {
      setDisplay(true);
      localStorage.setItem("hasShownAnimation", "true");
    } else {
      setDisplay(false);
    }

    const timer = setTimeout(() => {
      setDisplay(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomNextArrow />,
    nextArrow: <CustomPrevArrow />,
  };

  const verticalSettings = {
    dots: true,
    speed: 1500,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomPrevVertArrow />,
    nextArrow: <CustomNextVertArrow />,
  };

  const handlePlayPause = (index) => {
    const video = document.getElementById(`video-${index}`);
    if (isPlaying === index) {
      video.pause();
      setIsPlaying(null);
    } else {
      if (isPlaying !== null) {
        const playingVideo = document.getElementById(`video-${isPlaying}`);
        if (playingVideo) {
          playingVideo.pause();
        }
      }
      video.play();
      setIsPlaying(index);
    }
  };

  return (
    <React.Fragment>
      <div
        dir={"rtl"}
        className="container mb-3 mt-2 grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <div
          dir={i18n.language === "ar" ? "rtl" : "ltr"}
          className="card pt-4 shadow pb-5"
        >
          <Link
            to="/all-news-page"
            state={news}
            className="flex items-center text-decoration-none"
          >
            <h6 className="text-orange-600 mx-2">{t("more")}</h6>
            <IoMdEye color="#EA5B0C" />
          </Link>
          <div className="flex mb-4 items-center justify-center">
            <h2 className="text-orange-600 underline text-2xl font-semibold mb-4">
              {t("actualites")}
            </h2>
          </div>
          <Slider {...settings}>
            {news.length > 0 &&
              news.map((post, index) => (
                <div
                  key={post.id || index}
                  className="d-flex mt-3 px-3 h-100 flex-col items-center justify-center"
                >
                  <h6 className="text-center mb-4 text-green-800">
                    {post.titles[i18n.language]}
                  </h6>

                  {post.images[0].includes(".mp4") ? (
                    <div className="relative">
                      <video
                        id={`video-${index}`}
                        className="mx-auto w-full object-cover"
                        src={post.images[0]}
                        style={{ height: "20vh", width: "100%" }}
                        onClick={() => handlePlayPause(index)}
                        controls={true}
                      >
                        Your browser does not support the video tag.
                      </video>
                      <div
                        dir={i18n.language == "ar" ? "rtl" : "ltr"}
                        className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white text-sm px-2 py-1 rounded"
                      >
                        {post.createdAt &&
                          new Date(
                            post.createdAt.seconds * 1000
                          ).toLocaleString(i18n.language)}
                      </div>
                      {isPlaying !== index && (
                        <div
                          className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black bg-opacity-50"
                          onClick={() => handlePlayPause(index)}
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
                    <div className="relative">
                      <img
                        className=" w-full object-cover"
                        src={post.images[0]}
                        alt={`media-${index}`}
                        style={{ height: "20vh" }}
                      />
                      <div
                        dir={i18n.language == "ar" ? "rtl" : "ltr"}
                        className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white text-sm px-2 py-1 rounded"
                      >
                        {post.createdAt &&
                          new Date(
                            post.createdAt.seconds * 1000
                          ).toLocaleString(i18n.language)}
                      </div>
                    </div>
                  )}
                  <span
                    dir={i18n.language === "ar" ? "rtl" : "ltr"}
                    className="postText"
                  >
                    {post.descriptions[i18n.language]
                      .split(" ")
                      .slice(0, 7)
                      .join(" ")}{" "}
                    ...
                  </span>
                  <Link to="/news-page" state={post}>
                    <button className="mt-3 px-3 bg-orange-600 p-2 rounded text-white">
                      {t("إقرأ المزيد")}
                    </button>
                  </Link>
                </div>
              ))}
          </Slider>
        </div>
        <div
          dir={i18n.language === "ar" ? "rtl" : "ltr"}
          className="card pt-4 shadow pb-5"
        >
          <Link
            to="/all-forums-page"
            state={forums}
            className="flex items-center text-decoration-none"
          >
            <h6 className="text-orange-600 mx-2">{t("more")}</h6>
            <IoMdEye color="#EA5B0C" />
          </Link>
          <div className="flex mb-4 items-center justify-center">
            <h2 className="text-orange-600 underline text-2xl font-semibold mb-4">
              {t("Séminaires et forums")}
            </h2>
          </div>
          <Slider {...verticalSettings}>
            {forums.length > 0 &&
              forums.map((post, index) => (
                <div
                  key={post.id || index}
                  className="d-flex mt-3 px-3 h-100 flex-col items-center justify-center"
                >
                  <h6 className="text-center mb-4 text-green-800">
                    {post.titles[i18n.language]}
                  </h6>

                  {post.images[0].includes(".mp4") ? (
                    <div className="relative">
                      <video
                        id={`video-${index}`}
                        className="mx-auto w-full object-cover"
                        src={post.images[0]}
                        style={{ height: "20vh", width: "100%" }}
                        onClick={() => handlePlayPause(index)}
                        controls={true}
                      >
                        Your browser does not support the video tag.
                      </video>
                      <div
                        dir={i18n.language == "ar" ? "rtl" : "ltr"}
                        className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white text-sm px-2 py-1 rounded"
                      >
                       {post.createdAt &&
                          new Date(
                            post.createdAt.seconds * 1000
                          ).toLocaleString(i18n.language)}
                      </div>
                      {isPlaying !== index && (
                        <div
                          className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black bg-opacity-50"
                          onClick={() => handlePlayPause(index)}
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
                    <div className="relative">
                      <img
                        className=" w-full object-cover"
                        src={post.images[0]}
                        alt={`media-${index}`}
                        style={{ height: "20vh" }}
                      />
                      <div
                        dir={i18n.language == "ar" ? "rtl" : "ltr"}
                        className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white text-sm px-2 py-1 rounded"
                      >
                        {post.createdAt &&
                          new Date(
                            post.createdAt.seconds * 1000
                          ).toLocaleString(i18n.language)}
                      </div>
                    </div>
                  )}
                  <span
                    dir={i18n.language === "ar" ? "rtl" : "ltr"}
                    className="postText"
                  >
                    {post.descriptions[i18n.language]
                      .split(" ")
                      .slice(0, 7)
                      .join(" ")}{" "}
                    ...
                  </span>
                  <Link to="/news-page" state={post}>
                    <button className="mt-3 px-3 bg-orange-600 p-2 rounded text-white">
                      {t("إقرأ المزيد")}
                    </button>
                  </Link>
                </div>
              ))}
          </Slider>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
