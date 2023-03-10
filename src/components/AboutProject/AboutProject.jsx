import "./AboutProject.css";
import Title from "../Title/Title.jsx";

const AboutProject = () => {
  return (
    <section className="aboutproject">
      <Title titleText={"О проекте"} />
      <div className="aboutproject__container">
        <div>
          <h3 className="aboutproject__subtitle">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="aboutproject__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div>
          <h3 className="aboutproject__subtitle">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="aboutproject__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="aboutproject__time-container">
        <div className="aboutproject__one-week-container">
          <div className="aboutproject__one-week-line">
            <p className="aboutproject__one-week-line-text">1 неделя</p>
          </div>
          <p className="aboutproject__time-caption">Back-end</p>
        </div>
        <div className="aboutproject__four-week-container">
          <div className="aboutproject__four-week-line">
            <p className="aboutproject__four-week-line-text">4 недели</p>
          </div>
          <p className="aboutproject__time-caption">Front-end</p>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
