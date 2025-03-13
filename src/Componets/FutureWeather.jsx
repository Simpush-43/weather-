import React from "react";
import { useState, useEffect } from "react";
import { useWeather } from "../Context/Weather";
const FutureWeather = () => {
  const weather = useWeather();
  const { data } = weather;
  useEffect(() => {
    getUserLocation();
  }, []);
  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log("user location", latitude, latitude);
        },
        (error) => {
          console.log("Error in getting location", error);
        }
      );
    } else {
      console.log("Geolaction not supported here");
    }
  };
    // Function to get the next 5 hourly forecasts
    const getHourlyForecast = () => {
      if (!data?.forecast?.forecastday || data.forecast.forecastday.length === 0) {
        return []; // Return empty array if no forecast data
      }
  
      const hours = data.forecast.forecastday[0].hour;
      if (!hours || hours.length === 0) return [];
  
      const currentHour = new Date().getHours(); // Get current hour in 24-hour format
  
      // Find the index of the first hour >= currentHour
      let startIndex = hours.findIndex(hour => new Date(hour.time).getHours() >= currentHour);
  
      if (startIndex === -1) {
        startIndex = 0; // If not found, start from beginning
      }
  
      return hours.slice(startIndex+1, startIndex + 5); // Get current + next 4 hours
    };
  
    const hourlyData = getHourlyForecast();
  return (
    <div className="Future-weather">
      {weather?.data && hourlyData.length >0 ? (
        <>
        <div className="Houlry-day">
        {/* hourly data  */}
            {hourlyData.map((hourData,index)=>(
              <div key={index} className="weather-card">
            <h3 className="title">{hourData?.time}</h3>
            <div className="weather-icon">
<img loading="lazy" className="Weather" src={hourData?.condition?.icon} alt={hourData?.condition.text} />
              <h4 className="temperature">{hourData?.temp_c}°C</h4>
            </div>
            <div className="weather-info">
              <p>{hourData?.condition.text}</p>
              <p>{hourData?.humidity}% humidity</p>
            </div>
</div>
            ))
            }
          </div>

        </>
      ) : (
        <div class="loading"></div>
      )}
    </div>
  );
};

export default FutureWeather;
