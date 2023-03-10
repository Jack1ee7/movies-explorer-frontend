import './Register.css';
import logo from "../../images/logo.svg";
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <section className='register'>
            <img src={logo} alt="movie explorer logo" className='register__logo' />
            <h2 className='register__title'>Добро пожаловать!</h2>
            <form className="register__form">
                <div>
                    <p className='register__input-caption'>Имя</p>
                    <input
                        className="register__input"
                        required
                        placeholder="Имя"
                        name="name"
                        type="text"
                    />
                    <p className='register__input-caption'>E-mail</p>
                    <input
                        className="register__input"
                        required
                        placeholder="E-mail"
                        name="email"
                        type="email"
                    />
                    <p className='register__input-caption'>Пароль</p>
                    <input
                        className="register__input"
                        required
                        placeholder="Пароль"
                        name="password"
                        type="password"
                    />
                    <p className='register__error'>Что-то пошло не так...</p>
                </div>
                <div className='register__button-container'>
                    <button
                        type="submit"
                        className="register__form-submit-button"
                    >
                        Зарегистрироваться
                    </button>
                    <p className='register__link-text'>Уже зарегистрированы? <Link to="/sign-up" className="register__link">
                        Войти
                    </Link></p>
                </div>
            </form>
        </section>
    );
}

export default Register;
