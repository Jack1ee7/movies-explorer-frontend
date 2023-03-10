import './Movies.css';
import Header from '../Header/Header.jsx'
import SearchForm from '../SearchForm/SearchForm.jsx'
import Footer from '../Footer/Footer.jsx'
import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx'

const Movies = () => {
    return (
        <div className='movies'>
            <Header />
            <SearchForm />
            <MoviesCardList />
            <Footer />
        </div>
    );
}

export default Movies;
