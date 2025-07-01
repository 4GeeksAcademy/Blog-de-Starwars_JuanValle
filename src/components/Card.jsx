import { Link } from 'react-router-dom';
import swImage from '../assets/img/sw.jpg';
import useGlobalReducer from '../hooks/useGlobalReducer';

function Card({ name, uid, type }) {
  const { dispatch, store } = useGlobalReducer();

  const isFavorite = store.favorites.some(
    (fav) => fav.uid === uid && fav.type === type
  );

  const toggleFavorite = () => {
    dispatch({
      type: isFavorite ? 'remove_favorite' : 'add_favorite',
      payload: { uid, type, name },
    });
  };

  return (
    <div
      className="card"
      style={{
        width: '300px',
        minHeight: '380px',
        flex: '0 0 auto',
        overflow: 'hidden',
      }}
    >
      <img
        src={swImage}
        alt={name}
        className="card-img-top"
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="card-title text-center">{name}</h5>
        <div className="d-flex justify-content-between">
          <Link to={`/${type}/${uid}`} className="btn btn-outline-primary btn-sm">
            Learn more
          </Link>
          <button
            className={`btn btn-sm ${isFavorite ? 'btn-warning' : 'btn-outline-warning'}`}
            onClick={toggleFavorite}
          >
            💛
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
