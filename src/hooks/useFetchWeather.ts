import { useState } from "react";
import axios from "axios";

interface WeatherData {
    city: string;
    temperature: string;
    description: string;
    pressure: string;
    humidity: string;
}

export const useFetchWeather = () => {
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const fetchWeather = async (city: string) => {
        try {
            setLoading(true);
            setError(null);
            const response = await axios.get(
                `https://wttr.in/${city}?format=j1`
            );

            const weather = response.data.current_condition[0];
            setWeatherData({
                city,
                temperature: weather.temp_C,
                description: weather.weatherDesc[0].value,
                pressure: weather.pressure,
                humidity: weather.humidity,
            });
        } catch (err) {
            setError("Shahar nomi noto‘g‘ri yoki maʼlumot topilmadi.");
        } finally {
            setLoading(false);
        }
    };

    return { weatherData, error, loading, fetchWeather };
};
