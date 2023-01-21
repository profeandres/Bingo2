import React from "react";
import '../styles/switchtoogle.css'
export const SwitchToogle = ({ handleSwitch, able }) => {
  return (
    <label  onClick={able ? handleSwitch : ()=>{}} className="switch">
      {able ?<input  type="checkbox" />: <input disabled type="checkbox" />}
      <span className="slider round"></span>
    </label>
  );
};
