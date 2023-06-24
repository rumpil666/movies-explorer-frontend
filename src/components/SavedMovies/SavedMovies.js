import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { savedMovies } from "../../utils/constants";

import "./SavedMovies.css";

const SavedMovies = ({ isAccordionOpen, onClickAccordion }) => {

  return (
    <>
      <Header
        isAccordionOpen={isAccordionOpen}
        onClickAccordion={onClickAccordion}
      />
      <main className="saved-movies">
        <SearchForm />
        <MoviesCardList movies={savedMovies} />
      </main>
      <Footer />
    </>
  );
};

export default SavedMovies;
