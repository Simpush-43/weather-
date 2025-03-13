import { useState } from 'react'
import './App.css'
import './futureweather.css'
import {useEffect} from 'react'
import Card from '../../Componets/Card'
import Input from '../../Componets/Input'
import Button from '../../Componets/Button'
import {useWeather } from './Context/Weather'
import RefreshButton from '../../Componets/Refreshbutton'
import FutureWeather from '../../Componets/FutureWeather'
function App() {
  const weather = useWeather();
  console.log(weather)
useEffect(() => {
  // get current location
  weather.fetchCurrentUserLocation()
}, [])

  
  return (
    <>
      <div className='App'>
        Search the weather
      </div>
      <hr />
      <div className='Searchbox'>
      <Input/><Button onClick={weather.fetchData} value='Search'/>
      </div>
      <Card/>
      <RefreshButton value='Refresh' onClick={weather.fetchCurrentUserLocation}/>
<FutureWeather/>
    </>
  )
}

export default App
