import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/rules.css";
import { ImForward, ImReply } from "react-icons/im";
import db from "../db/bingo.json";

const Rules = () => {
  const [page, setPage] = useState(0);

  const handlePage = (num) => {
    if (page + num === db.rules.length) {
      setPage(0);
    } else if (page + num < 0) {
      setPage(db.rules.length - 1);
    }else{
      setPage(num + page);
    }  
  };

  return (
    <div className="bingo-ui-rul">
      {
        db.rules[page].text.map((el,index)=><p key = {index} >{el}</p>)
      }

      <div className="bingo-ui-rul-btn">
        <Link to="/">Volver</Link>
        <div>
          {
            page !== 0 &&
            <button onClick={() => handlePage(-1)}>
            <ImReply />
          </button>
          }

{
          page !== db.rules.length-1 &&
          <button onClick={() => handlePage(1)}>
            <ImForward />
          </button>
}
        </div>
      </div>


    </div>
  );
};

export default Rules;
