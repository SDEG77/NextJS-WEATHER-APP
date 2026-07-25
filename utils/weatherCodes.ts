export const weatherCodes: Record<
  number,
  { label: string; icon: string }
> = {
  0: { label: "Clear Sky", icon: "☀️" },
  1: { label: "Mainly Clear", icon: "🌤️" },
  2: { label: "Partly Cloudy", icon: "⛅" },
  3: { label: "Overcast", icon: "☁️" },
  45: { label: "Fog", icon: "🌫️" },
  48: { label: "Depositing Rime Fog", icon: "🌫️" },
  51: { label: "Light Drizzle", icon: "🌦️" },
  53: { label: "Moderate Drizzle", icon: "🌦️" },
  55: { label: "Dense Drizzle", icon: "🌧️" },
  61: { label: "Light Rain", icon: "🌦️" },
  63: { label: "Moderate Rain", icon: "🌧️" },
  65: { label: "Heavy Rain", icon: "🌧️" },
  80: { label: "Rain Showers", icon: "🌦️" },
  81: { label: "Moderate Rain Showers", icon: "🌧️" },
  82: { label: "Violent Rain Showers", icon: "⛈️" },
  95: { label: "Thunderstorm", icon: "⛈️" },
  96: { label: "Thunderstorm with Slight Hail", icon: "⛈️" },
  99: { label: "Thunderstorm with Heavy Hail", icon: "⛈️" },
};