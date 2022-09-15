import React from 'react';
import { IWeather } from '../../types';

import './Weather.css';

const image = require('../../assets/sky.png');

const Weather = (weather: IWeather) => {
  return (
    <>
      <div className="weather-name">{weather.name}</div>
      <div className="weather-container">
        <div className="weather-main-col">
          <img className="weather-image" src={image} alt="weather" />
          <div className="weather-temp">{weather.main.temp}°C</div>
        </div>
        <div className="weather-details-col">
          <div className="weather-detail">
            Sensed <br />
            {weather.main.feels_like}°C
          </div>
          <div className="weather-detail">
            Min <br />
            {weather.main.temp_min}°C
          </div>
          <div className="weather-detail">
            Max <br />
            {weather.main.temp_max}°C
          </div>
          <div className="weather-detail">
            Wind <br />
            {weather.wind.speed}mph
          </div>
          <div className="weather-detail">
            Humidity <br />
            {weather.main.humidity}%
          </div>
          <div className="weather-detail">
            Description
            {weather.weather.map((val) => {
              return <div>{val.description}</div>;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
