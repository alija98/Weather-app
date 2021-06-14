import React, { useState, useRef } from "react";

const Box = ({
  cityName,
  temperatureToday,
  descriptionToday,
  temperatureTomorrow,
  temperatureAfterTomorrow,
  descriptionTomorrow,
  descriptionAfterTomorrow,
  imageToday,
  imageTomorrow,
  imageAfterTomorrow,
  day,
  date,
}) => {
  const temperature =
    temperatureToday || temperatureTomorrow || temperatureAfterTomorrow;
  const description =
    descriptionToday || descriptionTomorrow || descriptionAfterTomorrow;
  const image = imageToday || imageTomorrow || imageAfterTomorrow;

  return (
    <div className="box">
      <div className="box__heading">
        <h5>{day}</h5>
        <h5>{date}</h5>
      </div>
      <h2 className="city__name">{cityName}</h2>
      <div className="box__body">
        <h2>{temperature}°C</h2>
        <img
          src={`http://openweathermap.org/img/wn/${image}@2x.png`}
          alt="weather"
        />
      </div>
      <div className="weather__data">
        <span>{description}</span>
      </div>
    </div>
  );
};

export default Box;
