import "./App.css";
import axios from "axios";
import Input from "./components/Input";
import { useEffect } from "react";

function App() {
  const API_KEY = "aa29646da73be5e791434efae0db9a84";

  const fetchData = async () => {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=tokyo&appid=${API_KEY}`
    );
    const data = await res.data;

    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="weather">
        <Input />

        <div className="weather_display">
          <h3 className="weather_location">Weather in Tokyo</h3>

          <div>
            <h1 className="weather_degrees">25 °C</h1>
          </div>

          <div className="weather_description">
            <div>
              <div className="weather_description_head">
                <span className="weather_icon">🌤️</span>
                <h3>Partly cloud</h3>
              </div>
              <h3>Humidity: 84%</h3>
              <h3>Wind Speed: 5.66 m/s</h3>
            </div>

            <div className="weather_country">
              <h3>JP</h3>
              <h2 className="weather_date">4/30/2022, 2:05:24 PM</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
