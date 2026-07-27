import { describe, test, expect, jest } from "@jest/globals";
import { getWeather } from "./weather";

describe("getWeather", () => {
  test("returns weather data", async () => {
    const mockData = {
      current: {
        temperature_2m: 28,
      },
      daily: {},
    };

    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => mockData,
    } as Response);

    await expect(getWeather(120.98, 15.48)).resolves.toEqual(mockData);

    expect(fetch).toHaveBeenCalledTimes(1);
  });

  test("gets live weather data", async () => {
    const data = await getWeather(120.9842, 15.4869);

    expect(data).toBeDefined();
    expect(data.current).toBeDefined();
    expect(data.current.temperature_2m).toBeDefined();
  });
});