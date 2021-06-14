import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import Box from "./Box";

const api = {
  key: "6ca0b498f0fec56b7af4fd7f50c36eac",
  base_5_day: "https://api.openweathermap.org/data/2.5/forecast?q=",
  base_today: "https://api.openweathermap.org/data/2.5/weather?q=",
};

const dayBuilder = (d) => {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[d.getDay()];
  return `${day}`;
};

const dateBuilder = (d) => {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let date = d.getDate();
  let month = months[d.getMonth()];

  return ` ${date} ${month}`;
};
//seting today, tomorrow and aftertomorrow dates
const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);
const afterTomorrow = new Date(today);
afterTomorrow.setDate(afterTomorrow.getDate() + 2);

function App() {
  const [searchTerm, setSearchTerm] = useState("Mostar");
  const [cityName, setCityName] = useState("");
  const [temperatureToday, setTemperatureToday] = useState("");
  const [temperatureTomorrow, setTemperatureTomorrow] = useState("");
  const [temperatureAfterTomorrow, setTemperatureAfterTomorrow] = useState("");
  const [descriptionToday, setDescriptionToday] = useState("");
  const [descriptionTomorrow, setDescriptionTomorrow] = useState("");
  const [descriptionAfterTomorrow, setDescriptionAfterTomorrow] = useState("");
  const [imageToday, setImageToday] = useState("");
  const [imageTomorrow, setImageTomorrow] = useState("");
  const [imageAfterTomorrow, setImageAfterTomorrow] = useState("");
  //fetching data for tomorrow and after tomorrov
  function get5DayData() {
    const search = searchTerm ? searchTerm : "a";
    fetch(`${api.base_5_day}${search}&units=metric&APPID=${api.key}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.cod !== "404") {
          setCityName(data.city.name);
          setTemperatureTomorrow(Math.round(data.list[7].main.temp));
          setTemperatureAfterTomorrow(Math.round(data.list[15].main.temp));
          setDescriptionTomorrow(data.list[7].weather[0].description);
          setDescriptionAfterTomorrow(data.list[15].weather[0].description);
          setImageTomorrow(data.list[7].weather[0].icon);
          setImageAfterTomorrow(data.list[15].weather[0].icon);
        } else {
        }
      });
  }
  //data for today
  function getTodayData() {
    const search = searchTerm ? searchTerm : "a";
    fetch(`${api.base_today}${search}&units=metric&APPID=${api.key}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        if (data.cod !== "404") {
          setCityName(data.name);
          setTemperatureToday(Math.round(data.main.temp));
          setDescriptionToday(data.weather[0].description);
          setImageToday(data.weather[0].icon);
        } else {
        }
      });
  }
  const FetchData = () => {
    get5DayData();
    getTodayData();
  };

  useEffect(() => {
    FetchData();
  }, []);

  return (
    <section className="app">
      <div className="boxes">
        <Box
          cityName={cityName}
          temperatureToday={temperatureToday}
          descriptionToday={descriptionToday}
          imageToday={imageToday}
          day={dayBuilder(today)}
          date={dateBuilder(today)}
        />
        <Box
          cityName={cityName}
          temperatureTomorrow={temperatureTomorrow}
          descriptionTomorrow={descriptionTomorrow}
          imageTomorrow={imageTomorrow}
          day={dayBuilder(tomorrow)}
          date={dateBuilder(tomorrow)}
        />
        <Box
          cityName={cityName}
          temperatureAfterTomorrow={temperatureAfterTomorrow}
          descriptionAfterTomorrow={descriptionAfterTomorrow}
          imageAfterTomorrow={imageAfterTomorrow}
          day={dayBuilder(afterTomorrow)}
          date={dateBuilder(afterTomorrow)}
        />
      </div>
      <form onSubmit={() => FetchData()}>
        <input
          className="input"
          placeholder="Mostar"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        ></input>
        <button
          onClick={(e) => {
            e.preventDefault();
            FetchData();
          }}
        >
          Search the City
        </button>
      </form>
    </section>
  );
}

export default App;
