import Image from "next/image";
import { useState } from "react";
import styles from "../styles/card.module.css";
import { motion } from "framer-motion";
import cls from "classnames";

interface card {
  imgUrl: string;
  size: string;
}
const Card: React.FC<card> = ({ imgUrl, size = "md" }): JSX.Element => {
  const [imgSrc, setImgSrc] = useState(imgUrl);

  const classMap = {
    lg: styles.lgItem,
    md: styles.mdItem,
    sm: styles.smItem,
  };

  return (
    <div className={styles.container}>
      <motion.div
        className={cls(styles.imgMotionWrapper, classMap[size])}
        whileHover={{ scale: 1.1 }}
      >
        <Image
          src={imgSrc}
          layout="fill"
          alt="Image"
          className={styles.cardImg}
          onError={() => {
            setImgSrc(
              "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2059&q=80"
            );
          }}
        ></Image>
      </motion.div>
    </div>
  );
};

export default Card;
