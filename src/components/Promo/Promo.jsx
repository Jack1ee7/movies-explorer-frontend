import "./Promo.css";
import logo from "../../images/Promo-logo.svg";

const Promo = () => {
  return (
    <div className="promo__background">
      <section className="promo">
        <div className="promo__container">
          <div className="promo__text-container">
            <h1 className="promo__title">
              Учебный проект студента факультета Веб&minus;разработки.
            </h1>
            <p className="promo__caption">
              Листайте ниже, чтобы узнать больше про этот проект и его
              создателя.
            </p>
          </div>
          <img src={logo} alt="Web Planet" className="promo-logo" />
        </div>
        <button className="promo__learn-more-button">Узнать больше</button>
      </section>
    </div>
  );
};

export default Promo;
