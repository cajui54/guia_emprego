import { useState, useRef } from "react";
import WeatherStyled from "./WeatherStyled";
import useWeather from "../../hooks/useWeather";
import ReactCountryFlag from "react-country-flag"

const Weather = () => {
    const {weather, getCity} = useWeather();
    let [inputCity, setInput] = useState('');


    
    let refInputCity = useRef(null);
    const handleSubmit = (event) => {
        event.preventDefault();
        if(inputCity){
          getCity(inputCity);
          setInput('');
          refInputCity.current.value = '';
        }
        
    }
    
    const checkCity = (datas) => {
      if(datas) {
        if(datas.cod === 200) {
          return true;
        }

      }
    }

  return (
    <WeatherStyled>
        <form onSubmit={handleSubmit}>
        <div>
            <input type="text"
            ref={refInputCity}
             placeholder="Pesquisar Cidade"
             required onBlur={(e) => setInput(e.target.value)}/>
            <button type='submit'>
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>
        </div>
      </form>

      <div className="container-weather">
       {
        checkCity(weather) && (
          <ul>
            <li>
                <ReactCountryFlag countryCode={weather.sys.country} svg/>
                <i className="fa-solid fa-location-dot"></i>
                <span>{weather.name}</span>
                
              </li>

              <li>
                <span>{parseInt(weather.main.temp)}</span>&deg;C
              </li>

              <li>
                <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="" />
                <span>{weather.weather[0].description}</span>
              </li>

              <li>
                <div>
                  <i className="fa-solid fa-droplet"></i>
                  <span>{weather.main.humidity}%</span>
                </div>

                
                <div>
                  <i className="fa-solid fa-wind"></i>
                  <span>{weather.wind.speed} km/h</span>
                </div>
              </li>
          </ul>
        )
       }
      </div>
    </WeatherStyled>
  )
}

export default Weather
