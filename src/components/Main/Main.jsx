import './Main.css';
import Promo from '../Promo/Promo.jsx'
import AboutProject from '../AboutProject/AboutProject.jsx'

const Main = () => {
    return (
        <section className='main'>
            <Promo />
            <AboutProject />
        </section>
    );
}

export default Main;
