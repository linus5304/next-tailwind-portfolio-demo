import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Analytics } from "../components/Analytics";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Margelo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>
      <Hero/>
      <Analytics/>

    </div>
  );
};

export default Home;
