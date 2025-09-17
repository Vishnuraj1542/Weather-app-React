import { useState,useEffect } from "react"
function App() {
  const[city,setCity]=useState('')

  const API_KEY = process.env.REACT_APP_API_KEY
  https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API_ KEY}

  return (
    <div className="content">
      <h1>Weather</h1>
      <div className="box">
        <p>Location:{city}</p>
        <p> 18°C </p>
        <p>☀️</p>
      </div>
      <div className="search">
        <input type="text" onChange={(e)=>setCity(e.target.value)}></input>
        <button onClick={'checkWeather'}>search</button>
      </div>
    </div>
  )
}

export default App
