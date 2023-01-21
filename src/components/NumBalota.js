import React from "react";

export const NumBalota = ({ el, jugador, setJugador }) => {
  const { id, select } = el;
  const handleSelect = (id) => {
    let newJugador = jugador.map(el=> el.id===id ? {...el,select: select? false: true}: el)
    setJugador(newJugador);
  };

  return (
    <div
      onClick={()=>handleSelect(id)}
      className={select ? "carton-nums-balota selected" : "carton-nums-balota"}   
    >
      {id}
    </div>
  );
};
