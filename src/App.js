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
  const [weatherToday, setWeatherToday] = useState({});
  const [weatherForecast, setWeatherForecast] = useState({});

  async function get5DayData() {
    const response = await fetch(
      `${api.base_5_day}${cityName}&units=metric&APPID=${api.key}`
    );
    const data_5_day = await response.json();
    if (data_5_day) {
      setWeatherForecast(data_5_day);
    }
  }

  async function getTodayData() {
    const response = await fetch(
      `${api.base_today}${cityName}&units=metric&APPID=${api.key}`
    );
    const data_today = await response.json();
    if (data_today) {
      setWeatherToday(data_today);
    }
  }

  useEffect(() => {
    get5DayData();
    getTodayData();
  }, []);

  return (
    <section className="main__section">
      <Box data={weatherToday} />
      <input onKeyPress={getTodayData}></input>
    </section>
  );
}

export default App;
