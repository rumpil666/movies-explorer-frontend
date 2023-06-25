import { React, useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import { movies } from "../../utils/constants";

import "./Movies.css";

const Movies = ({ isAccordionOpen, onClickAccordion }) => {
  const [isDefaultMovies, setIsDefaultMovies] = useState(12);

  useEffect(() => {
    if (window.innerWidth <= 707) {
      setIsDefaultMovies(5);
    } else if (707 <= window.innerWidth && window.innerWidth <= 1139) {
      setIsDefaultMovies(8);
    } else {
      setIsDefaultMovies(12);
    }
  }, []);

  return (
    <>
      <Header
        isAccordionOpen={isAccordionOpen}
        onClickAccordion={onClickAccordion}
      />
      <section className="movies">
        <SearchForm />
        <MoviesCardList movies={movies.slice(0, isDefaultMovies)} />
      </section>
      <Footer />
    </>
  );
};

export default Movies;
