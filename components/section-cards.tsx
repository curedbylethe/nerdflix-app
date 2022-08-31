import styles from "../styles/section-cards.module.css";
import Card from "./card";

interface sectionCards {
  title: string;
  imgUrl: string;
  size: string;
}

const SectionCards: React.FC<sectionCards> = ({
  title,
  imgUrl,
  size,
}): JSX.Element => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.cardWrapper}>
        <Card id={0} imgUrl={imgUrl} size={size} />
        <Card imgUrl={imgUrl} size={size} />
        <Card imgUrl={imgUrl} size={size} />
        <Card imgUrl={imgUrl} size={size} />
        <Card imgUrl={imgUrl} size={size} />
        <Card imgUrl={imgUrl} size={size} />
        <Card imgUrl={imgUrl} size={size} />
        <Card imgUrl={imgUrl} size={size} />
        <Card imgUrl={imgUrl} size={size} />
        <Card imgUrl={imgUrl} size={size} />
        <Card imgUrl={imgUrl} size={size} />
        <Card imgUrl={imgUrl} size={size} />
        <Card imgUrl={imgUrl} size={size} />
      </div>
    </section>
  );
};

export default SectionCards;
