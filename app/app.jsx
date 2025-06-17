import React, { useState } from "react";
import { Card } from "./components/card";
import { Checkout } from "./components/checkout";
import styled from "styled-components";
import { listaProductos } from "../products.js";

const AppContainer = styled.section`
  .main-container {
    display: flex;
    width: 100%;
  }

  .card-container {
    width: 70vw;
    border: 1px dashed blue;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
  }

  .checkout-container {
    width: 30vw;
    border: 1px solid black;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;


const App = () => {

  //estado de la lista de articulos del carrito
  const [articulos, setArticulos] = useState([]);

  return (
    <AppContainer>
      <h1>My React app</h1>

      <div className="main-container">
        <section className="card-container">
          {
            listaProductos.map( (item)=>{
              return (
              <Card
                titulo={item.titulo}
                descripcion={item.descripcion}
                precio={item.precio}
                url={item.url}
                articulos={articulos}
                setArticulos={setArticulos}
              /> )
            } )
          }
        </section>
        <Checkout articulos={articulos} className="checkout-container"/>
      </div>
    </AppContainer>
  );
};

export default App;
