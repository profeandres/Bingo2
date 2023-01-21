import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/inicio.css"
const Inicio = () => {
  return (
    <div className="bingo-ui-ini">
            <h1> Galaxy Bingo</h1>
            <Link to={"/game"}>Comenzar</Link>
            <Link to={"/record"}>Puntajes</Link>
            <Link to={"/rules"}>Reglas</Link>
    </div>
  )
}

export default Inicio