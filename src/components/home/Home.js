import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.scss";

const Home = () => {
  const navigate = useNavigate();
  const handleLoadBirdList = () => {
    navigate("/ListaDeAves");
  };

  return (
    <div className="home">
      <h1>Inicio</h1>
      <p>Ezequiel Moises Rivera Larios</p>
      <p>23002762</p>
      <button onClick={handleLoadBirdList}>Cargar</button>
    </div>
  );
};

export default Home;
