import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import Box from "./Box";

const api = {
  key: "882c9ebd1015abd13a008e463715353e",
  base_5_day: "https://api.openweathermap.org/data/2.5/forecast?q=",
  base_today: "https://api.openweathermap.org/data/2.5/weather?q=",
};

function App() {
  const [loading, setLoading] = useState(false);
  const [cityName, setCityName] = useState("Mostar");
  const [weatherToday, setWeatherToday] = useState({});
  const [weatherForecast, setWeatherForecast] = useState({});

  function get5DayData() {
    setLoading(true);
    const response = fetch(
      `${api.base_5_day}${cityName}&units=metric&APPID=${api.key}`
    );
    const data_5_day = response.json();
    if (data_5_day) {
      setWeatherForecast(data_5_day);
    }
    setLoading(false);
  }

  function getTodayData() {
    setLoading(true);
    const response = fetch(
      `${api.base_today}${cityName}&units=metric&APPID=${api.key}`
    );
    const data_today = response.json();
    if (data_today) {
      setWeatherToday(data_today);
    }
    setLoading(false);
  }

  useEffect(() => {
    get5DayData();
    getTodayData();
  }, []);
  if (!weatherToday) {
    return null;
  }
  return (
    <section className="main__section">
      <Box weatherToday={weatherToday ? weatherToday : ""} loading={loading} />
    </section>
  );
}

export default App;
