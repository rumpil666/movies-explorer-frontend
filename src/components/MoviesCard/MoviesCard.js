import { useLocation } from "react-router-dom";
import { toHoursAndMinutes } from "../../utils/toHoursAndMinutes";

import "./MoviesCard.css";

const MoviesCard = (movie) => {
  const currentLocation = useLocation();

  return (
    <li key={movie.id} className="movies-card">
      {currentLocation.pathname === "/movies" && (
        <button
          className={`movies-card__button movies-card_type_${
            !movie.like ? "saved" : "save"
          }`}
          type="button"
          title={`${!movie.like ? "Убрать из сохраненного" : "Сохранить"}`}
        />
      )}
      {currentLocation.pathname === "/saved-movies" && (
        <button
          className="movies-card__button movies-card_type_delete"
          type="button"
          title="Удалить из сохраненного"
        />
      )}
      <a
        className="movies-card__link"
        href={movie.trailerLink}
        rel="noreferrer"
        target="_blank"
      >
        <img
          className="movies-card__poster"
          src={movie.image}
          alt={movie.nameRU}
        />
      </a>
      <div className="movies-card__container">
        <h2 className="movies-card__title">{movie.nameRU}</h2>
        <span className="movies-card__duration">
          {toHoursAndMinutes(movie.duration)}
        </span>
      </div>
    </li>
  );
};

export default MoviesCard;
