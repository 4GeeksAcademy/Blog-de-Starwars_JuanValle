import { useParams, useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import swImage from "../assets/img/sw.jpg";

export const Single = () => {
  const { uid } = useParams();
  const location = useLocation();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  // Detectar tipo desde la ruta
  const type = location.pathname.split("/")[1];

  useEffect(() => {
    const URL = `https://www.swapi.tech/api/${type}/${uid}`;

    const fetchData = async () => {
      try {
        const res = await fetch(URL);
        if (!res.ok) throw new Error("No se pudo obtener el recurso.");
        const json = await res.json();
        setData(json.result);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, [type, uid]);

  if (error) return <p className="text-danger">Error: {error}</p>;
  if (!data) return <p>Cargando...</p>;

  return (
    <div className="container text-center mt-5">
      <img
        src={swImage}
        alt="Star Wars"
        className="img-fluid mb-4"
        style={{ maxHeight: "400px", objectFit: "cover" }}
      />
      <h1 className="display-4">{data.properties.name || "Sin nombre"}</h1>
      <hr className="my-4" />

      <div className="text-start">
        {Object.entries(data.properties).map(([key, value]) => (
          <p key={key}>
            <strong>{key.replace(/_/g, " ")}:</strong> {String(value)}
          </p>
        ))}
      </div>

      <Link to="/" className="btn btn-primary mt-4">
        Back home
      </Link>
    </div>
  );
};
