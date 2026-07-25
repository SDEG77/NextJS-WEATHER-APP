import type { WeatherResponse } from "@/types/weatherResponse";

async function getWeather( longitude: number, latitude: number ): Promise<WeatherResponse> {
  const url =
    `https://api.open-meteo.com/v1/forecast` +
    `?latitude=${latitude}` +
    `&longitude=${longitude}` +
    `&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m` +
    `&daily=weather_code,temperature_2m_max,temperature_2m_min` +
    `&timezone=Asia/Manila`;

    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error("Failed to fetch data from weather API")
    }

    const data = await response.json();

    return data;
}

export { getWeather };