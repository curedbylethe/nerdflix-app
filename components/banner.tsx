import Head from "next/head";
import PropTypes from "prop-types";
import styles from "../styles/banner.module.css";

interface banner {
  title: string,
  subTitle: string,
  imgUrl?: string,
}
const Banner: React.FC<banner> = ({ title, subTitle, imgUrl }): JSX.Element => {
  return (
    <div className={styles.container}>
      <LeftWrapper title={title} subTitle={subTitle} />
      <div
        className={`bg-fixed ${styles.bannerImg}`}
        style={{
          backgroundImage: `url(${imgUrl}`,
        }}
      ></div>
    </div>
  );
}

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
};

const LeftWrapper: React.FC<banner> = ({ title, subTitle }): JSX.Element => {
  return (
    <div className={styles.leftWrapper}>
      <div className={styles.left}>
        <NSeries />
        <h3 className={styles.title}>{title}</h3>
        <h3 className={styles.subTitle}>{subTitle}</h3>{" "}
        <div className={styles.playBtnWrapper}>
          <button className="px-6 py-2 ml-4 text-white rounded bg-netflix-red">
            <span className="align-middle material-symbols-outlined">
              play_arrow
            </span>
            <span className="pl-1 text-lg font-semibold leading-7 text-center ">
              Play
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

const NSeries = () => {
  return (
    <div className={`bg-white ${styles.nseriesWrapper}`}>
      <span className="text-4xl font-bold leading-none text-transparent bg-gradient-to-r from-netflix-red bg-clip-text to-netflix-blue">
        N-
        <span className="text-sm text-transparent align-middle bg-gradient-to-r from-netflix-blue to-netflix-red bg-clip-text">
          S E R I E S
        </span>
      </span>
    </div>
  );
};

export default Banner;