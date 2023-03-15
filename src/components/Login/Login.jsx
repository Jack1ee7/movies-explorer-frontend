import "./Login.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <main>
      <section className="login">
        <img src={logo} alt="movie explorer logo" className="login__logo" />
        <h1 className="login__title">Рады видеть!</h1>
        <form className="login__form">
          <fieldset className="login__fieldset">
            <label className="login__input-caption">E-mail</label>
            <input
              className="login__input"
              required
              placeholder="E-mail"
              name="email"
              type="email"
            />
            <label className="login__input-caption">Пароль</label>
            <input
              className="login__input"
              required
              placeholder="Пароль"
              name="password"
              type="password"
            />
            <p className="login__error">Что-то пошло не так...</p>
          </fieldset>
          <div className="login__button-container">
            <button type="submit" className="login__form-submit-button">
              Войти
            </button>
            <p className="login__link-text">
              Ещё не зарегистрированы?{" "}
              <Link to="/sign-in" className="login__link">
                Регистрация
              </Link>
            </p>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Login;
