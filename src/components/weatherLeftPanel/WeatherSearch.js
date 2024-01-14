const WeatherSearch = ({ value, onSearch = () => {} }) => {
    return <input value={value} onChange={onSearch} type="text" className="bg-transparent p-2 h-10 w-5/6 text-white caret-white placeholder:text-white focus:outline-none selection:text-blue-300" placeholder="Search city" />
}

export default WeatherSearch