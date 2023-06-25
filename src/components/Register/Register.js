import { Link } from "react-router-dom";
import logo from "../../images/headerLogo.svg";

import "./Register.css";

const Register = () => {
  return (
    <main className="register">
      <div className="register__header">
        <Link className="register__link-logo" to="/">
          <img src={logo} alt="Логотип сайта" />
        </Link>
        <h1 className="register__title">Добро пожаловать!</h1>
      </div>
      <form id="register" className="register__form" name="register">
        <label className="register__label">
          <span className="register__span">Имя</span>
          <input
            className="register__input"
            name="name"
            type="text"
            required
            minLength="2"
            maxLength="30"
          />
        </label>
        <label className="register__label">
          <span className="register__span">E-mail</span>
          <input
            className="register__input"
            name="email"
            type="email"
            required
          />
        </label>
        <label className="register__label">
          <span className="register__span">Пароль</span>
          <input
            className="register__input register__input_error"
            name="password"
            type="password"
            required
            minLength="6"
            maxLength="30"
            value="12345678"
          />
          <span className="register__error">Что-то пошло не так...</span>
        </label>
      </form>
      <div className="register__footer">
        <button form="register" type="submit" className="register__button-edit">
          Зарегистрироваться
        </button>
        <span className="register__assist">
          Уже зарегистрированны?
          <Link to="/signup" className="register__link">
            Войти
          </Link>
        </span>
      </div>
    </main>
  );
};

export default Register;
