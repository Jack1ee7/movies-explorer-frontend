import './Main.css';
import Promo from '../Promo/Promo.jsx'
import AboutProject from '../AboutProject/AboutProject.jsx'
import Techs from '../Techs/Techs.jsx'
import AboutMe from '../AboutMe/AboutMe.jsx'
import Portfolio from '../Portfolio/Portfolio.jsx'
import Footer from '../Footer/Footer.jsx'

const Main = () => {
    return (
        <section className='main'>
            <Promo />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Portfolio />
            <Footer />
        </section>
    );
}

export default Main;
