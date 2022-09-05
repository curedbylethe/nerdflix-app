import { Key } from "react";
import styles from "../styles/section-cards.module.css";
import Card from "./card";

interface sectionCards {
  title: string;
  videos: any;
  size: string;
}

const SectionCards: React.FC<sectionCards> = ({
  title,
  videos = [],
  size,
}): JSX.Element => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.cardWrapper}>
        {videos.map(
          (
            video: { id: Key | null | undefined; imgUrl: string },
            idx: number
          ) => {
            return (
              <Card key={video.id} id={idx} imgUrl={video.imgUrl} size={size} />
            );
          }
        )}
      </div>
    </section>
  );
};

export default SectionCards;
