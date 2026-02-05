import { DecimalsArrowRight, Search } from "lucide-react";
import { useState, useEffect } from "react";

const Weather = () => {
    const [weatherStatus, setWeatherStatus] = useState([]);
    const [city, setCity] = useState("");
    const today = new Date();
    const fallbackIcon = "sunny-cloudy.svg";
    const weatherIcon = {
        Clouds: "sunnyCloudy.png",
        Thunderstorm: "thunderstorm.png",
        Rain: "rain.png",
        Drizzle: "rain.png",
        Snow: "snow.png",
        Clear: "clear.png",
        Mist: "fog.png",
        Fog: "fog.png",
        Haze: "haze.png",
        Smoke: "fog.png",
    };

    const dayName = today.toLocaleDateString("en-US", { weekday: "long" });
    const fullDate = today.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });

    const getWeather = async (city) => {
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_WEATHER_API_KEY}`,
            );
            const data = await response.json();
            console.log(data);
            setWeatherStatus({
                temperature: Math.floor(data.main.temp) || "not found",
                feels_like: Math.floor(data.main.feels_like) || "not found",
                temp_high: Math.floor(data.main.temp_max) || "not found",
                temp_low: Math.floor(data.main.temp_min) || "not found",
                humidity: data.main.humidity || "not found",
                pressure: data.main.pressure || "not found",
                weather_condition: data.weather[0].main || "not found",
                wind: data.wind.speed || "not found",
                city: data.name || "not found",
                country: data.sys.country || "not found",
            });
        } catch (error) {
            alert(error);
        }
    };

    const search = (e) => {
        e.preventDefault();
        getWeather(city);
    };

    useEffect(() => {
        getWeather("Dhaka");
    }, []);

    const icon = weatherIcon[weatherStatus.weather_condition] || fallbackIcon;

    return (
        <div className="max-w-[1440px] w-full flex flex-col gap-10 font-inter text-teal-900">
            <div className="flex flex-col md:flex-row w-full justify-between gap-5">
                <h1 className="text-3xl md:text-5xl font-black md:tracking-tighter text-teal-900 font-bree">
                    WeatherInfo
                </h1>
                <form
                    action=""
                    onSubmit={search}
                    className="bg-white p-2 rounded-full flex items-center justify-between">
                    <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="text-lg sm:text-2xl text-teal-900/80 outline-0 border-0 bg-transparent px-3 sm:px-6 sm:py-3 w-full"
                        placeholder="Check your city..."
                    />
                    <button className="w-[60px] h-[50px] rounded-full bg-teal-800 flex items-center justify-center">
                        <Search color="white"/>
                    </button>
                </form>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="flex flex-col gap-10 sm:p-10 rounded-3xl col-span-1 sm:col-span-2 row-span-2">
                    <div className="flex flex-col w-full">
                        <div className="flex gap-2 items-center justify-start">
                            <div className="w-[8px] h-[8px] rounded-full bg-green-600"></div>
                            <p className="text-lg text-teal-900/80">
                                {weatherStatus.city}, {weatherStatus.country}
                            </p>
                        </div>
                        <h2 className="text-3xl text-teal-900 font-semibold">
                            {dayName} <br /> {fullDate}
                        </h2>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-5 justify-between items-center w-full">
                        <div className="w-full flex items-center justify-center pb-10">
                            <img
                                src={`/public/${icon}`}
                                alt=""
                                className="w-full max-w-[250px]"
                            />
                        </div>
                        <div className="flex flex-col gap-5 items-start justify-center w-full">
                            <h1 className="text-9xl text-teal-950 font-bold tracking-tighter leading-15 font-mono">
                                {weatherStatus.temperature}
                                <sup>°c</sup>
                            </h1>
                            <p className="text-xl text-teal-950/40 pl-2">
                                {weatherStatus.weather_condition}
                            </p>
                            <div className="flex gap-5 w-full justify-between sm:justify-start">
                                <div>
                                    <p className="text-xl tracking-tighter text-teal-900/80">
                                        Feels like
                                    </p>
                                    <p className="font-semibold font-mono tracking-tighter text-teal-900/80 text-xl">
                                        {weatherStatus.feels_like}°
                                    </p>
                                </div>
                                <div>
                                    <p className="text-xl tracking-tighter text-teal-900/80">
                                        High
                                    </p>
                                    <p className="font-semibold font-mono tracking-tighter text-teal-900/80 text-xl">
                                        {weatherStatus.temp_high}°
                                    </p>
                                </div>
                                <div>
                                    <p className="text-xl tracking-tighter text-teal-900/80">
                                        Low
                                    </p>
                                    <p className="font-semibold font-mono tracking-tighter text-teal-900/80 text-xl">
                                        {weatherStatus.temp_low}°
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-10 rounded-2xl flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                        <p className="text-teal-900/50 tracking-wider uppercase">
                            Humidity
                        </p>
                        <img
                            src="/public/humidity-sensor.png"
                            alt=""
                            width={100}
                        />
                    </div>
                    <div>
                        <h2 className="text-7xl font-bold font-bree text-teal-900/80">
                            {weatherStatus.humidity}%
                        </h2>
                        <p className=" text-teal-900/80 text-xl">Comfortable</p>
                    </div>
                </div>
                <div className="bg-white p-10 rounded-2xl flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                        <p className="text-teal-900/50 tracking-wider uppercase">
                            Wind Speed
                        </p>
                        <img src="/public/wind.png" alt="" width={100} />
                    </div>
                    <div>
                        <h2 className="text-7xl font-bold font-bree text-teal-900/80">
                            {weatherStatus.wind}
                        </h2>
                        <p className=" text-teal-900/80 text-xl">KM/H Nm</p>
                    </div>
                </div>
                <div className="bg-white p-10 rounded-2xl flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                        <p className="text-teal-900/50 tracking-wider uppercase">
                            UV Index
                        </p>
                        <img src="/public/uv.png" alt="" width={100} />
                    </div>
                    <div>
                        <h2 className="text-7xl font-bold font-bree text-teal-900/80">
                            5
                        </h2>
                        <p className=" text-teal-900/80 text-xl">Moderate</p>
                    </div>
                </div>
                <div className="bg-white p-10 rounded-2xl flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                        <p className="text-teal-900/50 tracking-wider uppercase">
                            Pressure
                        </p>
                        <img src="/public/thermometer.png" alt="" width={100} />
                    </div>
                    <div>
                        <h2 className="text-7xl font-bold font-bree text-teal-900/80">
                            {weatherStatus.pressure}
                        </h2>
                        <p className=" text-teal-900/80 text-xl">hPa</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Weather;
