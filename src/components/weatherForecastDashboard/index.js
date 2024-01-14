import _ from "lodash";
import WeatherForecastChart from "./WeatherForecastChart";
import WeatherInfoCard from "./WeatherInfoCard";
import {
  getDayWeatherConfig,
  getWeatherInfoCardsConfig,
} from "./configurationData";
import Loader from "../Loader";
import { useEffect, useState } from "react";
import { ReactComponent as Right } from "../../icons/chevronRight.svg";
import { ReactComponent as Left } from "../../icons/chevronLeft.svg";

const WeatherForecastDashboard = ({
  data,
  dayIndex,
  fetching,
  noData,
  city,
}) => {
  const [hourIndex, setHourIndex] = useState(0);
  const { weatherForDay } = getDayWeatherConfig({
    data: _.get(data, "list", []),
    dayIndex,
  });

  const weatherInfoCardsConfig = getWeatherInfoCardsConfig({
    data: _.get(weatherForDay, hourIndex),
  });

  useEffect(() => {
    setHourIndex(0);
  }, [city]);

  const getContent = () => {
    if (fetching) {
      return <Loader text="Crunching data just for you, please wait..." />;
    }
    else if (noData) {
      return (
        <Loader
          text="No data to show, please search with a valid city"
          showAnimation={false}
        />
      );
    }

    const changeHour = (next, perform) => {
      if (perform) setHourIndex((prevHourIndex) => prevHourIndex + next);
    };

    return (
      <>
        <WeatherForecastChart data={weatherForDay} dayIndex={dayIndex} />
        <div className="flex flex-col gap-10 h-fit">
          <div className="flex items-center justify-between flex-col md:flex-row gap-4">
            <div className="flex gap-4">
              <h1>More details of today's weather</h1>
              <span className="p-1 bg-blue-300 text-white rounded text-xs h-fit">
                <p>
                  {_.last(
                    _.get(weatherForDay, [hourIndex, "dt_txt"]).split(" ")
                  )}
                </p>
              </span>
            </div>
            <div className="flex gap-2">
              <Left
                className="cursor-pointer stroke-black"
                onClick={() => changeHour(-1, hourIndex > 0)}
              />
              <Right
                className="cursor-pointer stroke-black"
                onClick={() =>
                  changeHour(1, hourIndex < _.size(weatherForDay) - 1)
                }
              />
            </div>
          </div>
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
