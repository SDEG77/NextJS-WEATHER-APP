export default function Loading () {
  return (
    <div className="flex w-screen h-screen bg-black/25 backdrop-blur-xs justify-center items-center fixed">
      <p className="text-white w-fit text-6xl font-extrabold tracking-wider m-0">
        Loading...
      </p>
    </div>
  );
}