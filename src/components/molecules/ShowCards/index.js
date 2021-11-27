import React from "react";
import styles from "./style.module.scss";
import ShowCardsBtn from "../../atoms/ShowCardsBtn";

const ShowCards = ({ personPerPage, changeAmountCards }) => {
  const amountCards = [5, 10, 15, 20];
  const btnList = amountCards.map((amount) => (
    <ShowCardsBtn
      personPerPage={personPerPage}
      changeAmountCards={changeAmountCards}
      amount={amount}
      key={amount}
    />
  ));
  return (
    <>
      <span className={styles.header}>Show cards:</span>
      <>{btnList}</>
    </>
  );
};

export default ShowCards;
