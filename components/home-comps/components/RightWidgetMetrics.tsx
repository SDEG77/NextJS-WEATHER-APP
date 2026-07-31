type props = {
  label: string,
  data: string
}

export default function RightWidgetMetrics({
  label = "no label provided",
  data = "no data provided",
}: props) {
  return (
    <div className="flex flex-col">
      <p className="text-lg">{ label }</p>
      <p className="text-xl font-bold">{ data }</p>
    </div>
  )
}
