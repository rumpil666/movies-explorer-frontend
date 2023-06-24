import { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import Error404 from "../Error404/Error404";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";

import "./App.css";

function App() {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const handleAccordionBtnClick = () => setIsAccordionOpen(!isAccordionOpen);

  return (
    <div className="app">
      <CurrentUserContext.Provider>
        <Routes>
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route
            path="/"
            element={
              <Main
                isAccordionOpen={isAccordionOpen}
                onClickAccordion={handleAccordionBtnClick}
              />
            }
          />
          <Route
            path="/movies"
            element={
              <Movies
                isAccordionOpen={isAccordionOpen}
                onClickAccordion={handleAccordionBtnClick}
              />
            }
          />
          <Route
            path="/saved-movies"
            element={
              <SavedMovies
                isAccordionOpen={isAccordionOpen}
                onClickAccordion={handleAccordionBtnClick}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <Profile
                isAccordionOpen={isAccordionOpen}
                onClickAccordion={handleAccordionBtnClick}
              />
            }
          />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
