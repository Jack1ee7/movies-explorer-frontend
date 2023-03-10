import "./MoviesCard.css";
import { useState } from "react";

const MoviesCard = ({ imgSource, name, length, isLiked }) => {
  const [isCardLiked, setIsCardLiked] = useState(isLiked);

  const cardLikeButtonClassName = `moviescard__like-button ${
    isCardLiked ? "moviescard__like-button_active" : ""
  }`;

  const handleLikeToggle = () => {
    setIsCardLiked(!isCardLiked);
  };

  return (
    <li className="moviescard">
      <img src={imgSource} alt={name} className="moviescard__image" />
      <div className="moviescard__container">
        <div className="moviescard__container-text">
          <h3 className="moviescard__title">{name}</h3>
          <p className="moviescard__length">{length}</p>
        </div>
        <button
          className={cardLikeButtonClassName}
          type="button"
          onClick={handleLikeToggle}
        ></button>
      </div>
    </li>
  );
};
export default MoviesCard;
