import { Link, useNavigate } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <section className="notfound">
      <div>
        <h2 className="notfound__error">404</h2>
        <p className="notfound__description">Страница не найдена</p>
      </div>
      <Link className="notfound__link" onClick={() => navigate(-1)}>
        Назад
      </Link>
    </section>
  );
};

export default NotFound;
