import React from "react";
import styled from "styled-components";

const StyledCheckout = styled.section`
  border: 1px solid black;
  width: 100%;

  .articulo {
    border-bottom: 1px solid gray;
    padding: 10px;
  }

  .articulo-fila {
    display: flex;
    justify-content: space-between;
  }

  .titulo {
    font-size: 20px;
    margin-bottom: 6px;
  }

  .total {
    font-size: 20px;
    margin-bottom: 6px;
  }
`;


export const Checkout = ({ articulos }) => {
  let total = 0;
  articulos.forEach((articulo) => {
    total += articulo.subtotal;
  });

  console.log(total)

  return (
    <StyledCheckout>
      <h2>Checkout</h2>
      {articulos.map((articulo, index) => (
        <section className="articulo" key={index}>
          <h3 className="titulo">{index + 1}. {articulo.titulo}</h3>
          <span className="articulo-fila">
            <p>${articulo.precio}</p>
            <p>x{articulo.cantidad}</p>
            <p>${articulo.subtotal}</p>
          </span>
        </section>
      ))}
      <p className="total">Total: ${total}</p>
    </StyledCheckout>
  );
};
