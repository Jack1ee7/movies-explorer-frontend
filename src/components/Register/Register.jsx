import "./Register.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <main>
      <section className="register">
        <img src={logo} alt="movie explorer logo" className="register__logo" />
        <h1 className="register__title">Добро пожаловать!</h1>
        <form className="register__form">
          <fieldset className="register__fielset">
            <label className="register__input-caption">Имя</label>
            <input
              className="register__input"
              required
              placeholder="Имя"
              name="name"
              type="text"
            />
            <label className="register__input-caption">E-mail</label>
            <input
              className="register__input"
              required
              placeholder="E-mail"
              name="email"
              type="email"
            />
            <p className="register__input-caption">Пароль</p>
            <input
              className="register__input"
              required
              placeholder="Пароль"
              name="password"
              type="password"
            />
            <p className="register__error">Что-то пошло не так...</p>
          </fieldset>
          <div className="register__button-container">
            <button type="submit" className="register__form-submit-button">
              Зарегистрироваться
            </button>
            <p className="register__link-text">
              Уже зарегистрированы?{" "}
              <Link to="/sign-up" className="register__link">
                Войти
              </Link>
            </p>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Register;
