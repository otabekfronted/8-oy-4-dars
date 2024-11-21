import React, { useState } from "react";
import WeatherCard from "./components/WeatherCard";
import { useFetchWeather } from "./hooks/useFetchWeather";

const App: React.FC = () => {
    const [city, setCity] = useState<string>("");
    const { weatherData, error, loading, fetchWeather } = useFetchWeather();

    const handleSearch = () => {
        if (city.trim() !== "") {
            fetchWeather(city);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-blue-100 p-4">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">
                Weather App
            </h1>
            <div className="flex items-center space-x-4 mb-6">
                <input
                    type="text"
                    placeholder="Shahar nomini kiriting..."
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    onClick={handleSearch}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                    Qidirmoq
                </button>
            </div>
            {loading && <p className="text-blue-700">Yuklanmoqda...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {weatherData && (
                <WeatherCard
                    city={weatherData.city}
                    temperature={weatherData.temperature}
                    description={weatherData.description}
                    pressure={weatherData.pressure}
                    humidity={weatherData.humidity}
                />
            )}
        </div>
    );
};

export default App;
