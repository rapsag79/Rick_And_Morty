import SearchBar from "../SearchBar/SearchBar.jsx";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

export default function Nav({ onSearch, logout }) {
  return (
    <nav className={styles["nav-container"]}>
      <button>
        <NavLink
          to="/home"
          className={styles["nav-link"]}
          activeClassName={styles.active}
        >
          Home
        </NavLink>
      </button>

      <button>
        <NavLink
          to="/about"
          className={styles["nav-link"]}
          activeClassName={styles.active}
        >
          About
        </NavLink>
      </button>

      <button>
        <NavLink
          to="/favorites"
          className={styles["nav-link"]}
          activeClassName={styles.active}
        >
          Favorites
        </NavLink>
      </button>

      <SearchBar onSearch={onSearch} />
      <button
        style={{marginRight:"2rem"}}
        className={styles["nav-link"]}
        activeClassName={styles.active}
        onClick={logout}
      >
        LogOut
      </button>
    </nav>
  );
}
