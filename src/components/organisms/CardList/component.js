import styles from "./style.module.scss";
import Card from "./../../molecules/Card/";

const CardList = ({ persons }) => {
  const cardsList = persons.map((person) => (
    <Card
      key={person.id}
      name={person.name}
      birthday={person.birthday}
      img={person.img}
      status={person.status}
    />
  ));
  return <div className={styles.cardList}>{cardsList}</div>;
};

export default CardList;
