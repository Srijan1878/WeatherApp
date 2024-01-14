import { useEffect, useState } from "react"
import WeatherLeftPanel from "../components/weatherLeftPanel"
import WeatherForecastDashboard from "../components/weatherForecastDashboard"
import useWeather from "../hooks/useWeather"
import urls from "../urls"
import { Toaster } from 'react-hot-toast';
import _ from "lodash"
import LOCAL_STORAGE_KEYS from "../constants/localStorageKeys"

const Weather = () => {
    const [city, setCity] = useState(localStorage.getItem(LOCAL_STORAGE_KEYS.CITY))
    const [dayIndex, setDayIndex] = useState(0)
    const { data, fetching, fetchWeather, error } = useWeather()

    const weatherDataProps = { data, fetching, error }

    useEffect(() => {
        if (!_.isEmpty(city)) {
            setDayIndex(0) //Resetting
            fetchWeather(urls.getWeatherInfo(city), city)
        }
    }, [city])

    const noData = !fetching && _.isEmpty(data)
    return <div className="h-screen flex flex-col md:flex-row">
        <WeatherLeftPanel {...{ ...weatherDataProps, city, dayIndex, setDayIndex, setCity }} />
        <WeatherForecastDashboard {...{ ...weatherDataProps, noData, dayIndex }} />
        <Toaster />
    </div>
}

export default Weather