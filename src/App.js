import './App.css';

import { useEffect, useState } from 'react';

import Input from './components/Input';
import axios from 'axios';

function App() {
   const [degrees, setDegrees] = useState(null);
   const [location, setLocation] = useState(null);
   const [userLocation, setUserLocation] = useState(null);
   const [description, setDescription] = useState(null);
   const [icon, setIcon] = useState(null);
   const [humidity, setHumidity] = useState(null);
   const [wind, setWind] = useState(null);
   const [country, setCountry] = useState('');
   const [dataFetched, setDataFetched] = useState(false);

   const API_KEY = 'aa29646da73be5e791434efae0db9a84';

   const fetchData = async (e) => {
      e.preventDefault();

      try {
         const res = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${userLocation}&appid=${API_KEY}&units=metric`
         );

         const data = await res.data;

         setDegrees(data.main.temp);
         setLocation(data.name);
         setDescription(data.weather[0].description);
         setIcon(data.weather[0].icon);
         setHumidity(data.main.humidity);
         setWind(data.wind.speed);
         setCountry(data.sys.country);

         setDataFetched(true);
      } catch {
         alert('You must write to true location');
      }
   };

   const defaultDataFetched = async () => {
      if (!dataFetched) {
         const res = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=istanbul&appid=${API_KEY}&units=metric`
         );
         const data = await res.data;

         setDegrees(data.main.temp);
         setLocation(data.name);
         setDescription(data.weather[0].description);
         setIcon(data.weather[0].icon);
         setHumidity(data.main.humidity);
         setWind(data.wind.speed);
         setCountry(data.sys.country);
      }
   };

   useEffect(() => {
      defaultDataFetched();
   }, [dataFetched]);

   return (
      <div className="App">
         <div className="weather">
            <Input
               text={(e) => setUserLocation(e.target.value)}
               submit={fetchData}
               func={fetchData}
            />

            <div className="weather_display">
               <h3 className="weather_location">Weather in {location}</h3>

               <div>
                  <h1 className="weather_degrees">{degrees} °C</h1>
               </div>

               <div className="weather_description">
                  <div>
                     <div className="weather_description_head">
                        <span className="weather_icon">
                           <img
                              alt="icon"
                              src={`http://openweathermap.org/img/w/${icon}.png`}
                           />
                        </span>
                        <h3>{description}</h3>
                     </div>
                     <h3>Humidity: {humidity}%</h3>
                     <h3>Wind Speed: {wind}m/s</h3>
                  </div>

                  <div className="weather_country">
                     <h3>{country}</h3>
                     <h2 className="weather_date">4/30/2022, 2:05:24 PM</h2>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default App;
