import Head from "next/head";
import { GoogleMap, LoadScript,Marker } from "@react-google-maps/api";
import NavBar from "../../components/navBar";
import Footer from "../../components/footer";
import styles from "../../styles/Contact.module.scss";

const API_KEYS = "AIzaSyBe_pZIcnKoz9Lxknnj2Fm09yLm6At-7RM";

const center = {
  lat: -6.815475,
  lng: 36.682995,
};
const containerStyle = {
  width: "100vh",
  height: "400px",
};
const position = {
  lat: -3.3706968,
  lng: 36.6850069,
}

// 3.3706968,36.6850069,

const onLoad = marker => {
  console.log('marker: ', marker)
}

export default function Contact() {
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
          <form className={styles.form_container}>
            <input type="text" name="name" id="name" placeholder="John Doe" />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="johndoe@xyz.com"
            />
            <textarea
              name="message"
              id="message"
              cols={30}
              rows={10}
              defaultValue="Tell us your thoughts here ....."
            ></textarea>
            <input type="submit" value="send us" />
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}
