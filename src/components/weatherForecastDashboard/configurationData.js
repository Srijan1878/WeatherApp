import _ from "lodash";
import { ReactComponent as HumidityIcon } from "../../icons/humidity.svg";
import { ReactComponent as MaxTemperature } from "../../icons/maxTemp.svg";
import { ReactComponent as MinTemperature } from "../../icons/minTemp.svg";
import WEATHER_ICONS from "../../constants/icons";
import { ReactComponent as Sun } from "../../icons/sun.svg";

const _filterWeatherByDate = (data) =>
  _.chain(data).get("dt_txt").split(" ").head().value();

const filterWeatherByHour = (data) =>
  _.chain(data).get("dt_txt").split(" ").last().value();

const getDayWeatherConfig = ({ data, dayIndex }) => {
  const weatherByDate = _.groupBy(data, _filterWeatherByDate);
  const weatherForDay = _.get(_.values(weatherByDate), [dayIndex]);
  return { weatherForDay, forecastDayCount: _.size(weatherByDate) };
};

const getWeatherInfoCardsConfig = ({ data }) => [
  {
    title: "Max Temperature",
    content: <>{_.get(data, "main.temp_max")}&deg;</>,
    icon: <MaxTemperature />,
    key: 0,
  },
  {
    title: "Min Temperature",
    content: <>{_.get(data, "main.temp_min")}&deg;</>,
    icon: <MinTemperature />,
    key: 1,
  },
  {
    title: "Humidity",
    content: `${_.get(data, "main.humidity")}%`,
    icon: <HumidityIcon />,
    key: 2,
  },
  {
    title: "Wind",
    content: `${_.get(data, "wind.speed")}mph`,
    icon: <HumidityIcon />,
    key: 3,
  },
  {
    title: "Feels like",
    content: <>{_.get(data, "main.feels_like")}&deg;</>,
    icon: <HumidityIcon />,
    key: 4,
  },
  {
    title: "Pressure",
    content: `${_.get(data, "main.pressure")}hPa`,
    icon: <HumidityIcon />,
    key: 5,
  },
];

const getWeatherIcon = ({ code }) => {
  return _.get(WEATHER_ICONS, code, <Sun />)
}

export { filterWeatherByHour, getDayWeatherConfig, getWeatherInfoCardsConfig, getWeatherIcon }