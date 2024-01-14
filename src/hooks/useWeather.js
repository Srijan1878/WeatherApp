import axios from "axios";
import _ from "lodash";
import { useState } from "react";
import toast from "react-hot-toast";
import LOCAL_STORAGE_KEYS from "../constants/localStorageKeys";

const FALLBACK_ERROR_MESSAGE = "Something went wrong";

const errorInitialState = { isError: false, message: "" };

const useWeather = () => {
  const [fetching, setFetching] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(errorInitialState);

  const fetchWeatherData = async (url, city) => {
    setFetching(true);

    //Flushing old data and error state
    setData({});
    setError(errorInitialState);

    try {
      const response = await axios.get(url);
      setData(response.data);
      localStorage.setItem(LOCAL_STORAGE_KEYS.CITY, city);
    } catch (err) {
      // Storing error message and error status
      const errorMessage = _.get(
        err,
        "response.data.message",
        FALLBACK_ERROR_MESSAGE
      );
      setError({
        isError: true,
        message: errorMessage,
      });
      toast.error(errorMessage, { position: "top-right" });
    } finally {
      setFetching(false);
    }
  };

  return { fetching, data, fetchWeather: fetchWeatherData, error };
};

export default useWeather;
