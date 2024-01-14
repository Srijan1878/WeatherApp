const WeatherInfoCard = ({ title = '', icon, content }) => {
    return <div className="rounded-3xl bg-white p-4 flex flex-col gap-4 w-2/5 md:w-[30%] max-h-none">
        <div className="flex flex-col items-center justify-between w-full gap-4">
            <h1 className="card-title">{title}</h1>
            <div className="p-2 bg-blue-200 rounded-lg">{icon}</div>
        </div>
        <h1 className="text-center text-xl card-text">{content}</h1>
    </div>
}

export default WeatherInfoCard