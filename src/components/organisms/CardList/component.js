import styles from "./style.module.scss";
import Card from "./../../molecules/Card/";
import ErrorMessage from "../../atoms/Error";
import Loader from "./../../atoms/Loader";

const CardList = ({ persons, isLoader, isError }) => {
  const cardsList = persons.map((person) => (
    <Card
      key={person.char_id}
      name={person.name}
      birthday={person.birthday}
      img={person.img}
      status={person.status}
    />
  ));
  return (
    <div>
      {isError ? (
        <ErrorMessage messege="We have some problems dude!" />
      ) : !isLoader ? (
        <div className={styles.cardList}>{cardsList}</div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default CardList;
