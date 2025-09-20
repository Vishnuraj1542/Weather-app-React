import { useState,useEffect } from "react"
function App() {
  const[city,setCity]=useState('')
  const[weather,setWeather]=useState(null)

  const API_KEY = Process.env.REACT_APP_API_KEY


 const checkWeather = async()=>{
  if(!city){
    return alert('enter a city name')
  }
  try{
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${city}&lon={lon}&appid=${API_KEY}`)
  const data = await response.json()

  if(data.cod === 404){
    alert('city not found')
  }
  setWeather(data)
  }
  catch(error){
    console.error('not found ',error)
  }
 }

  return (
    <div className="content">
      <h1>Weather</h1>
      <div className="box">
        <p className="location">Location:{city}</p>
        <p> 18°C </p>
        <p>☀️</p>
      </div>
      <div className="search">
        <input type="text" onChange={(e)=>setCity(e.target.value)}></input>
        <button onClick={checkWeather}>search</button>
      </div>
    </div>
  )
}

export default App
