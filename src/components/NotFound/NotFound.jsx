import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <section className='notfound'>
        <div>
        <h2 className='notfound__error'>404</h2>
        <p className='notfound__description'>Страница не найдена</p>
        </div>
        <Link className='notfound__link'>Назад</Link>
    </section>
  );
}

export default NotFound;
