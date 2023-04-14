import styles from "./Card.module.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/action/action";
import { useState, useEffect } from "react";

const Card = ({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
  addFav,
  removeFav,
  myFavorites,
}) => {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({
        id,
        name,
        species,
        gender,
        image,
        onClose,
      });
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div className={styles.card}>
      <button className={styles.closeButton} onClick={() => onClose(id)}>
        X
      </button>
      <button style={{ marginLeft: "15rem" }} onClick={handleFavorite}>
        {isFav ? "❤️" : "🤍"}
      </button>
      <img className={styles.image} src={image} alt="" />
      <NavLink to={`/detail/${id}`}>
        <h2 className={`styles.name ${styles.hidden}`}>Name: {name}</h2>
      </NavLink>
      <h2 className={`styles.status ${styles.hidden}`}>Status: {status}</h2>
      <h2 className={`styles.species ${styles.hidden}`}>Species: {species}</h2>
      <h2 className={`styles.gender ${styles.hidden}`}>Gender: {gender}</h2>
      <h2 className={`styles.origin ${styles.hidden}`}>Origin: {origin}</h2>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
