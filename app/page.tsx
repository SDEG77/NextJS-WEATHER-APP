import { getWeather } from "@/utils/weather";
import { weatherCodes } from "@/utils/weatherCodes";

export default async function Home() {
  const weather = await getWeather(121.0667, 15.4859);  
  
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

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
      <main className="flex flex-col gap-4 items-center">
        <h1 className="text-2xl"> Cabanatuan City, Nueva Ecija </h1>

        <ol>
          { 
            metrics.map(metric => {
              return (
                <li className="text-center" key={metric.label}>{metric.label}: {metric.data}</li>
              );
            })
          }
        </ol>
        
      </main>
    </div>
  );
}
