import './Main.css';
import Promo from '../Promo/Promo.jsx'
import AboutProject from '../AboutProject/AboutProject.jsx'
import Techs from '../Techs/Techs.jsx'

const Main = () => {
    return (
        <section className='main'>
            <Promo />
            <AboutProject />
            <Techs />
        </section>
    );
}

export default Main;
