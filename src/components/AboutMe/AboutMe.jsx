import './AboutMe.css';
import Title from '../Title/Title.jsx'

const AboutMe = () => {
    return (
        <section className='aboutme'>
            <Title titleText={'Студент'} />
            <div className='aboutme__container'>
                <div className='aboutme__text-container'>
                    <h3 className='aboutme__subtitle'>Виталий</h3>
                    <p className='aboutme__description'>Фронтенд-разработчик, 30 лет</p>
                    <p className='aboutme__text'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
                        и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                    <p className='aboutme__github'>Github</p>
                </div>
                <div className='aboutme__photo-container' />
            </div>
        </section>
    );
}

export default AboutMe;
