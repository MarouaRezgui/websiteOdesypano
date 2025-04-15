import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { FaFilePdf } from "react-icons/fa6";
import { Button, Modal } from "react-bootstrap";
import { FaRegFilePdf } from "react-icons/fa6";

function Publications() {
  const { t, i18n } = useTranslation();
  const db = getFirestore();
  const [offres, setOffres] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [pdfUrl, setPdfUrl] = useState("");
  const setCurrentPdf = (url) => {
    setPdfUrl(url);
    setShowModal(true);
  };
  useEffect(() => {
    const fetchOffres = async () => {
      const offresCollection = collection(db, "publications");
      const snapshot = await getDocs(offresCollection);
      const offresList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setOffres(offresList);
      console.log(offresList);
    };
    fetchOffres();
  }, [db]);

  const closeModal = () => {
    setSelectedPdf(null);
    setModalIsOpen(false);
  };

  return (
    <div
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
      className="block my-2 w-full max-w-[999px] p-6 bg-white border border-gray-200 rounded-lg shadow"
    >
      <Modal
        show={showModal}
        centered
        style={{
          top: "50% !important",
          transform: "translateX(-20%)",
        }}
        onHide={() => setShowModal(false)}
      >
        <iframe src={pdfUrl} width="900px" height="600px">
          {" "}
        </iframe>
      </Modal>
      <h5 className="text-center mb-2 text-2xl font-bold tracking-tight text-green-600 ">
        {t("Publications")}
      </h5>
      {offres.map((el) => (
        <div key={el.id} className="mb-4 flex  ">
          <div className="flex align-center">
            <h1 className="mt-4 text-xl font-semibold text-orange-600 text-capitalize">
              {el.titles[i18n.language].length > 0 &&
                "-" + el.titles[i18n.language]}
            </h1>
          </div>

          {el.titles[i18n.language].length > 0 &&
            el.images.map((pdf, index) => (
              <button
                className="mt-3 d-flex btn align-items-center"
                onClick={() => setCurrentPdf(pdf)}
              >
                <FaRegFilePdf size={25} color="red" className="mx-2" />
              </button>
            ))}
        </div>
      ))}

      {modalIsOpen && (
        <div className="fixed inset-0 z-50 overflow-auto bg-smoke-light flex">
          <div className="relative p-8 bg-white w-full max-w-4xl m-auto flex-col flex rounded-lg shadow-lg">
            <button
              className="mb-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 self-end"
              onClick={closeModal}
            >
              {t("fermer")}
            </button>
            {selectedPdf && (
              <iframe
                src={selectedPdf}
                className="w-full h-[500px]"
                title="PDF Viewer"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Publications;
