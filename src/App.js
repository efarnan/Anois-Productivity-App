import './App.css';
import {WeatherMain} from './components/weather-main';
import { useEffect, useState } from 'react';
 
function App() {
  const [weather, setCurrentWeather] = useState(false)
  const [location, setLocation] = useState(false)
  useEffect(() => {
   fetch('http://api.weatherapi.com/v1/current.json?key=8347e020041e459c8fd134059220802&q=Dublin').then(data => data.json()).then(data => {
    console.log(data)
    setCurrentWeather(data.current)
    setLocation(data.location)
   })
  }, [])  
 

  return (
    <div className="App">
      {
        weather ? <WeatherMain location={location} temperature={weather.temp_c} condition={weather.condition}/> : "Loading..."
      }

    </div>
  );
}

export default App;
