import styles from "./style.module.scss";
import img from "./../../../assets/img/search.png";

const SearchField = ({ searchName, name, searchPersons }) => {
  return (
    <div className={styles.wrapper}>
      <form className={styles.searchForm}>
        <input
          type="text"
          placeholder="Search"
          className={styles.searchInput}
          onChange={(e) => {
            searchName(e.target.value);
          }}
        />
        <img src={img} className={styles.searchImg} />
        <button
          className={styles.searchBtn}
          onClick={(e) => {
            e.preventDefault();
            searchPersons(name);
            e.target.parentNode.firstChild.value = "";
          }}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchField;
