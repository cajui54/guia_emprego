import React, {useState, useEffect} from 'react'
import Weathers from './weatherStyled'


const Weather = ({city}) => {
  const apiKey = '79f89f825113a45e86f7ed7bdce33a99';
  const urlWeather = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;
  const [data, setData] = useState('');

  useEffect(() => {

    const getHttp = async () => {
      const response = await fetch(urlWeather);

      const data = await  response.json();

      setData(data);
    }
    getHttp();

  },[urlWeather]);

  return (
    <Weathers>
      {
        data && (
          <ul>
          <li>
            <i className="fa-solid fa-location-dot"></i>
            <span>{data.name}</span>
          </li>
          <li>
            <i className="fa-solid fa-temperature-half"></i>
            <span>{parseInt(data.main.temp)}°</span>
          </li>

          <li className='description'>
            <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt="icon"/>
            <span>{data.weather[0].description}</span>
          </li>

          <li className='humidity'>
            <span>
              <i className="fa-solid fa-droplet"></i>
              {data.main.humidity}%
            </span>
  
            <span>
              <i className="fa-solid fa-wind"></i>
              {data.wind.speed}km/h
            </span>
          </li>
      
        </ul>

        )
      }
    
    </Weathers>
  )
}

export default Weather
