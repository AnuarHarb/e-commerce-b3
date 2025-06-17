import React, { useState } from "react";
import styled from "styled-components";

const StyledCard = styled.article`
  border: 1px solid black;
  width: 300px;
  display: flex;
  flex-direction: column;
  border-radius: 4px;

  .card-img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

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

  .botones {
    display: flex;
    justify-content: center;
  }
`;

export const Card = ({ titulo, descripcion, precio, url, articulos, setArticulos }) => {
  
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
    
    setEnCarrito(true);  //cambia estado de esta card

    const nuevoArticulo = {  //creamos nuevo producto con la info de la card
      titulo: titulo, 
      descripcion: descripcion, 
      precio: precio,
      cantidad: cuenta,
      subtotal: precio * cuenta
    };
    
    //buscamos si el articulo ya está en el carrito
    const articuloEnCarrito = articulos.filter( (item)=> item.titulo === nuevoArticulo.titulo)

    if(articuloEnCarrito.length >= 1){ // si encontró al menos 1

      //array cant reemplazando
      const arrayNuevaCantidad = articulos.map( (articulo) => {
        
        if (articulo.titulo === nuevoArticulo.titulo ) { // si ya está en el carrito
          return {    //retorna el articulo con la cantidad actualizada
            ...articulo,  //operador de destructuracion
            cantidad: cuenta,
            subtotal: articulo.precio * cuenta
          };
        } else { // si no está en el carrito
          return articulo;  //retorna el articulo sin cambios
        }
      })

      setArticulos(arrayNuevaCantidad); //actualiza el carrito con cantidad actualizada para card
    }else{
      //si el articulo no está en el carrito, agregalo al carrito
      setArticulos((prev) => [...prev, nuevoArticulo]); 
    }
    
  };

  const quitarDelCarrito = () => {
    setEnCarrito(false);
    //quitamos el articulo del carrito
    const enCarritoFiltrado = articulos.filter((articulo) => articulo.titulo !== titulo);
    setArticulos(enCarritoFiltrado); //actualizamos el estado con la nueva lista
  }

  return (
    <StyledCard>
      <img className="card-img" src={url}></img>
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

          <div className="botones">
            {enCarrito ? 
            <button onClick={() => quitarDelCarrito()}>Quitar del carrito</button>
            :
            <button onClick={() => añadirAlCarrito()}>Añadir al carrito</button>
          }
          </div>
          
        </div>
        
      </div>
    </StyledCard>
  );
};
