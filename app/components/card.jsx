import React, { useState } from "react";
import styled from "styled-components";

const StyledCard = styled.article`
  border: 1px solid black;
  width: 300px;
  display: flex;
  flex-direction: column;
  border-radius: 4px;

  .titulo {
    font-size: 25px;
  }

  img {
    width: 100%;
  }

  .card-descipcion-container {
    padding: 10px;
  }

  .activo {
    background-color: gray;
  }

  .card-checkout-buttons {
    display: flex;
    justify-content: space-between;

    input {
      width: 50px;
    }
  }

  .card-descripcion-truncade {
    height: 50px;
    overflow: hidden;
  }
`;

export const Card = ({ titulo, descripcion, precio, setArticulos }) => {
  const [cuenta, setCuenta] = useState(0);
  const [enCarrito, setEnCarrito] = useState(false);
  const [mostrarDescripcion, setmostrarDescripcion] = useState(false);

  const actualizarCuenta = (tipo) => {
    if (cuenta > 0 && tipo === "resta") {
      setCuenta(cuenta - 1);
    }

    if (tipo === "suma") {
      setCuenta(cuenta + 1);
    }
  };

  const añadirAlCarrito = () => {
    setEnCarrito(true);
    setArticulos([{ name: titulo, precio: precio }]);
  };

  return (
    <StyledCard>
      <img src="/public/zapatos.webp"></img>
      <div className={`card-descipcion-container ${enCarrito ? "activo" : ""}`}>
        <h2 className="titulo">
          {titulo} - {precio}
        </h2>

        {mostrarDescripcion ? (
          <p className="card-descripcion-full">{descripcion}</p>
        ) : (
          <div>
            <p className="card-descripcion-truncade">{descripcion}</p>
            <button onClick={() => setmostrarDescripcion(true)}>
              Ver descripción completa
            </button>
          </div>
        )}

        <div className="card-checkout-buttons">
          <div>
            <button onClick={() => actualizarCuenta("resta")}>-</button>
            <input type="number" value={cuenta} />
            <button onClick={() => actualizarCuenta("suma")}>+</button>
          </div>
          <button onClick={() => añadirAlCarrito()}>Añadir al carrito</button>
        </div>
      </div>
    </StyledCard>
  );
};
