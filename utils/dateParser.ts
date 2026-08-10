export const formatHour = (time: string): string => {
  const date: Date = new Date(time);

  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
};