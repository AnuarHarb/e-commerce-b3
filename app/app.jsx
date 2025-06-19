import React, { useState, useEffect } from "react";
import { Card } from "./components/card";
import { Checkout } from "./components/checkout";
import styled from "styled-components";
import { productos } from "../products";

const AppContainer = styled.section`
  .main-container {
    display: flex;
  }

  .card-container {
    display: flex;
    gap: 10px;
  }
`;

const App = () => {
  const [articulos, setArticulos] = useState([]);
  const [productos, setProductos] = useState([])


  const getProductos = async () => {
    const result = await fetch('https://dummyjson.com/products')
    const items = await result.json() 
    console.log(items)
    setProductos(items.products)
  }

  useEffect(() => {
    getProductos()
  }, [])

  return (
    <AppContainer>
      <header>
        <h1>My React app - {articulos.length}</h1>
      </header>

      <div className="main-container">
        <section className="card-container">
          {productos.map((producto) => (
            <Card
              titulo={producto.title}
              descripcion={producto.description}
              precio={producto.price}
              img={producto.images[0]}
              setArticulos={setArticulos}
            />
          ))}
        </section>
        <Checkout articulos={articulos} />
      </div>
    </AppContainer>
  );
};

export default App;
