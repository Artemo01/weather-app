import moment from 'moment';
import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Error from './components/Error/Error';
import Weather from './components/Weather/Weather';
import { IWeather } from './types';

function App() {
  const [weather, setWeather] = useState<IWeather | undefined>();
  const [city, setCity] = useState<string | undefined>('London');
  const weatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=en&units=metric&appid=78c43f897c3f1e36a0daf80f45a51b41`;

  const cityRef = useRef<HTMLInputElement>(null);

  const getCity = () => {
    cityRef.current?.value !== '' && setCity(cityRef.current?.value);
  };

  useEffect(() => {
    fetch(weatherApi)
      .then((response) => response.json())
      .then((json) => setWeather(json));
  }, [weatherApi]);

  console.log(typeof weather);

  return (
    <div className="weather-wrapper">
      <div className="weather-nav">
        <div className="weather-location">
          <div className="weather-city">{city}</div>
          <div className="weather-date">{moment().format('dddd Do MMMM')}</div>
        </div>
        <div className="weather-wearch-menu">
          <input className="weather-input" ref={cityRef} />
          <button className="weather-search" onClick={getCity}>
            Search
          </button>
        </div>
      </div>
      <hr />
      {weather?.cod === 200 ? <Weather {...weather} /> : <Error {...weather} />}
    </div>
  );
}

export default App;
