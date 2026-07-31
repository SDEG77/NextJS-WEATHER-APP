type props = {
  weatherIcon: string,
  weatherLabel: string,
  temp: string
}

export default function LeftWidget({ 
  weatherIcon = "no icon provided",
  weatherLabel = "no label provided", 
  temp = "no temperature provided", 
}: props) {
  return (
    <div className="flex flex-col gap-3">
      <div>
        <p className="text-6xl w-fit -ml-3">{ weatherIcon  }</p>
        <h1 className="text-3xl">{ weatherLabel }</h1>
        <p className="text-sm -mt-1">Cabanatuan City</p>
      </div>
      
      <h1 className="text-5xl font-bold">{ temp }</h1>
    </div>
  )
}
