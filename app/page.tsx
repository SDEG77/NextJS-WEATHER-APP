import "dotenv/config"

export default async function Home() {
  const { APP_URL } = process.env;
  const latitude = 15.5149;
  const longitude = 120.9913;
  
  const request = await fetch(`${APP_URL}/api/weather?latitude=${latitude}&longitude=${longitude}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await request.json();

  if (request.status === 400) {
    return (
      <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
        <main className="flex flex-col gap-4 items-center">
          <h1 className="text-2xl"> Cabanatuan City, Nueva Ecija </h1>

          <p>{data.message}</p>
        </main>
      </div>
    );
  }

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
      <main className="flex flex-col gap-4 items-center">
        <h1 className="text-2xl"> Cabanatuan City, Nueva Ecija </h1>

        <ol>
          { 
            data.metrics.map((metric: {label: string, data: string}) => {
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
