import WeatherSearch from "./WeatherSearch"
import { ReactComponent as SearchIcon } from '../../icons/search.svg'
import { useState } from "react"
import WeatherInfo from "./WeatherInfo"

const WeatherLeftPanel = ({ data, city, setCity, dayIndex, setDayIndex }) => {
    const [searchTerm, setSearchTerm] = useState(city)

    const searchWeatherHandler = (e) => {
        e.preventDefault()

        if (!searchTerm.trim().length) return
        setCity(searchTerm)
    }
    
    return <div className="w-full bg-blue-200 p-8 md:w-1/4">
        <form className="flex flex-col items-center mb-10" onSubmit={searchWeatherHandler}>
            <div className="flex border-4 bg-[#ffffff2e] border-white rounded-lg">
              <WeatherSearch value={searchTerm} onSearch={(e) => setSearchTerm(e.target.value)} />
              <button className="cursor-pointer" htmltype="submit"><SearchIcon /></button>
            </div>
        </form>
        {data && <WeatherInfo {...{ data, dayIndex, setDayIndex }} />}
    </div>
}

export default WeatherLeftPanel