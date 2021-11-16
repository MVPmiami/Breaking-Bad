import styles from "./style.module.scss";
import PageNumberBtn from "../../atoms/PageNumberBtn";
import ArrowNavigation from "../../atoms/ArrowNavigation";
import ShowCards from "../../atoms/ShowCards";

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
  for (let i = 1; i <= Math.ceil(totalPersons / personPerPage); i++) {
    pageNumbers.push(i);
  }
  const dots = "...";

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
          <PageNumberBtn
            currentPage={currentPage}
            numberPage={numberPage}
            paginate={paginate}
          />
        ))}
        <ArrowNavigation
          currentPage={currentPage}
          paginateToPrevPage={paginateToPrevPage}
          paginateToNextPage={paginateToNextPage}
        />
      </div>
      <div className={styles.rightSide}>
        <ShowCards
          personPerPage={personPerPage}
          changeAmountCards={changeAmountCards}
        />
      </div>
    </div>
  );
};

export default Pagination;
