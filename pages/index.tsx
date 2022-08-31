import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Banner from "../components/banner";
import Card from "../components/card";
import NavBar from "../components/navBar";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>NERDFLIX</title>
        <meta
          name="description"
          content="Browse and watch your favorite YouTube tutorials on mathematics, chemistry, physics and computer science."
        />
      </Head>
      <NavBar userName="curedbylethe" />
      <Banner
        title="Clifford the Big Red Dog"
        subTitle="A very cute dog"
        imgUrl="https://media.vanityfair.com/photos/60db6cbbba7beb43db9b1b29/3:2/w_1998,h_1332,c_limit/clifford-the-big-red-dog-film-still-01.jpg"
      />
      <Card
        imgUrl="https://media.vanityfair.com/photos/60db6cbbba7beb43db9b1b29/3:2/w_1998,h_1332,c_limit/clifford-the-big-red-dog-film-still-01.jpg"
        size="lg"
      />
      <Card
        imgUrl="https://media.vanityfair.com/photos/60db6cbbba7beb43db9b1b29/3:2/w_1998,h_1332,c_limit/clifford-the-big-red-dog-film-still-01.jpg"
        size="md"
      />
      <Card
        imgUrl="https://media.vanityfair.com/photos/60db6cbbba7beb43db9b1b29/3:2/w_1998,h_1332,c_limit/clifford-the-big-red-dog-film-still-01.jpg"
        size="sm"
      />
    </div>
  );
};

export default Home;
