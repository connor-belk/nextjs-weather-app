import React from "react";
import Image from "next/legacy/image";

const Weather = ({ data }) => {
  const windDirection = (deg) => {
    if (deg > 11.25 && deg < 33.75) {
      return "NNE";
    } else if (deg > 33.75 && deg < 56.25) {
      return "NE";
    } else if (deg > 56.25 && deg < 78.75) {
      return "ENE";
    } else if (deg > 78.75 && deg < 101.25) {
      return "E";
    } else if (deg > 101.25 && deg < 123.75) {
      return "ESE";
    } else if (deg > 123.75 && deg < 146.25) {
      return "SE";
    } else if (deg > 146.25 && deg < 168.75) {
      return "SSE";
    } else if (deg > 168.75 && deg < 191.25) {
      return "S";
    } else if (deg > 191.25 && deg < 213.75) {
      return "SSW";
    } else if (deg > 213.75 && deg < 236.25) {
      return "SW";
    } else if (deg > 236.25 && deg < 258.75) {
      return "WSW";
    } else if (deg > 258.75 && deg < 281.25) {
      return "W";
    } else if (deg > 281.25 && deg < 303.75) {
      return "WNW";
    } else if (deg > 303.75 && deg < 326.25) {
      return "NW";
    } else if (deg > 326.25 && deg < 348.75) {
      return "NNW";
    } else {
      return "N";
    }
  };

  return (
    <div className="relative flex flex-col justify-around max-w-[500px] w-full h-[90vh] m-auto p-4 text-gray-300 z-10">
      <div className="relative flex justify-between items-center pt-12">
        <div className="flex flex-col items-center">
          <Image
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="#"
            width="200"
            height="200"
          />
          <p className="text-2xl">{data.weather[0].main}</p>
        </div>
        <p className="text-9xl">{data.main.temp.toFixed(0)}&#176;</p>
      </div>
      <div className="bg-white/5 py-5 px-3 rounded-xl flex flex-col justify-center items-center relative">
        <p className="text-3xl font-thin pb-6 text-center">
          Weather in{" "}
          <span className="font-mono font-thin text-green-400">
            {data.name}
          </span>
          , {data.sys.country}:
        </p>
        <div className="flex justify-between text-center gap-10">
          <div className="flex flex-col justify-between">
            <p className="font-bold text-2xl">
              {data.main.feels_like.toFixed(0)}&#176;
            </p>
            <p>Feels Like</p>
          </div>
          <div className="flex flex-col justify-between">
            <p className="font-bold text-2xl">{data.main.humidity}%</p>
            <p>Humidity</p>
          </div>
          <div className="flex flex-col justify-between">
            <p className="font-bold text-2xl">
              {data.wind.speed.toFixed(0)} MPH
            </p>
            <p>{windDirection(data.wind.deg)}</p>
            <p>Wind</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
