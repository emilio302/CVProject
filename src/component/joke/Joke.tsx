import React, { useState, useEffect  } from "react";
import { Settings } from "lucide-react";
import profilePic from "./profile.svg";
import { getPost } from './getJoke.ts';

import "./Joke.css";

const Joke = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false); // Estado inicial de carga en falso
  const [error, setError] = useState(null);

  // Función para obtener datos de la API
  const fetchData = async () => {
    setLoading(true); // Iniciar la carga
    setError(null);   // Reiniciar el error en caso de un nuevo intento
    try {
      const postData = await getPost(1); // Llamada a la API con el id 1
      setData(postData); // Almacena los datos
    } catch (error) {
      setError((error as Error).message); // Captura el error
    } finally {
      setLoading(false); // Finaliza la carga
    }
  };

  // Llamar a fetchData cuando el componente se monta
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {loading && <p>Cargando...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && data && (
        <div>
          <p>{data}</p>
        </div>
      )}
      
      {/* Botón para volver a hacer la llamada a la API */}
      <button onClick={fetchData} disabled={loading}>
        {loading ? 'Cargando...' : 'Volver a cargar'}
      </button>
    </div>
  );
};

export default Joke;
