import Image from "next/image";
import styles from "./card.module.css";
export default function Card({ imgUrl, size }) {
  const classMap = {
    lg: styles.lgItem,
    md: styles.mdItem,
    sm: styles.smItem,
  };
  return (
    <div className="mr-1 cursor-pointer">
      <div className={classMap[size]}>
        Card
        <Image src={imgUrl} layout="fill" alt="Image"></Image>
      </div>
    </div>
  );
}
