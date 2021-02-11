import Head from "next/head";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import NavBar from "../../components/navBar";
import Footer from "../../components/footer";
import styles from "../../styles/Contact.module.scss";
import { useState } from "react";
import emailjs from "emailjs-com";
const API_KEYS = "AIzaSyBe_pZIcnKoz9Lxknnj2Fm09yLm6At-7RM";

const center = {
  lat: -3.3706968,
  lng: 36.6850069,
};
const containerStyle = {
  width: "100%",
  height: "400px",
};
const position = {
  lat: -3.3706968,
  lng: 36.6850069,
};

const onLoad = (marker) => {
  console.log("marker: ", marker);
};

export default function Contact() {
  const initialData = {
    fullname: "",
    email: "",
    message: "",
    subject: "",
  };
  const [input, setInput] = useState(initialData);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_zqho6ry", "cfx_69ngylf", e.target, "user_pLNr5Apvkvf8j1AiOVRRR")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  const { fullname, email, message, subject } = input;
  return (
    <>
      <Head>
        <meta name="description" content="Get in touch with us." />
        <title>CFX-contact us</title>
      </Head>
      <NavBar />
      <main className={styles.container}>
        <section className={styles.articles}>
          <LoadScript googleMapsApiKey={API_KEYS}>
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={17}
            >
              {/* Child components, such as markers, info windows, etc. */}
              <>
                <Marker onLoad={onLoad} position={position} />
              </>
            </GoogleMap>
          </LoadScript>
        </section>
        <section>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullname"
              id="name"
              placeholder="John Doe"
              value={fullname}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="johndoe@xyz.com"
              value={email}
              onChange={handleChange}
            />
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Greetings"
              value={subject}
              onChange={handleChange}
            />

            <textarea
              name="message"
              placeholder="Tell us what is in your mind......"
              id="message"
              cols={30}
              rows={10}
              value={message}
              onChange={handleChange}
            ></textarea>
            <input type="submit" value="send us" />
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}
