const urls = {
    getWeatherInfo: (city) => `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_MAP_API_KEY}`
}

export default urls