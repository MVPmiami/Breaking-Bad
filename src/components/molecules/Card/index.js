import styles from "./style.module.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

const Card = ({ name, birthday, img, status, id }) => {
  return (
    <Link to={`/person/${id}`} className={styles.link}>
      <div className={styles.cardWrapper}>
        <LazyLoadImage className={styles.avatar} src={img}></LazyLoadImage>
        <div className={styles.personContent}>
          <div className={styles.status}>{status}</div>
          <div className={styles.name}>{name}</div>
          <div className={styles.data}>{birthday}</div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
