import _ from "lodash";
import { ReactComponent as Right } from "../../icons/chevronRight.svg";
import { ReactComponent as Left } from "../../icons/chevronLeft.svg";

import { getCurrentDate } from "../../utils";
import {
  getDayWeatherConfig,
  getWeatherIcon,
} from "../weatherForecastDashboard/configurationData";
import { memo } from "react";

const _getDayWeatherConfig = ({ weatherForDay }) => {
  return {
    currentTemperature: _.get(weatherForDay, "0.main.temp"),
    title: _.get(weatherForDay, "0.weather.0.main"),
    weatherIcon: getWeatherIcon({
      code: _.get(weatherForDay, "0.weather.0.icon"),
    }),
  };
};

const WeatherInfo = ({ data = {}, dayIndex, setDayIndex }) => {
  if (_.isEmpty(data)) return <></>;

  const { weatherForDay, forecastDayCount } = getDayWeatherConfig({
    data: _.get(data, "list", []),
    dayIndex,
  });

  const weatherConfig = _getDayWeatherConfig({ weatherForDay, dayIndex });

  const onNextDay = () => {
    dayIndex < forecastDayCount - 1 && setDayIndex((prevDay) => prevDay + 1);
  };
  const onPrevDay = () => {
    dayIndex > 0 && setDayIndex((prevDay) => prevDay - 1);
  };

  return (
    <>
      <div className="flex flex-col gap-12 text-white items-center">
        {}
        <div className="flex flex-col gap-2 items-center">
          <h1 className="text-white">
            {_.get(data, "city.name")}, {_.get(data, "city.country")}
          </h1>
          <p className="text-white">
            {getCurrentDate({ date: _.get(weatherForDay, "0.dt_txt") })}
          </p>
        </div>
        <div className="flex w-full justify-between items-center">
          <Left onClick={onPrevDay} className="cursor-pointer" />
          <h1 className="after:content-['\00b0'] after:ml-0.5 temperature">
            {_.floor(weatherConfig.currentTemperature)}
          </h1>
          <Right onClick={onNextDay} className="cursor-pointer" />
        </div>
        <div className="flex flex-col gap-2 items-center">
          <h1 className="text-2xl">{weatherConfig.title}</h1>
        </div>
        {weatherConfig.weatherIcon}
      </div>
    </>
  );
};

export default memo(WeatherInfo);
