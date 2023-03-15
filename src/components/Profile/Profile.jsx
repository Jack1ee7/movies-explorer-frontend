import "./Profile.css";
import Header from "../Header/Header.jsx";

const Profile = () => {
  const profile = {
    name: "Никита",
    email: "nikita.chukanov@gmail.com",
  };
  return (
    <>
      <Header />
      <main className="profile">
        <h1 className="profile__title">{`Привет, ` + profile.name + `!`}</h1>
        <form className="profile__form">
          <fieldset className="profile__fieldset">
            <div className="profile__form-field">
              <label className="profile__form-label" htmlFor="name">
                Имя
              </label>
              <input
                className="profile__form-input"
                name="name"
                type="text"
                id="name"
                // defaultValue={values.name || currentUser.name || ""}
                // onChange={handleChange}
                // pattern="^[А-яёA-z\-\s]{2,30}$"
                required
              />
              {/* <span className="profile-form_error">
                {errors.name && constants.messages.nameRequirement}
              </span> */}
            </div>
            <div className="profile__form-field">
              <label className="profile__form-label" htmlFor="name">
                E-mail
              </label>
              <input
                className="profile__form-input"
                name="email"
                type="email"
                id="email"
                // defaultValue={values.name || currentUser.name || ""}
                // onChange={handleChange}
                // pattern="^[А-яёA-z\-\s]{2,30}$"
                required
              />
              {/* <span className="profile-form_error">
                {errors.name && constants.messages.nameRequirement}
              </span> */}
            </div>
          </fieldset>
          <button
            // disabled={!isValid || !isNewData}
            type="submit"
            className="profile__form-edit-button"
          >
            Редактировать
          </button>
        </form>
        <button className="profile__signout-button">Выйти из аккаунта</button>
      </main>
    </>
  );
};

export default Profile;
