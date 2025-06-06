import React from "react";
import styled from "styled-components";

const StyledCheckout = styled.section`
  border: 1px solid black;
`;

export const Checkout = ({ articulos }) => {
  return (
    <StyledCheckout>
      <h2>Checkout</h2>
      {articulos.map((articulo) => (
        <>
          <h2>{articulo.name}</h2>
          <p>{articulo.precio}</p>
        </>
      ))}
    </StyledCheckout>
  );
};
