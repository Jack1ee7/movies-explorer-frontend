import './Techs.css';
import Title from '../Title/Title.jsx'

const Techs = () => {
    return (
        <div className='techs__background'>
            <section className='techs'>
                <Title titleText={'Технологии'} />
                <div className='techs__container'>
                    <div className='techs__text-container'>
                        <h3 className='techs__subtitle'>7 технологий</h3>
                        <p className='techs__description'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                    </div>
                    <div className='techs__techs-container'>
                        <div className='techs__tech-square'>
                            <p className='techs__tech-text'>HTML</p>
                        </div>
                        <div className='techs__tech-square'>
                            <p className='techs__tech-text'>CSS</p>
                        </div>
                        <div className='techs__tech-square'>
                            <p className='techs__tech-text'>JS</p>
                        </div>
                        <div className='techs__tech-square'>
                            <p className='techs__tech-text'>React</p>
                        </div>
                        <div className='techs__tech-square'>
                            <p className='techs__tech-text'>Git</p>
                        </div>
                        <div className='techs__tech-square'>
                            <p className='techs__tech-text'>Express.js</p>
                        </div>
                        <div className='techs__tech-square'>
                            <p className='techs__tech-text'>mongoDB</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Techs;
