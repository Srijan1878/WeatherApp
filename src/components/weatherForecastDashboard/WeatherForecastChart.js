import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import _ from "lodash";
import { filterWeatherByHour } from "./configurationData";

const _composeChartData = ({ data }) => {
  return {
    labels: _.map(data, filterWeatherByHour),
    datasets: [
      {
        fill: true,
        label: "Temperature",
        data: _.map(data, "main.temp"),
      },
    ],
  };
};

const WeatherForecastChart = ({ data }) => {
  const weatherForecastChartData = _composeChartData({ data });

  return (
    <div className="rounded-3xl bg-white p-4 h-1/2 mb-8">
      <p>Upcoming hours</p>
      <Line className="!w-full pb-4 !h-full" data={weatherForecastChartData} />
    </div>
  );
};

export default WeatherForecastChart;
