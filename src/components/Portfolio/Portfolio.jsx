import "./Portfolio.css";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__links">
        <li className="portfolio__link-item">
          <a
            href="https://github.com/Jack1ee7"
            alt="Статичный сайт"
            target="_blank"
            rel="noreferrer"
            className="portfolio__link"
          >
            <p className="portfolio__link-text">Статичный сайт</p>
            <div className="portfolio__link-icon" />
          </a>
        </li>
        <li className="portfolio__link-item">
          <a
            href="https://github.com/Jack1ee7"
            alt="Адаптивный сайт"
            target="_blank"
            rel="noreferrer"
            className="portfolio__link"
          >
            <p className="portfolio__link-text">Адаптивный сайт</p>
            <div className="portfolio__link-icon" />
          </a>
        </li>
        <li className="portfolio__link-item">
          <a
            href="https://github.com/Jack1ee7"
            alt="Одностраничное приложение"
            target="_blank"
            rel="noreferrer"
            className="portfolio__link"
          >
            <p className="portfolio__link-text">Одностраничное приложение</p>
            <div className="portfolio__link-icon" />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Portfolio;
