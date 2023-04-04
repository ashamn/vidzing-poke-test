import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./search.module.scss";

interface Search {
  setSearch: (a: string) => void;
}

export default function Search(props: Search) {
  const { setSearch } = props;
  return (
    <div className={styles.wrapper}>
      <div className={styles.search_box}>
        <button className={styles.btn_search}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
        <input
          type="text"
          className={styles.input_search}
          placeholder="Search a pokemon"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
}
