export const initialStore = () => {
  return {
    message: null,
    todos: [],
    favorites: [],
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'add_favorite': {
      const { uid, type, name } = action.payload;
      const exists = store.favorites.some(
        (fav) => fav.uid === uid && fav.type === type
      );
      if (exists) return store;

      return {
        ...store,
        favorites: [...store.favorites, { uid, type, name }],
      };
    }

    case 'remove_favorite': {
      const { uid, type } = action.payload;
      return {
        ...store,
        favorites: store.favorites.filter(
          (fav) => !(fav.uid === uid && fav.type === type)
        ),
      };
    }

    default:
      return store;
  }
}
