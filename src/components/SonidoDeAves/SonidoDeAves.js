import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./SonidoDeAves.scss";

const SonidoDeAves = () => {
  const { id } = useParams();
  const [recording, setRecording] = useState(null);

  useEffect(() => {
    axios
      .get("https://xeno-canto.org/api/2/recordings?query=cnt:guatemala")
      .then((response) => {
        const result = response.data.recordings.find((rec) => rec.id === id);
        setRecording(result);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

  if (!recording) return <p>Cargando...</p>;

  return (
    <div className="bird-details">
      <h1>{recording.en}</h1>
      <p>Descubridor: {recording.rec}</p>
      <audio controls>
        <source src={recording.file} type="audio/mpeg" />
        Su navegador no soporta el elemento de audio
      </audio>
      <Link to="/ListaDeAves">Regresar a la lista</Link>
    </div>
  );
};

export default SonidoDeAves;
