import styles from "./style.module.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Card = ({ name, birthday, img, status }) => {
  return (
    <div>
      <div className={styles.cardWrapper}>
        <LazyLoadImage className={styles.avatar} src={img}></LazyLoadImage>
        <div className={styles.personContent}>
          <div className={styles.status}>{status}</div>
          <div className={styles.name}>{name}</div>
          <div className={styles.data}>{birthday}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
