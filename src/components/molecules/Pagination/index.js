import styles from "./style.module.scss";
import backArrow from "./../../../assets/img/leftArr.png";
import rightArrow from "./../../../assets/img/rightArr.png";

const Pagination = ({
  personPerPage,
  totalPersons,
  paginate,
  currentPage,
  paginateToNextPage,
  paginateToPrevPage,
  changeAmountCards,
}) => {
  let pageNumbers = [];
  let dots = "...";
  for (let i = 1; i <= Math.ceil(totalPersons / personPerPage); i++) {
    pageNumbers.push(i);
  }

  if (pageNumbers.length > 6) {
    let lastPageNumber = pageNumbers[pageNumbers.length - 1];
    pageNumbers = [
      currentPage,
      currentPage + 1,
      currentPage + 2,
      dots,
      lastPageNumber,
    ];
    if (currentPage >= 10) {
      pageNumbers = [10, 11, lastPageNumber];
    }
  } else if (pageNumbers.length > 5 && pageNumbers.length <= 6) {
    let lastPageNumber = pageNumbers[pageNumbers.length - 1];
    pageNumbers = [
      currentPage,
      currentPage + 1,
      currentPage + 2,
      dots,
      lastPageNumber,
    ];
    if (currentPage >= 4) {
      pageNumbers = [4, 5, lastPageNumber];
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.leftSide}>
        {pageNumbers.map((numberPage) => (
          <div
            className={`${styles.pageElement} ${
              currentPage === numberPage ? styles.active : ""
            }`}
            key={numberPage}
            onClick={() => {
              paginate(numberPage);
            }}
          >
            {numberPage}
          </div>
        ))}
        <div className={styles.arrowNavigation}>
          <img
            src={backArrow}
            className={styles.arrow}
            onClick={() => {
              paginateToPrevPage(currentPage);
            }}
          ></img>
          <img
            src={rightArrow}
            className={styles.arrow}
            onClick={() => {
              paginateToNextPage(currentPage);
            }}
          ></img>
        </div>
      </div>
      <div className={styles.rightSide}>
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
      </div>
    </div>
  );
};

export default Pagination;
