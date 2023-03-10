import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard.jsx'
import images from "../../images/filmCovers/Imports.jsx";

const MoviesCardList = () => {
    return (
        <section className="moviescardlist">
            <ul className="moviescardlist__list">
                <MoviesCard imgSource={images.a} name='33 слова о дизайне' length='1ч 47м' isLiked={true} />
                <MoviesCard imgSource={images.b} name='Киноальманах «100 лет дизайна»' length='1ч 3м' isLiked={false} />
                <MoviesCard imgSource={images.c} name='В погоне за Бенкси' length='1ч 47м' isLiked={false} />
                <MoviesCard imgSource={images.d} name='Баския: Взрыв реальности' length='1ч 47м' isLiked={false} />
                <MoviesCard imgSource={images.a} name='33 слова о дизайне' length='1ч 47м' isLiked={true} />
            </ul>
            <button type='button' className='moviescardlist__load-more-button'>Ещё</button>
        </section>
    );
}
export default MoviesCardList;
