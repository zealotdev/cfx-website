import Head from 'next/head';
import NavBar from '../../components/navBar';
import Footer from '../../components/footer';

export default function () {
  return (
    <>
      <Head>
        <meta name="description" content="Get in touch with us." />
        <title>CFX-contact us</title>
      </Head>
      <main>
        <NavBar />
        <section>
          <h2>We Would Love To Hear From You.</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            fugiat repellat voluptatem a distinctio non voluptate, alias
            repudiandae!
          </p>
        </section>
        <section>
          <form>
            <input type="text" name="name" id="name" />
            <input type="email" name="email" id="email" />
            <textarea name="message" id="message" cols={30} rows={10}>
              Tell us your thoughts here .....
            </textarea>
            <input type="submit" value="send us" />
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}
