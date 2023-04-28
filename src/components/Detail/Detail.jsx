import axios from "axios";
import styles from "./Detail.module.css";
import { useParams, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

// const URL_BASE = "https://be-a-rym.up.railway.app/api/character";

// const API_KEY = "771320657530.2a926528098abf1f2bde";

const Detail = ({ onClose }) => {
  const { id } = useParams();

  const [character, setCharacter] = useState({});

  // axios(`${URL_BASE}/${id}?key=${API_KEY}`)
  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then((response) => response.data)
      .then((data) => {
        if (data.name) {
          setCharacter(data);
        } else if (!data.name) {
          window.alert("No hay personajes con ese ID");
        }
      });
    return setCharacter({});
  }, [id]);

  return (
    <div>
      {character.name && (
        <div className={styles.card}>
          <img
            className={styles.image}
            src={character.image}
            alt={character.name}
          />
          <h2 className={`styles.name ${styles.hidden}`}>
            Name: {character.name}
          </h2>
          <h2 className={`styles.status ${styles.hidden}`}>
            Status: {character.status}
          </h2>
          <h2 className={`styles.species ${styles.hidden}`}>
            Species: {character.species}
          </h2>
          <h2 className={`styles.gender ${styles.hidden}`}>
            Gender: {character.gender}
          </h2>
          <h2 className={`styles.origin ${styles.hidden}`}>
            Origin: {character.origin?.name}
          </h2>
          <NavLink to={`/home`}>
            <button
              className={`${styles.closeButton} closeButton`}
              onClose={() => onClose()}
            >
              Back
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Detail;
