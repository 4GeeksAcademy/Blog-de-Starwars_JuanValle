import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export function Navbar() {
  const { store, dispatch } = useGlobalReducer();

  const handleRemove = (uid, type) => {
    dispatch({
      type: "remove_favorite",
      payload: { uid, type }
    });
  };

  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <Link to="/" className="navbar-brand">StarWars Blog</Link>

      <div className="dropdown">
        <button
          className="btn btn-warning dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          💛 Favoritos ({store.favorites.length})
        </button>
        <ul className="dropdown-menu dropdown-menu-end">
          {store.favorites.length === 0 ? (
            <li className="dropdown-item text-muted">Sin favoritos</li>
          ) : (
            store.favorites.map((fav) => (
              <li key={`${fav.type}-${fav.uid}`} className="dropdown-item d-flex justify-content-between align-items-center">
                <Link to={`/${fav.type}/${fav.uid}`} className="text-decoration-none">
                  {fav.name}
                </Link>
                <button
                  className="btn btn-sm btn-outline-danger ms-2"
                  onClick={() => handleRemove(fav.uid, fav.type)}
                >
                  ❌
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </nav>
  );
}
