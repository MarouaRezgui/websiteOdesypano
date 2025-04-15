import React, { useState, useRef } from "react";
import { Container, Form, Button, Row } from "react-bootstrap";
import {
  PDFDownloadLink,
  PDFViewer,
  Document,
  Page,
  Text,
  StyleSheet,
  View,
  Image,
} from "@react-pdf/renderer";
import { Font } from "@react-pdf/renderer";

Font.register({
  family: "Amiri",
  src: "./Amiri-Regular.ttf",
  fontWeight: "normal",
});

import { useTranslation } from "react-i18next";

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
} from "firebase/firestore";
import { storage } from "../firebase/config";
import { firestore } from "../firebase/config";
import { ToastContainer, toast } from "react-toastify";
import { FaMailBulk, FaPrint } from "react-icons/fa";

function Ecitoyen() {
  const { t, i18n } = useTranslation();
  const form = useRef();
  // date demande
  const today = new Date();

  const year = today.getFullYear();
  const month = ("0" + (today.getMonth() + 1)).slice(-2);
  const day = ("0" + today.getDate()).slice(-2);

  const formattedDate = `${year}-${month}-${day}`;
  //****************************************************************** */
  const [subject, setSubject] = useState("");
  const [registrationCode, setRegistrationCode] = useState(
    Math.round(Math.random() * 1000000)
  );
  const [registrationDate, setRegistrationDate] = useState(formattedDate);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [serviceType, setServiceType] = useState(null);
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);
  const [editId, setEditId] = useState(null);
  const [description, setDescription] = useState("");
  const [articles, setArticles] = useState([]);

  const handleUpload = async () => {
    if (!subject || !firstName || !lastName || !email || !phoneNumber) {
      setError(t("Ce champ est obligatoire"));
      return;
    }

    setUploading(true);
    setError(null);

    try {
      let downloadURLs = [];
      if (files.length > 0) {
        const uploadPromises = files.map(async (file) => {
          const storageRef = ref(storage, `complains/${file.name}`);
          const uploadTask = uploadBytesResumable(storageRef, file);

          await uploadTask;

          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          return downloadURL;
        });

        downloadURLs = await Promise.all(uploadPromises);
      }

      const docRef = await addDoc(collection(firestore, "complains"), {
        subject,
        firstName,
        lastName,
        email,
        phoneNumber,
        images: downloadURLs,
        registrationCode,
        registrationDate,
      });

      setFiles([]);
    } catch (error) {
      console.error("Error uploading document: ", error);
      setError("An error occurred, please try again");
    } finally {
      setUploading(false);
      toast.success(t("done"));
    }
  };

  const handleFileChange = (e) => {
    setFiles(Array.from(e.target.files));
  };

  const styles = StyleSheet.create({
    banner: {
      marginBottom: "20px",
    },
    page: {
      padding: 30,
      backgroundColor: "#f6f6f6",
      fontFamily: "Helvetica",
      direction: i18n.language === "ar" ? "rtl" : "ltr",
    },
    section: {
      margin: 2,
      padding: 5,
      borderBottomWidth: 1,
      borderBottomColor: "#e6e6e6",
      borderBottomStyle: "solid",
      direction: i18n.language === "ar" ? "rtl" : "ltr",
    },
    header: {
      fontSize: 24,
      textAlign: "center",
      marginBottom: 20,
      color: "#333",
      fontFamily: i18n.language === "ar" ? "Amiri" : "Helvetica",
    },
    label: {
      fontSize: 14,
      marginBottom: 5,
      color: "#555",
      fontFamily: i18n.language === "ar" ? "Amiri" : "Helvetica",
      direction: i18n.language === "ar" ? "rtl" : "ltr",
    },
    value: {
      fontSize: 16,
      marginBottom: 10,
      color: "#000",
      fontFamily: i18n.language === "ar" ? "Amiri" : "Helvetica",
      direction: i18n.language === "ar" ? "rtl" : "ltr",
    },
  });

  const generatePDF = () => (
    <Document>
      <Page style={styles.page}>
        <Image src={`/img/banner_${i18n.language}.png`} />
        <Text style={styles.header}>{t("complaintForm")}</Text>
        <View style={styles.section}>
          <Text style={styles.label}>{t("registrationCode")}:</Text>
          <Text style={styles.value}>{registrationCode}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>{t("registrationDate")}:</Text>
          <Text style={styles.value}>{registrationDate}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>{t("firstName")}:</Text>
          <Text style={styles.value}>{firstName}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>{t("lastName")}:</Text>
          <Text style={styles.value}>{lastName}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>{t("email")}:</Text>
          <Text style={styles.value}>{email}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>{t("phoneNumber")}:</Text>
          <Text style={styles.value}>{phoneNumber}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>{t("subject")}:</Text>
          <Text style={styles.value}>{subject}</Text>
        </View>
      </Page>
    </Document>
  );

  const dir = i18n.language == "ar" ? "rtl" : "ltf";
  const handleSendDocument = (e) => {
    e.preventDefault();
    handleUpload();
  };

  return (
    <Container className="mb-3 mt-4 p-8 bg-green-500 rounded-lg " dir={dir}>
      <ToastContainer />
      <div className="d-flex justify-center">
        <h1 className="border-1 border-white text-white  rounded shadow p-4 w-50  text-center mb-5 text-2xl font-bold">
          {serviceType == null
            ? t("ecitoyen")
            : serviceType == "complaintForm"
            ? t("complaintForm")
            : serviceType == "demandeDocument"
            ? t("demande_document")
            : t("autre_services")}
        </h1>
      </div>
      <Form ref={form} onSubmit={handleSendDocument}>
        <Row>
          <Form.Group
            className="col-3 offset-3 font-bold text-white"
            controlId="registrationCode"
          >
            <Form.Label>{t("service_type")}</Form.Label>
            <Form.Control
              as="select"
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
              className="p-2 text-center border border-gray-300 rounded"
            >
              <option value="complaintForm">{t("complaintForm")}</option>
              <option value="demandeDocument">{t("demande_document")}</option>
              <option value="autreServices">{t("autre_services")}</option>
            </Form.Control>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group
            className="mb-3 text-white font-bold col-6"
            controlId="firstName"
          >
            <Form.Label>{t("firstName")}</Form.Label>
            <Form.Control
              type="text"
              placeholder={t("write") + " " + t("firstName")}
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="p-2 border border-gray-300 rounded"
            />
          </Form.Group>
          <Form.Group
            className=" text-white font-bold col-6"
            controlId="lastName"
          >
            <Form.Label>{t("lastName")}</Form.Label>
            <Form.Control
              type="text"
              placeholder={t("write") + " " + t("lastName")}
              name="lastName"
              value={lastName}
              onChange={(e) => setLastname(e.target.value)}
              required
              className="p-2 border border-gray-300 rounded"
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group
            className="mb-3 text-white font-bold col-6"
            controlId="email"
          >
            <Form.Label>{t("email")}</Form.Label>
            <Form.Control
              type="email"
              placeholder={t("write") + " " + t("email")}
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="p-2 border border-gray-300 rounded"
            />
          </Form.Group>
          <Form.Group
            className="mb-3 text-white font-bold col-6"
            controlId="phoneNumber"
          >
            <Form.Label>{t("phoneNumber")}</Form.Label>
            <Form.Control
              type="number"
              placeholder={t("write") + " " + t("phoneNumber")}
              name="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              className="p-2 border border-gray-300 rounded"
            />
          </Form.Group>
        </Row>
        <Form.Group className="mb-3 text-white font-bold" controlId="subject">
          <Form.Label>{t("document_service_type")}</Form.Label>
          <Form.Control
            type="text"
            placeholder={t("write") + " " + t("subject")}
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            className="p-2  border border-gray-300 rounded"
          />
        </Form.Group>
        {serviceType == "complaintForm" || serviceType == null ? (
          <>
            <Form.Group
              className="mb-3 text-white font-bold"
              controlId="subject"
            >
              <Form.Label>{t("description")}</Form.Label>
              <Form.Control
                type="text"
                placeholder={t("write") + " " + t("description")}
                name="subject"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                className="p-2 border border-gray-300 rounded"
              />
            </Form.Group>
            <Form.Group className="text-white font-bold" controlId="attachment">
              <Form.Label>{t("attachment")}</Form.Label>
              <br />
              <label
                for="fileInput"
                className="p-2 border border-gray-300 rounded text-white bg-dark"
              >
                {i18n.language == "ar"
                  ? "إختر الملفات "
                  : i18n.language == "en"
                  ? "choisir les fichiers"
                  : "choose files"}{" "}
              </label>
              <label for="fileInput" className="p-2 m-2 w-75 bg-light text-gray-500 border border-gray-300 rounded">
                
                {files.length == 0
                  ? i18n.language == "ar"
                    ? "لم يتم اختيار أي ملف"
                    : i18n.language == "en"
                    ? "Aucun fichier choisi"
                    : "No file selected"
                  : ""}{files.map(el => { return <li className="text-white">{ el.name }</li>})}
              </label>
              <Form.Control
                type="file"
                multiple
                id="fileInput"
                name="attachment"
                onChange={handleFileChange}
                className="p-2 border border-gray-300 rounded d-none"
              />
            </Form.Group>
          </>
        ) : null}
        <Row className="justify-end align-self-center mt-4">
          <button
            onClick={handleUpload}
            disabled={uploading}
            className={`col-2 flex align-items-center justify-content-around bg-primary hover:bg-green-700 text-white font-bold py-2 px-4 rounded`}
          >
            <FaMailBulk size={"3vh"} />{" "}
            {uploading ? t("Uploading") : t(editId ? t("Update") : t("send"))}
          </button>

          <PDFDownloadLink
            className="col-2  d-flex align-items-center justify-content-around mx-2  btn btn-success "
            document={generatePDF()}
            fileName="reclamation.pdf"
          >
            <FaPrint size={"3vh"} /> <span>{t("Imprimer")}</span>
          </PDFDownloadLink>
        </Row>
      </Form>
    </Container>
  );
}

export default Ecitoyen;
