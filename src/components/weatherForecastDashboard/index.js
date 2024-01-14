import _ from "lodash";
import WeatherForecastChart from "./WeatherForecastChart";
import WeatherInfoCard from "./WeatherInfoCard";
import {
  getDayWeatherConfig,
  getWeatherInfoCardsConfig,
} from "./configurationData";
import Loader from "../Loader";

const WeatherForecastDashboard = ({ data, dayIndex, fetching, noData }) => {
  const { weatherForDay } = getDayWeatherConfig({
    data: _.get(data, "list", []),
    dayIndex,
  });

  const weatherInfoCardsConfig = getWeatherInfoCardsConfig({
    data: _.get(weatherForDay, "0"),
  });

  const getContent = () => {
    if (fetching)
      return <Loader text="Crunching data just for you, please wait..." />;
    else if(noData)
      return (
        <Loader
          text="No data to show, please search with a valid city"
          showAnimation={false}
        />
      );

    return (
      <>
        <WeatherForecastChart data={weatherForDay} dayIndex={dayIndex} />
        <div className="flex flex-col gap-10 h-fit">
          <h1>More details of today's weather</h1>
          <div className="flex gap-4 flex-wrap justify-between">
            {_.map(weatherInfoCardsConfig, (props) => (
              <WeatherInfoCard {...props} />
            ))}
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="flex-1 flex flex-col bg-blue-100 p-8 justify-between z-10 overflow-[initial] md:overflow-y-scroll">
      {getContent()}
    </div>
  );
};

export default WeatherForecastDashboard;
