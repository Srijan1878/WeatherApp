import { ReactComponent as Sun } from "../icons/sun.svg";
import { ReactComponent as ClearNight } from "../icons/clearNight.svg";
import { ReactComponent as CloudyNight } from "../icons/cloudyNight.svg";
import { ReactComponent as Cloudy } from "../icons/cloudy.svg";
import { ReactComponent as Rainy } from "../icons/rainy.svg";
import { ReactComponent as RainyNight } from "../icons/rainyNight.svg";
import { ReactComponent as Stormy } from "../icons/storm.svg";

const WEATHER_ICONS = {
  "01d": <Sun />,
  "01n": <ClearNight />,
  "02d": <Sun />,
  "02n": <CloudyNight />,
  "03d": <Cloudy />,
  "03n": <Cloudy />,
  "04d": <ClearNight />,
  "04n": <CloudyNight />,
  "09d": <Rainy />,
  "09n": <RainyNight />,
  "10d": <Rainy />,
  "10n": <RainyNight />,
  "11d": <Stormy />,
  "11n": <Stormy />,
};

export default WEATHER_ICONS