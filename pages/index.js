import Head from "next/head";
import Buttons from "../components/Buttons";
import Header from "../components/Header";
import Header2 from "../components/Header2";
import Section1 from "../components/Section1";
// import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Gemc | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/rhino.svg" />
      </Head>
      <Header />
      <Section1 />
      <Buttons />

      {/* <Header2/> */}
    </div>
  );
}
