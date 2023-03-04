import './Header.css';
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className='header__background'>
            <section className='header'>
                <img src={logo} alt="Логотип Место" className="header__logo" />
                <div className='header__container'>
                    <Link className="header__link" to="/sign-in">
                        Регистрация
                    </Link>
                    <button className='header__login-button'>Войти</button>
                </div>
            </section>
        </div>
    );
}

export default Header;
