import RightWidgetMetrics from "./components/RightWidgetMetrics"

type props = {
  humidty: string
  airPressure: string
  rainChance: string
  windSpeed: string
}

export default function RightWidget({
  humidty = "no humidty  provided",
  airPressure = "no air pressure  provided",
  rainChance = "no rain chance  provided",
  windSpeed = "no wind speed  provided",
}: props) {
  return (
    <div className="flex flex-col gap-5">
      <RightWidgetMetrics 
        label="Humidity"
        data={ humidty }
      />
      <RightWidgetMetrics 
        label="Air Pressure"
        data={ airPressure }
      />
      <RightWidgetMetrics 
        label="Chance of Rain"
        data={ rainChance }
      />
      <RightWidgetMetrics 
        label="Wind Speed"
        data={ windSpeed }
      />
    </div>
  )
}
