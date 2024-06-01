import { useState } from "react";
import Image from "next/image";
import { toFahrenheit, toCelsius } from "../utils/temperature";
import { msToKmh, msToMph } from "../utils/windSpeed";
import { WeatherDisplayProps } from "../types/props";
import { icons } from "../constant/images";
import ConvertButton from "./ConvertButton";

const WeatherDisplay = ({ weatherData }: WeatherDisplayProps) => {
  const [degree, setDegree] = useState("°F");
  const [speed, setSpeed] = useState("mph");

  const handleClickTemp = () => {
    if (degree === "°F") {
      setDegree("°C");
    } else if (degree === "°C") {
      setDegree("°K");
    } else if (degree === "°K") {
      setDegree("°F");
    }
  };

  const handleClickSpeed = () => {
    if (speed === "mph") {
      setSpeed("km/h");
    } else if (speed === "km/h") {
      setSpeed("(m/s)");
    } else if (speed === "(m/s)") {
      setSpeed("mph");
    }
  };

  if (!weatherData) {
    return (
      <section className="md:grid-template">
        <div className="city-template mb-4 flex items-center justify-center">
          <Image
            src={icons.location}
            alt="location"
            className="mr-2 h-5 w-5 md:h-6 md:w-6 lg:h-8 lg:w-8"
          />
          <h2 className="-skew-x-6 text-xl">--, --</h2>
        </div>
        <div className="weather-template mb-4 flex flex-col items-center justify-center sm:mb-0">
          <div className="md: mb-2 flex w-40 items-center justify-center md:border-b-2 md:border-blue-600">
            <p className="mb-2 mr-2 text-xl font-light text-neutral-500">
              Weather
            </p>
            <Image src={icons.weather} alt="weather" className="h-4 w-4" />
          </div>
          <p className="text-darkSlateGray">--</p>
        </div>
        <div className="temperature-template mb-4 flex flex-col items-center justify-center sm:mb-0">
          <div className="mb-2 flex w-40 items-center justify-center md:border-b-2 md:border-blue-600">
            <p className="mb-2 mr-2 text-xl font-light text-neutral-500">
              Temperature
            </p>
            <Image
              src={icons.temperature}
              alt="temperature"
              className="h-4 w-4"
            />
          </div>
          <p className="text-darkSlateGray">-- °F</p>
        </div>
        <div className="humidity-template mb-4 flex flex-col items-center justify-center sm:mb-0">
          <div className="mb-2 flex w-40 items-center justify-center md:border-b-2 md:border-blue-600">
            <p className="mb-2 mr-2 text-xl font-light text-neutral-500">
              Humidity
            </p>
            <Image src={icons.humidity} alt="humidity" className="h-4 w-4" />
          </div>
          <p className="text-darkSlateGray">--%</p>
        </div>
        <div className="w-speed-template mb-4 flex flex-col items-center justify-center sm:mb-0">
          <div className="mb-2 flex w-40 items-center justify-center md:border-b-2 md:border-blue-600">
            <p className="mb-2 mr-2 text-xl font-light text-neutral-500">
              Wind Speed
            </p>
            <Image src={icons.wind} alt="wind" className="h-4 w-4" />
          </div>
          <div>
            <p className="text-darkSlateGray">-- mph</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="md:grid-template">
      <div className="city-template mb-4 flex items-center justify-center sm:mb-0">
        <Image
          src={icons.location}
          alt="location"
          className="mr-2 h-5 w-5 md:h-6 md:w-6 lg:h-8 lg:w-8"
        />
        <h2 className="city-text-shadow text-2xl font-bold text-honeyGold sm:text-3xl md:text-4xl">
          {weatherData.name}, {weatherData.sys.country}
        </h2>
      </div>
      <div className="weather-template mb-4 flex flex-col items-center justify-center md:mb-0">
        <div className="mb-2 flex w-40 items-center justify-center md:border-b-2 md:border-blue-600">
          <p className="mb-2 mr-2 text-xl font-light text-neutral-500">
            Weather
          </p>
          <Image src={icons.weather} alt="weather" className="h-4 w-4" />
        </div>
        <p className="text-darkSlateGray">
          {weatherData.weather[0].description}
        </p>
      </div>
      <div className="temperature-template mb-4 flex flex-col items-center justify-center md:mb-0">
        <div className="mb-2 flex w-40 items-center justify-center md:border-b-2 md:border-blue-600">
          <p className="mb-2 mr-2 text-xl font-light text-neutral-500">
            Temperature
          </p>
          <Image
            src={icons.temperature}
            alt="temperature"
            className="h-4 w-4"
          />
        </div>
        <div className="flex">
          <p className="text-darkSlateGray mr-2">
            {degree === "°F"
              ? toFahrenheit(weatherData.main.temp)
              : degree === "°C"
                ? toCelsius(weatherData.main.temp)
                : weatherData.main.temp}
            {degree}
          </p>
          <ConvertButton handleClick={handleClickTemp} change="degree" />
        </div>
      </div>
      <div className="humidity-template mb-4 flex flex-col items-center justify-center md:mb-0">
        <div className="mb-2 flex w-40 items-center justify-center md:border-b-2 md:border-blue-600">
          <p className="mb-2 mr-2 text-xl font-light text-neutral-500">
            Humidity
          </p>
          <Image src={icons.humidity} alt="humidity" className="h-4 w-4" />
        </div>
        <p className="text-darkSlateGray">{weatherData.main.humidity}%</p>
      </div>
      <div className="w-speed-template mb-4 flex flex-col items-center justify-center md:mb-0">
        <div className="mb-2 flex w-40 items-center justify-center md:border-b-2 md:border-blue-600">
          <p className="mb-2 mr-2 text-xl font-light text-neutral-500">
            Wind Speed
          </p>
          <Image src={icons.wind} alt="wind" className="h-4 w-4" />
        </div>
        <div className="flex">
          <p className="text-darkSlateGray mr-2">
            {speed === "mph"
              ? msToMph(weatherData.wind.speed)
              : speed === "km/h"
                ? msToKmh(weatherData.wind.speed)
                : weatherData.wind.speed}{" "}
            {speed}
          </p>
          <ConvertButton handleClick={handleClickSpeed} change="velocity" />
        </div>
      </div>
    </section>
  );
};

export default WeatherDisplay;
