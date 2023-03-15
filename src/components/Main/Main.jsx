import "./Main.css";
import Promo from "../Promo/Promo.jsx";
import AboutProject from "../AboutProject/AboutProject.jsx";
import Techs from "../Techs/Techs.jsx";
import AboutMe from "../AboutMe/AboutMe.jsx";
import Portfolio from "../Portfolio/Portfolio.jsx";
import Footer from "../Footer/Footer.jsx";
import Header from "../Header/Header.jsx";

const Main = () => {
  return (
    <main className="main">
      <Header currentPage='main' isLoggedIn={true}/>
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
      <Footer />
    </main>
  );
};

export default Main;
