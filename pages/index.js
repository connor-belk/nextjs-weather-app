import Head from "next/head";
import Image from "next/legacy/image";
import axios from "axios";
import { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import Weather from "../components/Weather";
import Loader from "../components/Loader";

export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}&units=imperial`;

  const fetchWeather = async (e) => {
    e.preventDefault();
    setLoading(true);
    axios.get(url).then((res) => {
      setWeather(res.data);
    });
    setCity("");
    setLoading(false);
  };

  if (loading) {
    return <Loader />;
  } else {
    return (
      <div className="relative h-screen">
        <Head>
          <title>Weather - Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[1]" />
        <Image
          src="https://images.unsplash.com/photo-1562155618-e1a8bc2eb04f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1791&q=80"
          className="object-cover"
          layout="fill"
          alt="#"
        />

        {/* SEARCH */}
        <div className="relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 text-white z-10">
          <form
            className="flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-300 text-white rounded-2xl"
            onSubmit={fetchWeather}
          >
            <div>
              <input
                className="bg-transparent backdrop-blur-sm text-white border-none focus:outline-none text-2xl placeholder:text-gray"
                type="text"
                placeholder="Search City"
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <button onClick={fetchWeather}>
              <BsSearch className="text-white/80" size={20} />
            </button>
          </form>
        </div>

        {/* WEATHER DISPLAY */}
        {weather.main && <Weather data={weather} />}
      </div>
    );
  }
}
