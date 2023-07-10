import Head from "next/head";
import Nav from "../components/nav";
import Header from "../components/header";
import Benefits from "../components/benefits";
import Features from "../components/features";
import Planned from "../components/planned";
import Demo from "../components/demo";
import Footer from "../components/footer";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ИнструментЦентр</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav></Nav>
      <Header></Header>
      <Benefits></Benefits>
      <Features></Features>
      <Planned></Planned>
      <Demo></Demo>
      <Footer></Footer>
    </div>
  );
}
