import axios from "axios";
import urls from "./urls";
import { useQuery } from "@tanstack/react-query";

const getWeather = (city) => {
    return axios.get(urls.getWeatherInfo(city))
}

const useWeatherQuery = (city) => {
    return useQuery({
        queryKey: [`/weather/${city}`],
        queryFn: () => getWeather(city),
        enabled: false,
    })
}

export {
    useWeatherQuery,
}