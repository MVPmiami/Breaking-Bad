import styles from "./style.module.scss";
import ErrorMessage from "../../atoms/Error";
import Loader from "../../atoms/Loader";

const FullCard = ({ person, isLoader, isError, randomQuote }) => {
  return (
    <>
      {isError ? (
        <ErrorMessage messege="Person not found" />
      ) : isLoader ? (
        <Loader />
      ) : (
        <div className={styles.wrapper}>
          <div className={styles.photoWrapper}>
            <img
              className={styles.photo}
              src={person[0].img}
              alt={person[0].name}
            ></img>
          </div>
          <div className={styles.info}>
            <div className={styles.status}>{person[0].status}</div>
            <div className={styles.name}>{person[0].name}</div>
            <div className={styles.birthday}>
              <span className={styles.lightText}>Date of birth: </span>
              {person[0].birthday}
            </div>
            <div className={styles.nickName}>
              <span className={styles.lightText}>Nickname: </span>
              {person[0].nickname}
            </div>
            <div className={styles.quote}>
              <span className={styles.lightText}>Quote: </span>
              {randomQuote}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FullCard;
