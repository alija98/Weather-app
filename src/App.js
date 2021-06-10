import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import Box from "./Box";

const api = {
  key: "882c9ebd1015abd13a008e463715353e",
  base_5_day: "https://api.openweathermap.org/data/2.5/forecast?q=",
  base_today: "https://api.openweathermap.org/data/2.5/weather?q=",
};

function App() {
  const [cityName, setCityName] = useState("Mostar");
  const [weatherToday, setWeatherToday] = useState({
    name: "",
    main: {},
    weather: [{}],
  });

  const [weatherForecast, setWeatherForecast] = useState({
    city: {},
  });

  function get5DayData() {
    fetch(`${api.base_5_day}${cityName}&units=metric&APPID=${api.key}`)
      .then((response) => response.json())
      .then((data) => setWeatherForecast(data));
  }

  function getTodayData() {
    fetch(`${api.base_today}${cityName}&units=metric&APPID=${api.key}`)
      .then((response) => response.json())
      .then((data) => setWeatherToday(data));
  }

  useEffect(() => {
    get5DayData();
    getTodayData();
  }, []);

  return (
    <section className="main__section">
      <Box weatherToday={weatherToday} />
      <Box weatherForecast={weatherForecast} />
      <span></span>
    </section>
  );
}

export default App;
