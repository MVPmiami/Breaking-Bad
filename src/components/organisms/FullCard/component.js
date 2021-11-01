import styles from "./style.module.scss";
import ErrorMessage from "../../atoms/Error";
import Loader from "../../atoms/Loader";

const FullCard = ({ person, isLoader, isError }) => {
  let pers = person[0];
  console.log(isLoader);

  return (
    <>
      {isError ? (
        <ErrorMessage messege="Person not found" />
      ) : isLoader ? (
        <Loader />
      ) : (
        <div className={styles.wrapper}>
          <div className={styles.photoWrapper}>
            <img className={styles.photo} src={pers.img} alt={pers.name}></img>
          </div>
          <div className={styles.info}>
            <div className={styles.status}>{pers.status}</div>
            <div className={styles.name}>{pers.name}</div>
            <div className={styles.birthday}>
              <span className={styles.lightText}>Date of birth: </span>
              {pers.birthday}
            </div>
            <div className={styles.nickName}>
              <span className={styles.lightText}>Nickname: </span>
              {pers.nickname}
            </div>
            <div className={styles.quote}>
              <span className={styles.lightText}>Quote: </span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non,
              aliquam laoreet vivamus sed. Diam fames mi, quam tellus cursus
              volutpat velit massa.
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FullCard;
