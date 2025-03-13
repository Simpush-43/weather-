import React from 'react'
import {useWeather} from '../Context/Weather'
const Input = () => {
  const weather = useWeather()
  console.log('Weather:',weather)
  return (
    <div>
      <input type="text" 
      className='input-field'
      placeholder='Enter City...'
      value={weather.SearchCity} 
      onChange={(e)=>weather.setSearchCity(e.target.value)} />
    </div>
  )
}

export default Input
