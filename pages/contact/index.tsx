import Head from 'next/head';
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';
import NavBar from '../../components/navBar';
import Footer from '../../components/footer';
import styles from '../../styles/Contact.module.scss';
import { useState } from 'react';
import emailjs from 'emailjs-com';
const API_KEYS = 'AIzaSyBe_pZIcnKoz9Lxknnj2Fm09yLm6At-7RM';

const center = {
  lat: -3.370764,
  lng: 36.68609999,
};

const containerStyle = {
  width: '100%',
  height: '100%',
};
const position = {
  lat: -3.370764,
  lng: 36.68609999,
};

const divStyle = {
  background: `white`,
  border: `1px solid #ccc`,
  padding: 15,
};

const onLoad = (marker) => {
  console.log('marker: ', marker);
};

export default function Contact() {
  const initialData = {
    fullname: '',
    email: '',
    message: '',
    subject: '',
  };

  const [infoWindow, setInfoWindow] = useState('');

  const [input, setInput] = useState(initialData);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_zqho6ry',
        'cfx_69ngylf',
        e.target,
        'user_pLNr5Apvkvf8j1AiOVRRR'
      )
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
        <section className={styles.map}>
          <LoadScript googleMapsApiKey={API_KEYS}>
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={17}
            >
              {/* Child components, such as markers, info windows, etc. */}
              <>
                <Marker onLoad={onLoad} position={position} />
                {/* <InfoWindow onLoad={onLoad} position={position}>
                  <div style={divStyle}>
                    <h1>InfoWindow</h1>
                  </div>
                </InfoWindow> */}
              </>
            </GoogleMap>
          </LoadScript>
        </section>
        <span className={styles.separator}></span>
        <section>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullname"
              id="name"
              placeholder="John Doe"
              value={fullname}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="johndoe@xyz.com"
              value={email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Greetings"
              value={subject}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Tell us what is in your mind......"
              id="message"
              cols={30}
              rows={10}
              value={message}
              onChange={handleChange}
              required
            ></textarea>
            <input type="submit" value="send us" />
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}
