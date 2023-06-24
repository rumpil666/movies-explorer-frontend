import { Link, useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import logo from "../../images/headerLogo.svg"

import "./Header.css";

const Header = ({ isAccordionOpen, onClickAccordion }) => {
    const currentLocation = useLocation();

    return (
        <header
            className={`header header__theme_${
                currentLocation.pathname === '/' ? 'landing' : 'main'
            }`}
        >
            <div className="header__container">
                <Link className="header__link-logo" to='/'>
                    <img src={logo} alt="Логотип сайта" />
                </Link>
                <Navigation
                  isAccordionOpen={isAccordionOpen}
                   onClickAccordion={onClickAccordion}
                />
            </div>
        </header>
    )
};

export default Header;
