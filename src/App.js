import "./App.css";

// WeatherStatus Component
export function WeatherStatus() {}

// Main App Component
function App() {
  const cities = [
    { name: "Singapore", temperature: 30, condition: "Sunny" },
    { name: "Tokyo", temperature: 22, condition: "Cloudy" },
    { name: "New York", temperature: 20, condition: "Rainy" },
    { name: "Sydney", temperature: 24, condition: "Windy" },
  ];

  // Calculate average temperature
  const totalTemperature = cities.reduce(
    (sum, city) => sum + city.temperature,
    0
  );
  const averageTemperature = totalTemperature / cities.length;

  return (
    <div className="app">
      <h1>Weather Forecast Dashboard</h1>

      {/* City List */}
      <div className="city-list"></div>
    </div>
  );
}

export default App;
