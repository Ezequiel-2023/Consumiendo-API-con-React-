import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./ListaDeAves.scss";

const ListaDeAves = () => {
  const [recordings, setRecordings] = useState([]);

  useEffect(() => {
    axios
      .get("https://xeno-canto.org/api/2/recordings?query=cnt:guatemala")
      .then((response) => {
        setRecordings(response.data.recordings);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="bird-list">
      <h1>Aves De Guatemala</h1>
      <ul>
        {recordings.map((recording) => (
          <li key={recording.id}>
            <Link to={`/details/${recording.id}`}>
              <p>{"Familia: " + recording.gen}</p>
              <p>{"Nombre: " + recording.en}</p>
              <p>{"Ubicacion: " + recording.loc}</p>
              <p>{"Descubridor: " +recording.rec}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaDeAves;
