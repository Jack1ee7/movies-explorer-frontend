import './Portfolio.css';

const Portfolio = () => {
    return (
        <section className='portfolio'>
            <h2 className='portfolio__title'>Портфолио</h2>
            <ul className='portfolio__links'>
                <li className='portfolio__link'>
                    <p className='portfolio__link-text'>Статичный сайт</p>
                    <button className='portfolio__link-icon'/>
                </li>
                <li className='portfolio__link'>
                    <p className='portfolio__link-text'>Адаптивный сайт</p>
                    <button className='portfolio__link-icon'/>
                </li>
                <li className='portfolio__link'>
                    <p className='portfolio__link-text'>Одностраничное приложение</p>
                    <button className='portfolio__link-icon'/>
                </li>
            </ul>
        </section>
    );
}

export default Portfolio;
