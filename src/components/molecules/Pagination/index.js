import styles from "./style.module.scss";
import PageNumberBtn from "../../atoms/PageNumberBtn";
import ArrowNavigation from "../../atoms/ArrowNavigation";
import ShowCards from "../ShowCards";

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
    if (currentPage === 1) {
      pageNumbers = [
        currentPage,
        currentPage + 1,
        currentPage + 2,
        dots,
        lastPageNumber,
      ];
    } else if (currentPage === 2) {
      pageNumbers = [
        currentPage - 1,
        currentPage,
        currentPage + 1,
        currentPage + 2,
        dots,
        lastPageNumber,
      ];
    } else {
      pageNumbers = [
        currentPage - 2,
        currentPage - 1,
        currentPage,
        currentPage + 1,
        currentPage + 2,
        dots,
        lastPageNumber,
      ];
    }
    if (currentPage >= lastPageNumber - 2) {
      pageNumbers = [
        lastPageNumber - 4,
        lastPageNumber - 3,
        lastPageNumber - 2,
        lastPageNumber - 1,
        lastPageNumber,
      ];
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
