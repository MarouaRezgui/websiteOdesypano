import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Carousel as MyCarousel } from "react-bootstrap";
import { getFirestore, collection, getDocs } from "firebase/firestore";

function Images() {
  const [selectedGroupe, setSelectedGroupe] = useState(null);
  const [imageList, setImageList] = useState([]);
  const [error, setError] = useState(null);

  const { t, i18n } = useTranslation();

  const db = getFirestore();

  const closeModal = () => {
    setSelectedGroupe(null);
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

  useEffect(() => {
    fetchImages();
  }, []);

  function Carousel() {
    return (
      <div className="flex flex-col justify-center items-center">
        {/* <MyCarousel className="w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2 h-48 md:h-72 lg:h-80"> */}
        <MyCarousel
                className=""
                style={{
                  backgroundColor: "white",
                  width: "30vw",
                  height: "30vh",
                }}
              >
          {selectedGroupe.map((element, index) => (
            <MyCarousel.Item key={index} interval={1500}>
              <img
                className="d-block mx-auto w-full h-30 object-cover"
                src={element}
                alt="ubl"
              />
              <MyCarousel.Caption></MyCarousel.Caption>
            </MyCarousel.Item>
          ))}
        </MyCarousel>
      </div>
    );
  }

  const extractNumber = (title) => {
    const match = title.match(/\d+/);
    return match ? parseInt(match[0], 10) : 0;
  };

  const sortedImageList = [...imageList].sort((a, b) => {
    const numA = extractNumber(a.titles[i18n.language]);
    const numB = extractNumber(b.titles[i18n.language]);
    return numA - numB;
  });

  return (
    <div
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-center text-2xl text-orange-600 font-bold mb-4">
        {t("Gallerie d'images")}
      </h1>
      <div>
        <ul>
          {sortedImageList.map(({ id, urls, titles }) => (
            <div key={id} className="relative mb-3">
              {titles[i18n.language].length > 0 && (
                <button onClick={() => setSelectedGroupe(urls)}>
                  <li>
                    <h5 className="text-lg text-gray-700">
                      {titles[i18n.language].includes("*")
                        ? titles[i18n.language]
                        : "* " + titles[i18n.language]}
                    </h5>
                  </li>
                </button>
              )}
            </div>
          ))}
        </ul>
      </div>

      {selectedGroupe != null && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
          onClick={closeModal}
        >
          <button
            className="absolute top-5 right-4 text-white text-2xl font-bold"
            onClick={closeModal}
          >
            X
          </button>
          <div
            className="relative w-full md:w-4/5 lg:w-3/4 xl:w-2/3 p-4  rounded-md"
            onClick={(e) => e.stopPropagation()}
          >
            <Carousel />
          </div>
        </div>
      )}
    </div>
  );
}

export default Images;
