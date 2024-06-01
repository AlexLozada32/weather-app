"use client";

import { ChangeEvent, KeyboardEvent, useState } from "react";
import { WeatherDataProps } from "../types/props";
import Image from "next/image";
import { icons } from "../constant/images";
import weatherAPI from "../api/weather";
import WeatherDisplay from "./WeatherDisplay";
import ErrorMessage from "./ErrorMessage";

const Main = () => {
  const [city, setCity] = useState<string>("");
  const [weatherData, setWeatherData] = useState<WeatherDataProps | null>(null);
  const [error, setError] = useState<string>("");

  const searchWeather = async () => {
    setError("");
    setWeatherData(null);

    try {
      const data = await weatherAPI(city);

      if (city === "") {
        setError("Please enter a city");
        return;
      } else if (data.cod !== 200) {
        setError("City not found!");
        return;
      }

      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setError("Error fetching weather data");
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const handleEnterKey = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      await searchWeather();
    }
  };

  return (
    <section className="p-4 lg:flex lg:w-full lg:items-center lg:justify-around">
      <div>
        <div className="flex items-center justify-center text-center">
          <h1 className="text-2xl font-thin text-deepRoyalBlue sm:text-4xl">
            My <span className="font-bold">Weather</span> App
          </h1>
          <Image
            src={icons.weatherGif}
            alt="Weather icon"
            width={65}
            height={65}
          />
        </div>
        <p className="mb-4 text-center">
          Enter a location to get the current weather
        </p>
        <div className="relative mb-4 flex items-center">
          <input
            type="text"
            onChange={handleInputChange}
            onKeyDown={handleEnterKey}
            placeholder="Enter location"
            className="h-10 w-full flex-grow rounded-3xl pl-4 pr-12 text-lg tracking-wider text-neutral-500"
          />
          <button
            onClick={searchWeather}
            className="absolute right-0 h-10 w-14 rounded-3xl px-4 transition-opacity hover:opacity-80 active:opacity-100"
          >
            <Image src={icons.search} alt="search" className="h-8 w-8" />
          </button>
        </div>
        {error && <ErrorMessage error={error} />}
      </div>
      <WeatherDisplay weatherData={weatherData} />
    </section>
  );
};

export default Main;
