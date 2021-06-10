import React, { useState, useRef } from "react";

const Box = ({ weatherToday, weatherForecast }) => {
  console.log(weatherForecast);
  if (weatherToday) {
    return (
      <div className="box">
        <div className="box__heading">
          <h3>Monday</h3>
          <h3>1 June</h3>
        </div>
        <div className="box__body">
          <h3>{weatherToday.name}</h3>
          <h2>{Math.round(weatherToday.main.temp)}</h2>
          <h2>ICON</h2>
          <div className="weather__data">
            <span>{weatherToday.weather[0].description}</span>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="box">
        <div className="box__heading">
          <h3>Monday</h3>
          <h3>1 June</h3>
        </div>
        <div className="box__body">
          <h3>{weatherForecast.city.name}</h3>
          {
            //<h3>{weatherForecast.list[7].main.temp}</h3>
          }
          <h2>ICON</h2>
          <div className="weather__data">
            {
              //<span>{weatherForecast.list[7].weather[0].description}</span>
            }
          </div>
        </div>
      </div>
    );
  }
};

export default Box;
