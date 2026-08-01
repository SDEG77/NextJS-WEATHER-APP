import { WeatherResponse } from "@/types/weatherResponse";
import { getWeather } from "@/utils/weather";
import { weatherCodes } from "@/utils/weatherCodes";
import { NextRequest } from "next/server";
import type { dailyMetric } from "@/types/weather/dailyMetric";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const longitude = searchParams.get("longitude");
  const latitude = searchParams.get("latitude");

  if (!latitude || !longitude) {
    return Response.json(
      { message: "Latitude and longitude are required." },
      { status: 400 }
    );
  }

  const weather: WeatherResponse = await getWeather(Number(longitude), Number(latitude));
  
  let time = weather.current.time;
  time = new Date(time).toLocaleDateString("en-US", {
    hour: "numeric", 
    minute: "2-digit",
    hour12: true,
  });

  const weatherStatus = weatherCodes[weather.current.weather_code];

  const metrics: dailyMetric = {
    weatherLabel: weatherStatus.label,
    weatherIcon: weatherStatus.icon,
    time: time,
    temperature: `${ Math.ceil(weather.current.temperature_2m) }${ weather.current_units.temperature_2m }`,
    humidity: `${weather.current.relative_humidity_2m}%`,
    windSpeed: `${ weather.current.wind_speed_10m } ${ weather.current_units.wind_speed_10m }`,
    airPressure: `${ weather.current.surface_pressure } ${ weather.current_units.surface_pressure }`,
    rainChance: `${ weather.daily.precipitation_probability_max[0] }%`,
    // through rain chances based on current hour
  };

  return Response.json({ 
    metrics
  });
}