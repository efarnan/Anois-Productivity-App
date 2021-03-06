import './App.css';
import {WeatherMain} from './components/weather-main';
import StatusLine from './components/statusline';
import Quotes from './components/quotes';
import Navbar from './components/navbar';
import { useEffect, useState } from 'react';
import { FaAdjust } from 'react-icons/fa';

 
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

  const [tasks, setTaks] = useState([]);
  useEffect( () => {
    console.log("using effect")
  }, []);

  function addEmptyTask(status){

  }

  function addTask(taskToAdd){

  } 

  function deleteTask(taskId){

  }
  function moveTask(id, newStatus){

  }
  function saveTasksToLocalStorage(tasks){

  }

  function loadTasksFromLocalStorage(){

  }


  return (
    <div className="App">
      <Navbar/>
      <main>

        <section className="section-1">
          <div>
            {
          weather ? <WeatherMain location={location} temperature={weather.temp_c} condition={weather.condition}/> : "Loading..."
            }
          </div>

          <FaAdjust className="logo" size={100}/>
      
          <Quotes/>
        </section>

        <section className='section-2'>
          <StatusLine 
          task={tasks}
          addEmptyTask={addEmptyTask}
          addTask={addTask}
          deleteTask={deleteTask}
          moveTask={moveTask}
          status="To-Do"
          />
         <StatusLine 
          tasks={tasks}
         addEmptyTask={addEmptyTask}
         addTask={addTask}
         deleteTask={deleteTask}
         moveTask={moveTask}
         status="In Progress"
          />
         <StatusLine 
          tasks={tasks}
          addEmptyTask={addEmptyTask}
          addTask={addTask}
          deleteTask={deleteTask}
          moveTask={moveTask}
          status="Done"
          />
        </section>
      </main>
    </div>
  );
}

export default App;
