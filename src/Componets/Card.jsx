import React from "react";
import { useWeather } from "../Context/Weather";
const Card = () => {
  const weather = useWeather();
  return (
    <div className="Card-Weather">
      <h1 style={{ color: "whitesmoke" }}>Weather card</h1>
      {weather?.data ? (
        <>
          <img
            src={weather?.data?.current.condition?.icon}
            alt={weather?.data?.condition?.text}
          />
          <h2>
            {weather?.data?.current?.temp_c}°C, {weather?.data?.current?.temp_f}
            °F
          </h2>
          <h2 style={{color:'white',fontSize:'0.9rem'}} >Fells like: <span style={{color:'white',fontSize:'0.9rem'}}>{weather?.data?.current.feelslike_c}°C,{weather?.data?.current.feelslike_f}°F</span></h2>
          <h5>Max-{weather?.data?.forecast?.forecastday?.[0].day?.maxtemp_c}
          °C</h5>
          <h5>
            📍{weather?.data?.location?.name}, {weather?.data?.location?.region}
            <br />
            {weather?.data?.location?.country}
          </h5>
          <div className="condition">
            <div className="weather-condition">
              <p className="text1">{weather?.data?.current.condition?.text}</p>
            </div>
            <div className="air-condtion">
              <p className="text2">💨{weather?.data?.current.wind_kph}km/h</p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="loader">
            <div className="loaderMiniContainer">
              <div className="barContainer">
                <span className="bar"></span>
                <span className="bar bar2"></span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 101 114"
                className="svgIcon"
              >
                <circle
                  stroke-width="7"
                  stroke="black"
                  transform="rotate(36.0692 46.1726 46.1727)"
                  r="29.5497"
                  cy="46.1727"
                  cx="46.1726"
                ></circle>
                <line
                  stroke-width="7"
                  stroke="black"
                  y2="111.784"
                  x2="97.7088"
                  y1="67.7837"
                  x1="61.7089"
                ></line>
              </svg>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
