import React from "react";
import styles from "./style.module.scss";
import Card from "./../../molecules/Card/";
import CardForList from "../../molecules/CardForList";
import ErrorMessage from "../../atoms/Error";
import Loader from "./../../atoms/Loader";
import Toogle from "../../molecules/Toogle";
import SearchField from "../SearchField/";

const CardList = ({ persons, isLoader, isError, isList, toogle }) => {
  let cardsList = [];
  isList
    ? (cardsList = persons.map((person) => (
        <CardForList
          key={person.char_id}
          name={person.name}
          birthday={person.birthday}
          img={person.img}
          status={person.status}
          id={person.char_id}
        />
      )))
    : (cardsList = persons.map((person) => (
        <Card
          key={person.char_id}
          name={person.name}
          birthday={person.birthday}
          img={person.img}
          status={person.status}
          id={person.char_id}
        />
      )));
  return (
    <div className={styles.wrapper}>
      <SearchField />
      <Toogle isList={isList} toogle={toogle} />
      {isList ? (
        <div className={styles.headerList}>
          <h2 className={styles.status}>Status</h2>
          <h2 className={styles.name}>Name</h2>
          <h2 className={styles.birth}>date of birth</h2>
        </div>
      ) : null}
      {isError ? (
        <>
          <ErrorMessage messege="Person(s) not found!" />
        </>
      ) : !isLoader ? (
        !isList ? (
          <div className={styles.cardListGrid}>{cardsList}</div>
        ) : (
          <div className={styles.cardList}>{cardsList}</div>
        )
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default CardList;
