import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer">
      <p className="footer__text">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__container">
        <p className="footer__year">&copy; 2023</p>
        <ul className="footer__links">
          <li>
            <a
              href="https://practicum.yandex.ru"
              alt="Yandex practicum"
              className="footer__link"
              rel="noreferrer"
              target="_blank"
            >
              Яндекс.Практикум
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Jack1ee7"
              alt="Github"
              className="footer__link"
              rel="noreferrer"
              target="_blank"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
