import React, { useEffect, useState } from "react";
import dbJson from "../db/bingo.json";
import "../styles/game.css";
import { nuevoCarton } from "../helpers/nuevoCarton";
import { NumBalota } from "../components/NumBalota";

const Game = () => {
  const [con, setCon] = useState(0);
  // const [auto, setAuto] = useState(false);
  const [bal, setBal] = useState(null);
  const [jugador, setJugador] = useState(null);
  const [rival, setRival] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false);

  // const handleSelect = () => {
  //   if (select) {
  //     setSelect(false);
  //   } else {
  //     setSelect(true);
  //   }
  // };

  const bingo = () => {
    for (let i = 0; i < jugador.length; i++) {
      console.log(jugador[i]);
      if (!jugador[i].select) {
        alert(`Te falta marcar la balota ${jugador[i].id}`);
        return;
      }
      if (!db.balotas[jugador[i].id - 1].out) {
        alert(`La balota ${jugador[i].id} aún no ha salido`);
        return;
      }
    }
    setGameOver(true);
    setWin(true);
  };

  const db = dbJson;
  const handleBalota = () => {
    let id = 0;
    if (con === 75) return;
    while (id === 0 || id > 75 || db.balotas[id - 1].out) {
      id = Math.floor(Math.random() * 75) + 1;
    }
    db.balotas[id - 1].out = true;
    setCon(con + 1);
    setBal(db.balotas[id - 1]);
    rivalVer(id);
  };

  const rivalVer = (id) => {
    let rival2 = rival.map((el) =>
      el.id === id ? { ...el, select: true } : el
    );
    setRival(rival2);
  };

  // const handleAuto = () => {
  //   if (auto) setAuto(false);
  //   if (!auto) setAuto(true);
  // };

  useEffect(() => {
    setJugador(nuevoCarton());
    setRival(nuevoCarton());
    setGameOver(false);
    setCon(0);
    setBal(null);
    setWin(false);
  }, []);

  const handleKey = (e) => {
    if (e.key === "n") {
      handleBalota();
    }
  };

  useEffect(() => {
    if (con === 75) setGameOver(true);
    if(con>0){
      for(let i=0;i<rival.length;i++){
        if(!db.balotas[rival[i].id-1].out){
          return
        }
      }
      setGameOver(true)
    }
  }, [con]);

  return (
    <div className="bingo-ui-gm" onKeyDown={handleKey} tabIndex={0}>
      {gameOver && (
        <div className="gameover">
          <h1>JUEGO TERMINADO</h1>
          {win && (
            <div>
              <img
                src="https://www.gifss.com/fuego/artificiales/images/fuegos-artificiales-05.gif"
                alt=""
              />
              <img
                src="https://www.gifss.com/fuego/artificiales/images/fuegos-artificiales-05.gif"
                alt=""
              />
              <img
                src="https://www.gifss.com/fuego/artificiales/images/fuegos-artificiales-05.gif"
                alt=""
              />
              <img
                src="https://www.gifss.com/fuego/artificiales/images/fuegos-artificiales-05.gif"
                alt=""
              />
            </div>
          )}
          <p>
            {win
              ? "Felicitaciones has ganado la partida"
              : "Lo siento, has perdido"}
          </p>
          {win && (
            <div>
              <img
                src="https://www.gifss.com/fuego/artificiales/images/fuegos-artificiales-05.gif"
                alt=""
              />
              <img
                src="https://www.gifss.com/fuego/artificiales/images/fuegos-artificiales-05.gif"
                alt=""
              />
              <img
                src="https://www.gifss.com/fuego/artificiales/images/fuegos-artificiales-05.gif"
                alt=""
              />
              <img
                src="https://www.gifss.com/fuego/artificiales/images/fuegos-artificiales-05.gif"
                alt=""
              />
            </div>
          )}
          <a href="/"> Volver Al Menu</a>
          <a href="/game"> Jugar de nuevo</a>
        </div>
      )}
      <div className="game-container">
        <h1>GALAXY BINGO</h1>

        <div className="bingo-ui-gm-balotas">
          {db.balotas.map((el, index) => {
            return (
              <div className={el.out ? "balota on" : "balota"} key={index}>
                {el.id}
              </div>
            );
          })}
        </div>

        <button onClick={handleBalota}>Nueva Balota</button>
        {/* <SwitchToogle handleSwitch={handleAuto} able={con>0 ? true: false}/>
        <span>Automático</span> */}
      </div>

      <div className="newBalota-container">
        <h2>Última Balota</h2>
        <div className="newBalota-idlet">
          <span>{bal?.id}</span>
          <span className="newBalota-text">{bal?.letter}</span>
        </div>
      </div>

      <div className="bingo-cartones">
        <div className="carton jugador">
          <div className="carton-title">Jugador</div>
          <div className="carton-nums">
            <div className="bingo-win" onClick={bingo}>
              BINGO
            </div>
            {jugador &&
              jugador.map((el, index) => (
                <NumBalota
                  key={index}
                  el={el}
                  setJugador={setJugador}
                  jugador={jugador}
                />
              ))}
          </div>
        </div>

        <div className="carton rival">
          <div className="carton-title">Rival</div>
          <div className="carton-nums">
            {rival &&
              rival.map((el, index) => {
                return <NumBalota key={index} el={el} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
