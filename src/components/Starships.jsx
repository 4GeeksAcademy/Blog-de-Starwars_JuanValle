import { useEffect, useState } from 'react';
import Card from './Card';

function Starships() {
  const [starships, setStarships] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const URL_BASE = 'https://www.swapi.tech/api/starships';

    (async () => {
      try {
        const res = await fetch(URL_BASE);
        if (!res.ok) throw new Error('No se puede mostrar la nave');
        const data = await res.json();
        setStarships(data.results);
      } catch (err) {
        setError(err.message);
      }
    })();
  }, []);

  return (
  <div className="container py-4">
    {error && <p style={{ color: 'red' }}>Error: {error}</p>}

    <div className="scroll-container d-flex overflow-auto gap-3">
      {starships.map((item) => (
        <Card
          key={item.uid}
          name={item.name}
          uid={item.uid}
          type="starships"
          onAddToFavorites={() => console.log('Favorito:', item.name)}
        />
      ))}
    </div>
  </div>
);

}

export default Starships;
