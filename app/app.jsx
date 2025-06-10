import React, { useState } from "react";
import { Card } from "./components/card";
import { Checkout } from "./components/checkout";
import styled from "styled-components";

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

  return (
    <AppContainer>
      <header>
        <h1>My React app - {articulos.length}</h1>
      </header>

      <div className="main-container">
        <section className="card-container">
          <Card
            titulo="Nike Air Force 1 '07"
            descripcion="Cómodas, duraderas y atemporales: son las número 1 por una razón. El diseño clásico de los 80 se combina con piel lisa y detalles llamativos para conseguir un estilo perfecto tanto en la cancha como fuera de ella."
            precio="119000"
            setArticulos={setArticulos}
          />
          <Card
            titulo="Air Max 95 OG"
            descripcion="Grandes. Llamativas. Reactivas. Celebra el 30 aniversario de un modelo icónico con la edición Big Bubble de estas Air Max del 95. Estas zapatillas se mantienen fieles a las originales y añaden altura en la parte superior con unas capas de piel sintética y malla transpirable en forma de onda que van cambiando de negro a blanco. Los toques de color bright mandarin dan el extra perfecto en las presillas de los cordones, los logotipos y las unidades Air. Eleva tu estilo con más Air todavía y disfruta del futuro con tu experiencia Air Max."
            precio="189000"
            setArticulos={setArticulos}
          />
          <Card
            titulo="Nike Pegasus 41"
            descripcion="La amortiguación reactiva de las Pegasus ofrece una pisada enérgica para el running diario sobre asfalto. Gracias a las unidades Air Zoom dobles y la mediasuela de espuma ReactX, disfrutarás de un retorno de energía con mayor ligereza. La malla Engineered Mesh mejorada de la parte superior reduce el peso y aumenta la transpirabilidad."
            precio="149000"
            setArticulos={setArticulos}
          />
        </section>
        <Checkout articulos={articulos} />
      </div>
    </AppContainer>
  );
};

export default App;
