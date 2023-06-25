import { Link } from "react-router-dom";
import logo from "../../images/headerLogo.svg";

import "./Login.css";

const Login = () => {
  return (
    <main className="login">
      <div className="login__header">
        <Link className="login__link-logo" to="/">
          <img src={logo} alt="Логотип сайта" />
        </Link>
        <h1 className="login__title">Рады видеть!</h1>
      </div>
      <form id="login" className="login__form" name="login">
        <div className="login__container">
          <label className="login__label">
            <span className="login__span">E-mail</span>
            <input
              className="login__input"
              name="email"
              type="email"
              required
            />
          </label>
          <label className="login__label">
            <span className="login__span">Пароль</span>
            <input
              className="login__input"
              name="password"
              type="password"
              required
            />
          </label>
        </div>
      </form>
      <div className="login__footer">
        <button form="login" type="submit" className="login__button-edit">
          Войти
        </button>
        <span className="login__assist">
          Ещё не зарегистрированны?
          <Link to="/signup" className="login__link">
            Регистрация
          </Link>
        </span>
      </div>
    </main>
  );
};

export default Login;
