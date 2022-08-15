import React, {useState, useEffect} from 'react'

const Weather = () => {
    const url = 'http://api.weatherapi.com/v1/current.json?key=e751ea9cf5bc4fcbbb3225428211810&q=maua&lang=pt';
    const [weather, setWeather] = useState()
    useEffect(()=>{
        const getHttp = async () => {
            const response = await fetch(url)

            const dataWeather = await response.json();

            setWeather(dataWeather)

            console.log(weather);
        }
        getHttp()
    },[weather])
  return (
    <div>
      weather
    </div>
  )
}

export default Weather
