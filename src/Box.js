import React, { useState, useRef } from "react";

const Box = ({ data }) => {
  console.log(data);

  return (
    <div className="box">
      <div className="box__heading">
        <h3>Monday</h3>
        <h3>3 May</h3>
      </div>
      <div className="box__body">
        <h3>{data.name}</h3>
        <div className="weather__data">
          {/*
            <h2>{Math.round(data.main.temp)}</h2>
            IZNAD GORE DATA.NAME RADI A OVDJE NECE OVO
*/}
        </div>
        <span>Sunny</span>
      </div>
      <div className="box__footer">
        <span>I</span>
        <span>I</span>
        <span>I</span>
      </div>
    </div>
  );
};

export default Box;
