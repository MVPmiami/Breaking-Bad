import styles from "./style.module.scss";

const ShowCards = ({ personPerPage, changeAmountCards }) => {
  return (
    <>
      <span className={styles.header}>Show cards:</span>
      <div
        className={`${styles.amountCards} ${
          personPerPage === 5 ? styles.active : ""
        }`}
        onClick={() => {
          changeAmountCards(5);
        }}
      >
        5
      </div>
      <div
        className={`${styles.amountCards} ${
          personPerPage === 10 ? styles.active : ""
        }`}
        onClick={() => {
          changeAmountCards(10);
        }}
      >
        10
      </div>
      <div
        className={`${styles.amountCards} ${
          personPerPage === 15 ? styles.active : ""
        }`}
        onClick={() => {
          changeAmountCards(15);
        }}
      >
        15
      </div>
      <div
        className={`${styles.amountCards} ${
          personPerPage === 20 ? styles.active : ""
        }`}
        onClick={() => {
          changeAmountCards(20);
        }}
      >
        20
      </div>
    </>
  );
};

export default ShowCards;
