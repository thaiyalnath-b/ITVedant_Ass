import React, { useState, useEffect } from "react";
import './WeatherDashboard.css';

const WeatherDashboard = () => {
    const [city, setCity] = useState("Bangalore");
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, SetError] = useState("");

    const API_KEY = "3cf652ed0ff74548870f534a04da1538";

    useEffect(() => {
        if (!city) return;

        const controller = new AbortController();

        const fetchWeather = async () => {
            try {
                setLoading(true);
                SetError("");
                const response = await fetch(
                    `https://api.weatherbit.io/v2.0/current?city=${city}&key=${API_KEY}`,
                    { signal: controller.signal }
                );

                if (!response.ok) {
                    throw new Error("City not found or API error");
                }

                const data = await response.json();
                setWeather(data.data[0]);
            }
            catch (err) {
                if (err.name !== "AbortError") {
                    SetError(err.message);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchWeather();

        return () => controller.abort();
    }, [city]);

    return (
        <div className="out">
            <div className="in">
                <h2 className="title">Weather Dashboard</h2>
                <div className="input">
                    <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter city Name" className="city-input" />
                </div>
                {loading && <p className="loading">Loading weather data...</p>}
                {error && <p className="error">{error}</p>}
                {weather && !loading && (
                    <div className="weather">
                        <h3>{weather.city_name}</h3>
                        <p>Temperature: {weather.temp}°C</p>
                        <p>Wind Speed: {weather.wind_spd} m/s</p>
                        <p>Humidity: {weather.rh}%</p>
                        <p>Condition: {weather.weather.description}</p>
                    </div>
                )}
            </div>
        </div>
    );
};
export default WeatherDashboard;