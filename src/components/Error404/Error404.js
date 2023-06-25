import { useNavigate } from "react-router-dom";

import "./Error404.css";

const Error404 = () => {
  const history = useNavigate();
  return (
    <main className="error404">
      <div className="error404__container">
        <h2 className="error404__title">404</h2>
        <p className="error404__subtitle">Страница не найдена</p>
      </div>
      <button className="error404__button" onClick={() => history(-1)}>
        Назад
      </button>
    </main>
  );
};

export default Error404;
