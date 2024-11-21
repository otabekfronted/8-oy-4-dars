import React from "react";

interface WeatherCardProps {
    city: string;
    temperature: string;
    description: string;
    pressure: string;
    humidity: string;
}

const WeatherCard: React.FC<WeatherCardProps> = ({
    city,
    temperature,
    description,
    pressure,
    humidity,
}) => {
    return (
        <div className="max-w-xs mx-auto bg-white shadow-lg rounded-lg p-6 text-center">
            <h2 className="text-xl font-bold mb-4">{city}</h2>
            <p className="text-gray-600 capitalize">{description}</p>
            <h3 className="text-2xl font-semibold mt-2">{temperature}°C</h3>
            <div className="mt-4 text-sm text-gray-700">
                <p>Bosim: {pressure} mb</p>
                <p>Namlik: {humidity}%</p>
            </div>
        </div>
    );
};

export default WeatherCard;
