import React, { useState, useRef } from "react";

const Box = ({ weatherToday, weatherForecast, loading }) => {
  console.log(weatherToday);

  if (!weatherToday) {
    return null;
  }
  if (loading) {
    return <div className="box">Loading...</div>;
  } else {
    return (
      <div className="box">
        <div className="box">
          <div className="box__heading">
            <h3>Monday</h3>
            <h3>1 June</h3>
          </div>
          <div className="box__body">
            {typeof weatherToday != "undefined" ? (
              <h3>{weatherToday.name}</h3>
            ) : (
              ""
            )}
            {typeof weatherToday != "undefined" ? (
              <h2>{Math.round(weatherToday.main.temp)}</h2>
            ) : (
              ""
            )}

            <div className="weather__data"></div>
          </div>
        </div>
      </div>

      /*
    ----- 
----   <h2>{Math.round(weatherToday.main.temp)}</h2>


            {typeof weatherToday != "undefined" ? (
              <div className="box">
           
  <div className="box__heading">
                <h3>Monday</h3>
                <h3>3 May</h3>
              </div>
              <div className="box__body">
                <h3>{weatherToday.cityName}</h3>
                <div className="weather__data">
              <h2>{Math.round(weatherToday.main.temp)}</h2>
              <span>{weatherToday.weather[0].description}</span>
              </div>
              </div>
              <div className="box__footer">
                <span>I</span>
                <span>I</span>
                <span>I</span>
              </div>
            
            </div>
            ) : (
              "sa"
            )}
          */
    );
  }
};

export default Box;
