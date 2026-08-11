import "dotenv/config"
import LeftWidget from "@/components/home-comps/LeftWidget";
import RightWidget from "@/components/home-comps/RightWidget";
import BottomWidget from "@/components/home-comps/BottomWidget";
import { dailyMetric } from "@/types/weather/dailyMetric";

export default async function Home() {
  const { APP_URL } = process.env;
  const latitude = 15.5149;
  const longitude = 120.9913;
  const day = new Date().toISOString().split('T')[0];
  
  const request = await fetch(`${APP_URL}/api/weather?latitude=${latitude}&longitude=${longitude}&day=${day}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await request.json();
  const metrics: dailyMetric = data.metrics;

  if (data.status === 400) {
    return (
      <main className="relative z-10">
        <div className="flex w-screen justify-between px-10 text-white">
          Unable to get weather data
        </div>
      </main>
    );
  }

  return (
    <main className="w-screen relative z-10 flex flex-col gap-10 px-10 py-6 text-white">
        <section className="flex flex-row md:flex-row justify-between">
          <LeftWidget 
            weatherLabel={ metrics.weatherLabel }
            weatherIcon={ metrics.weatherIcon }
            temp={ metrics.temperature }
          />
          <RightWidget 
            airPressure={ metrics.airPressure }
            humidty={ metrics.humidity }
            windSpeed={ metrics.windSpeed }
            rainChance={ metrics.rainChance }
          />
        </section>
        <BottomWidget
          contents={{
            hours: metrics.hours,
            temps: metrics.hourlyTemps,
          }}
        />
    </main>
  );
}
