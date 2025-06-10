import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StyledCheckout = styled.section`
  border: 1px solid black;

  .articulo-en-carrito {
    display: flex;
    gap: 20px;
    align-items: center;
  }
`;

const articulos = {
  nombre: "tenis",
  precio: "400",
  cantidad: 3,
};

export const Checkout = ({ articulos }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    calcularTotal();
  }, [articulos]);

  const calcularTotal = () => {
    setTotal(0);
    const totalPorArticulo = articulos.map(
      (articulo) => Number(articulo.precio) * Number(articulo.cantidad)
    );

    for (let i = 0; i < totalPorArticulo.length; i++) {
      setTotal((prev) => prev + totalPorArticulo[i]);
    }

    return total;
  };

  return (
    <StyledCheckout>
      <h2>Checkout</h2>
      {articulos.map((articulo) => (
        <article key={articulo.nombre} className="articulo-en-carrito">
          <h2>{articulo.nombre}</h2>
          <p>{articulo.cantidad}</p>
          <p>${articulo.precio}</p>
        </article>
      ))}

      <div>
        <h2>total: ${total}</h2>
      </div>
    </StyledCheckout>
  );
};
