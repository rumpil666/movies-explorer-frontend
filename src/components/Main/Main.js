import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Promo from "../Promo/Promo";
import AboutMe from "../AboutMe/AboutMe";
import AboutProject from "../AboutProject/AboutProject";
import Portfolio from "../Portfolio/Portfolio";
import Techs from "../Techs/Techs";

import "./Main.css";

const Main = ({ isAccordionOpen, handleAccordionBtnClick }) => {
  return (
    <>
      <Header
        isAccordionOpen={isAccordionOpen}
        onClickAccordion={handleAccordionBtnClick}
      />
      <main className="main">
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
};

export default Main;
