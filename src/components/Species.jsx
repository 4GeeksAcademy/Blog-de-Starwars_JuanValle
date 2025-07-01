import { useEffect, useState } from 'react';
import Card from './Card';

function Species() {
  const [species, setSpecies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const URL_BASE = 'https://www.swapi.tech/api/species';

    (async () => {
      try {
        const res = await fetch(URL_BASE);
        if (!res.ok) throw new Error('No se puede mostrar la especie');
        const data = await res.json();
        setSpecies(data.results);
      } catch (err) {
        setError(err.message);
      }
    })();
  }, []);

  return (
  <div className="container py-4">
    {error && <p style={{ color: 'red' }}>Error: {error}</p>}

    <div className="scroll-container d-flex overflow-auto gap-3">
      {species.map((item) => (
        <Card
          key={item.uid}
          name={item.name}
          uid={item.uid}
          type="species"
          onAddToFavorites={() => console.log('Favorito:', item.name)}
        />
      ))}
    </div>
  </div>
);

}

export default Species;
