import styles from "./style.module.scss";
import { v4 as uuid4 } from "uuid";
import Card from "./../../molecules/Card/";

const CardList = () => {
  const cards = [
    {
      id: uuid4(),
      name: "Walter White",
      birthday: "09-07-1958",
      img: "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg",
      status: "Deceased",
    },
    {
      id: uuid4(),
      name: "Jesse Pinkman",
      birthday: "09-24-1984",
      img: "https://vignette.wikia.nocookie.net/breakingbad/images/9/95/JesseS5.jpg/revision/latest?cb=20120620012441",
      status: "Alive",
    },
    {
      id: uuid4(),
      name: "Skyler White",
      birthday: "08-11-1970",
      img: "https://s-i.huffpost.com/gen/1317262/images/o-ANNA-GUNN-facebook.jpg",
      status: "Alive",
    },
    {
      id: uuid4(),
      name: "Walter White Jr.",
      birthday: "07-08-1993",
      img: "https://media1.popsugar-assets.com/files/thumbor/WeLUSvbAMS_GL4iELYAUzu7Bpv0/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/01/12/910/n/1922283/fb758e62b5daf3c9_TCDBRBA_EC011/i/RJ-Mitte-Walter-White-Jr.jpg",
      status: "Alive",
    },
    {
      id: uuid4(),
      name: "Henry Schrader",
      birthday: "Unknown",
      img: "https://vignette.wikia.nocookie.net/breakingbad/images/b/b7/HankS5.jpg/revision/latest/scale-to-width-down/700?cb=20120620014136",
      status: "Deceased",
    },
  ];
  const cardsList = cards.map((card) => (
    <Card
      key={card.id}
      name={card.name}
      birthday={card.birthday}
      img={card.img}
      status={card.status}
    />
  ));
  return (
    <div>
      <ul className={styles.cardList}>{cardsList}</ul>
    </div>
  );
};

export default CardList;
