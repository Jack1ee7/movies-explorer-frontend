import './SearchForm.css';

const SearchForm = () => {
    return (
        <section className='searchform'>
            <form className='searchform__form'>
                <div className='searchform__icon' />
                <input
                    className="searchform__input"
                    type="text"
                    name="film"
                    id="film"
                    placeholder="Фильм"
                    required
                    minLength="1"
                    maxLength="200"
                />
                <button className='searchform__button-submit'></button>
            </form>
            <div className="searchform__checkbox-container">
                <label className="searchform__checkbox-switch" htmlFor="checkbox">
                    <input type="checkbox" id="checkbox" />
                    <div className="searchform__checkbox-slider"></div>
                </label>
                <p className='searchform__checkbox-caption'>Короткометражки</p>
            </div>
        </section>
    );
}

export default SearchForm;
