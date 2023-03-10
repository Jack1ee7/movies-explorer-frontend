import './Header.css';
import logo from "../../images/logo.svg";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    return (
        <div className='header__background'>
            <section className='header'>
                <img src={logo} alt="Логотип Место" className="header__logo" />
                <div className='header__container'>
                    <Link className="header__link" to="/sign-up">
                        Регистрация
                    </Link>
                    <button className='header__login-button' onClick={() => navigate('/sign-in')}>Войти</button>
                </div>
            </section>
        </div>
    );
}

export default Header;
