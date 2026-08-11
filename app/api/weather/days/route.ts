import { WeatherResponse } from "@/types/weatherResponse";
import { getWeather } from "@/utils/weather";
import { weatherCodes } from "@/utils/weatherCodes";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const longitude = searchParams.get("longitude");
  const latitude = searchParams.get("latitude");
  const day = searchParams.get("day");

  if (!latitude || !longitude) {
    return Response.json(
      { message: "Latitude and longitude are required." },
      { status: 400 }
    );
  }

  const weather: WeatherResponse = await getWeather(Number(longitude), Number(latitude), String(day));

  const metrics = {
    hours: weather.hourly.time,
    hourlyTemps: weather.hourly.temperature_2m,
    // through rain chances based on current hour
  };

  return Response.json({ 
    metrics
  });
}