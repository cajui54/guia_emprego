import {useState, useEffect} from 'react'

const useWeather = () => {
    const apiKey = '79f89f825113a45e86f7ed7bdce33a99';
    const [inputCity, setInput] = useState('Maua');
    const [weather, setWeather] = useState(null);

    const getCity = (city) => {
        setInput(city)
    }

    let apiWeatherURL;
    
    useEffect(() => {
        const getWeather = async () => {
            apiWeatherURL= `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&units=metric&appid=${apiKey}&lang=pt_br`;
            const response = await fetch(apiWeatherURL);

            const datasWeather = await response.json();

            setWeather(datasWeather);
        }
        getWeather();
    },[apiWeatherURL, inputCity]);
    
    return {weather, getCity};
}

export default useWeather
