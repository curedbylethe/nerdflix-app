import type { NextPage } from "next";
import Head from "next/head";
import Banner from "../components/banner";
import NavBar from "../components/navBar/navBar";
import SectionCards from "../components/section-cards";
import { getPopularVideos, getVideos } from "../lib/videos";
import styles from "../styles/Home.module.css";

export async function getServerSideProps() {
  const mathVideos = await getVideos("Math%20Tutorial");
  const physicsVideos = await getVideos("Interesting%20Physics");
  const chemVideos = await getVideos("Cool%20Chemistry%20Experiments");
  const csVideos = await getVideos("Programming%20Tutorial");
  const popularVideos = await getPopularVideos();
  return {
    props: { mathVideos, physicsVideos, chemVideos, csVideos, popularVideos },
  };
}

const Home = ({
  mathVideos,
  physicsVideos,
  chemVideos,
  csVideos,
  popularVideos,
}: {
  mathVideos: any;
  physicsVideos: any;
  chemVideos: any;
  csVideos: any;
  popularVideos: any;
}): JSX.Element => {
  return (
    <div className={styles.main}>
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
      <div className={styles.sectionWrapper}>
        <SectionCards title="Mathematics" videos={mathVideos} size="sm" />
        <SectionCards title="Physics" videos={physicsVideos} size="sm" />
        <SectionCards title="Chemistry" videos={chemVideos} size="sm" />
        <SectionCards title="Computer Science" videos={csVideos} size="sm" />
        <SectionCards
          title="What's Popular in Science Right Now"
          videos={popularVideos}
          size="sm"
        />
      </div>
    </div>
  );
};

export default Home;
