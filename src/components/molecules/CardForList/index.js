import styles from "./style.module.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

const CardForList = ({ name, birthday, img, status, id }) => {
  return (
    <Link to={`/person/${id}`} className={styles.link}>
      <div className={styles.cardWrapper}>
        <div className={styles.leftSide}>
          <LazyLoadImage className={styles.avatar} src={img}></LazyLoadImage>
          <div className={styles.status}>{status}</div>
        </div>
        <div className={styles.personContent}>
          <div className={styles.name}>{name}</div>
          <div className={styles.data}>{birthday}</div>
        </div>
      </div>
    </Link>
  );
};

export default CardForList;
