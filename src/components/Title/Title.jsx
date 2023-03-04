import './Title.css';

const Title = ({ titleText }) => {
    return (
        <div className='title'>
            <div className='title__container'>
                <h2 className='title__title'>{titleText}</h2>
            </div>
        </div>
    );
}

export default Title;
