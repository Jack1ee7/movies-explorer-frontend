import "./Header.css";
import logo from "../../images/logo.svg";
import accountIcon from "../../images/account-icon.svg";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ currentPage, isLoggedIn }) => {
  const navigate = useNavigate();
  isLoggedIn = true;
  return (
    <div
      className={`${
        currentPage === "main"
          ? "header__background_color_blue"
          : "header__background_color_gray"
      }`}
    >
      {isLoggedIn ? (
        <header className="header">
          <img
            src={logo}
            alt="Логотип movie-explorer"
            className="header__logo"
          />
          <div className="header__movies-container">
            <Link className="header__link-films" to="/movies">
              Фильмы
            </Link>
            <Link className="header__link-films" to="/sign-up">
              Сохранённые фильмы
            </Link>
          </div>
          <div className="header__account-container">
            <Link className="header__link-films" to="/profile">
              Аккаунт
            </Link>
            <button
              className="header__account-icon"
              onClick={() => {navigate('/profile')}}
            />
          </div>
        </header>
      ) : (
        <header className="header">
          <img
            src={logo}
            alt="Логотип movie-explorer"
            className="header__logo"
          />
          <div className="header__container">
            <Link className="header__link" to="/sign-up">
              Регистрация
            </Link>
            <button
              className="header__login-button"
              onClick={() => navigate("/sign-in")}
            >
              Войти
            </button>
          </div>
        </header>
      )}
    </div>
  );
};

export default Header;
