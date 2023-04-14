import { useState } from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  return (
    <div className={styles.searchBar}>
      <input
        className={styles.searchInput}
        type="search"
        placeholder="Buscar por ID"
        onChange={handleChange}
        value={id}
      />
      <button
        className={styles["searchButton"]}
        activeClassName={styles.active}
        onClick={() => {
          onSearch(id);
          setId("");
        }}
      >
        Agregar
      </button>
    </div>
  );
}
