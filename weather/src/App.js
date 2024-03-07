import './App.css';
import {useState} from 'react';
import Display from './diaplay';
async function fetchData(search){
  let access_key = "9e059b7a17254104aff130330240703";
  try{
    let response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${access_key}&q=${search}`);
    if(!response.ok){
      window.location.reload();
      alert("Invalid location! Try again");
    }
    let result = await response.json();
    return result;  
  }
  catch(error){
    alert(error);
  }
}

function App() {
  const [search,setSearch] = useState('');
  const [weatherData,setWeatherData] = useState('');
  const changeSearchValue = (e)=>{
    setSearch(e.target.value);
  }
  const searchWeather = async () => {
    try {
      const data = await fetchData(search);
      setWeatherData(data); 
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };
  return (
    <>
      <div className="container">
        <h2>Weather App</h2>
        <input 
          type="text" 
          className='input' 
          value={search}
          onChange={changeSearchValue}  
          placeholder='Search for a place'
        />
        <button className='button' onClick={searchWeather}>Search</button>
        {(weatherData) ?
          <Display {...weatherData}/>
          :
          <p>Fetched data will appear here</p>
        }
      </div>
    </>
  );
}
export default App;
