import "./ProfileUser.css";

const ProfileUser = () => {
  return (
    <div class="profile-user">
      <h1 class="profile-user__title">Привет, Антон!</h1>
      <form id="submit" class="profile-user__form" name="profile">
        <label class="profile-user__label">
          <span class="profile-user__span">Имя</span>
          <input
            class="profile-user__input"
            name="name"
            type="text"
            required
            minLength="2"
            maxLength="30"
            value="Антон"
          />
        </label>
        <label class="profile-user__label">
          <span class="profile-user__span">E-mail</span>
          <input
            class="profile-user__input"
            name="email"
            type="email"
            value="pochta@yandex.ru"
            required
          />
        </label>
      </form>
      <div class="profile-user__buttons-container">
        <button
          form="profile"
          type="submit"
          class="profile-user__button-edit"
        >
          Редактировать
        </button>
        <button type="button" class="profile-user__button-exit">
          Выйти из аккаунта
        </button>
      </div>
    </div>
  );
};

export default ProfileUser;
