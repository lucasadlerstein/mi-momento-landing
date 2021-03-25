import Head from 'next/head';
import Link from "next/link";
import Navegacion from '../components/Navegacion';
import Banner from '../components/Banner';
import Video from '../components/Video';
import Mom from '../components/Mom';
import ConsultasIndividuales from '../components/ConsultasIndividuales';
import Talleres from '../components/Talleres';
import ComoLoHacemos from '../components/ComoLoHacemos';
import FranjaSegura from '../components/FranjaSegura';
import Contacto from '../components/Contacto';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <title>Mi Momento - Espacio para mujeres</title>
        <meta name="description" content="Mi Momento es un espacio de mujeres para mujeres. Talleres, charlas y más." />
        <meta name="keywords" content="Mi Momento, Espacio para mujeres, Sandra Giser, Kinesiologia, Piso Pelvico, Mujeres, RPG, SGA, buenos aires" />
        <link href="https://fonts.googleapis.com/css2?family=Oregano:ital@0;1&display=swap" rel="stylesheet" />
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

        <link
            rel="preload"
            href="/fonts/GlacialIndifference-Bold.otf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/GlacialIndifference-Regular.otf"
            as="font"
            crossOrigin=""
          />
      </Head>

      <Navegacion />
      <Banner />
      <Video />
      <Mom />
      <ConsultasIndividuales />
      <Talleres
        // talleres={talleres}
      />
      <ComoLoHacemos />
      <FranjaSegura />
      <Contacto />
      <Footer />
    </>
  )
}
