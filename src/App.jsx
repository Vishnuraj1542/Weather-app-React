import { use } from "react"
import { useState,useEffect } from "react"
function App() {
  const[city,setCity]=useState('')
  const[weather,setWeather]=useState(null)

  const API_KEY = import.meta.env.VITE_API_KEY


 const checkWeather = async(city)=>{
  try{
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    const data = await response.json()

  if(data.cod === "404"){
    alert('city not found');
    return;
  }
  console.log(data)

  setWeather(data)
  }
  catch(error){
    console.error('not found ',error)
  }
 }
 useEffect(()=>{
  checkWeather('chalavara');
 },[]);

 const handleSearch=()=>{
  if(!city){
    alert('Enter a city name ');
    return;
  }
  checkWeather(city)
  setCity('')
 }
 

  return (
    <div className="content">
      {weather &&(
        <div className="app">
        <h1>Weather</h1>
        <div className="box">
          <p className="location">Location:{weather.name}</p>
          <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}></img>
          <p>{weather.weather[0].description}</p>
          <p>Temprature: {Math.round(weather.main.temp)}C</p>
        </div>
        <div className="">
          <p>Wind Speed : {weather.wind.speed}</p>
          <p>Pressure : {weather.main.pressure}</p>
          <p>Humidity : {weather.main.humidity}</p>
        </div>
      </div>
      )}
      <div className="search">
        <input type="text" placeholder="Enter a City Name" onChange={(e)=>setCity(e.target.value)} value={city}></input>
        <button onClick={handleSearch}>search</button>
      </div>
    </div>
  )
}

export default App
