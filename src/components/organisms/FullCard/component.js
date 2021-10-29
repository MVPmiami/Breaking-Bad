import styles from "./style.module.scss";

const FullCard = ({ person }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.photoWrapper}>
        <img className={styles.photo} src={person.img} alt={person.name}></img>
      </div>
      <div className={styles.info}>
        <div className={styles.status}>{person.status}</div>
        <div className={styles.name}>{person.name}</div>
        <div className={styles.birthday}>
          <span className={styles.lightText}>Date of birth: </span>
          {person.birthday}
        </div>
        <div className={styles.nickName}>
          <span className={styles.lightText}>Nickname: </span>
          {person.nickname}
        </div>
        <div className={styles.quote}>
          <span className={styles.lightText}>Quote: </span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non, aliquam
          laoreet vivamus sed. Diam fames mi, quam tellus cursus volutpat velit
          massa.
        </div>
      </div>
    </div>
  );
};

export default FullCard;
