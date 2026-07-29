import { getWeather } from "@/utils/weather";
import { weatherCodes } from "@/utils/weatherCodes";
import { NextRequest } from "next/server";

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

  const weather = await getWeather(Number(longitude), Number(latitude));
  
  let time = weather.current.time;
  time = new Date(time).toLocaleDateString("en-US", {
    hour: "numeric", 
    minute: "2-digit",
    hour12: true,
  });

  const weatherStatus = weatherCodes[weather.current.weather_code];

  const metrics = [
    { label: "Current Status", data: `${weatherStatus.label} ${weatherStatus.icon}`},
    { label: "Current Time", data: time},
    { label: "Current Tempreture", data: `${ weather.current_units.temperature_2m } ${ weather.current.temperature_2m }`},
    { label: "Current Humidity", data: `${weather.current.relative_humidity_2m}%`},
  ];

  return Response.json({ 
    metrics
  });
}