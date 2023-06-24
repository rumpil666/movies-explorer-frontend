import { useLocation } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";

import "./MoviesCardList.css";

const MoviesCardList = ({ movies }) => {
  const currentLocation = useLocation();

  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__list">
        {movies.map((movie) => {
          return (
            <MoviesCard
              key={movie.id}
              image={movie.image}
              nameRU={movie.nameRU}
              duration={movie.duration}
              like={movie.like}
              trailerLink={movie.trailerLink}
            />
          );
        })}
      </ul>
      {currentLocation.pathname === "/movies" && (
        <button className="movies-card-list__more">Ещё</button>
      )}
    </section>
  );
};

export default MoviesCardList;
