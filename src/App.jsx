import { useState } from "react"
function App() {
  const[city,setCity]=useState('Palakkad')
  // process.env.REACT_APP_API_KEY
  https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

  return (
    <div className="content">
      <h1>Weather</h1>
      <div className="box">
        <p>Location:</p>
        <p> 18°C </p>
        <p>☀️</p>
      </div>
    </div>
  )
}

export default App
