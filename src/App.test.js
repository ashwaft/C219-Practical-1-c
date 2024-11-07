import { render, screen } from "@testing-library/react";
import App, { WeatherStatus } from "./App";

// Set up the root div that React will render into
beforeEach(() => {
  // Enable fake timers
  jest.useFakeTimers();
});

afterEach(() => {
  // Clear mocked timers and system time after each test
  jest.useRealTimers();
});

test("displays 'It's a Hot Day' and 'Stay Hydrated!' button when average temperature is high", () => {
  render(<WeatherStatus averageTemperature={28} />); // Pass high average temperature

  expect(screen.getByText(/It's a Hot Day/i)).toBeInTheDocument();
  expect(
    screen.getByRole("button", { name: /Stay Hydrated!/i })
  ).toBeInTheDocument();
});

test("displays 'It's a Cool Day' when average temperature is low", () => {
  render(<WeatherStatus averageTemperature={20} />); // Pass low average temperature

  expect(screen.getByText(/It's a Cool Day/i)).toBeInTheDocument();
});

test("renders each city with name, temperature, and condition", () => {
  render(<App />);

  const cities = [
    { name: "Singapore", temperature: 30, condition: "Sunny" },
    { name: "Tokyo", temperature: 22, condition: "Cloudy" },
    { name: "New York", temperature: 20, condition: "Rainy" },
    { name: "Sydney", temperature: 24, condition: "Windy" },
  ];

  cities.forEach((city) => {
    expect(screen.getByText(new RegExp(city.name, "i"))).toBeInTheDocument();
    expect(
      screen.getByText(new RegExp(`${city.temperature}°C`, "i"))
    ).toBeInTheDocument();
    expect(
      screen.getByText(new RegExp(city.condition, "i"))
    ).toBeInTheDocument();
  });
});
