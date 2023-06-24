import "./ProfileUser.css";

const ProfileUser = () => {
  return (
    <div className="profile-user">
      <h1 className="profile-user__title">Привет, Антон!</h1>
      <form id="submit" className="profile-user__form" name="profile">
        <label className="profile-user__label">
          <span className="profile-user__span">Имя</span>
          <input
            className="profile-user__input"
            name="name"
            type="text"
            required
            minLength="2"
            maxLength="30"
            value="Антон"
          />
        </label>
        <label className="profile-user__label">
          <span className="profile-user__span">E-mail</span>
          <input
            className="profile-user__input"
            name="email"
            type="email"
            value="pochta@yandex.ru"
            required
          />
        </label>
      </form>
      <div className="profile-user__buttons-container">
        <button
          form="profile"
          type="submit"
          className="profile-user__button-edit"
        >
          Редактировать
        </button>
        <button type="button" className="profile-user__button-exit">
          Выйти из аккаунта
        </button>
      </div>
    </div>
  );
};

export default ProfileUser;
