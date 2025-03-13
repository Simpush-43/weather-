import {createContext,useContext,useState} from 'react'
import{ getWeatherDataForCity,getWeatherDataForLocation} from '../App/index'
const WeatherContext = createContext(null);

export const useWeather = ()=>{
 return useContext(WeatherContext);  
};

export const WeatherProvider = (props)=>{
  // data search
  const [data,setdata] = useState(null);
  // city search
  const [SearchCity, setSearchCity] = useState(null);
  // function to fetch data 
  const fetchData = async()=>{
const Response = await getWeatherDataForCity(SearchCity);
setdata(Response);
  }

  const fetchCurrentUserLocation =()=>{
navigator.geolocation.getCurrentPosition((position)=>{
getWeatherDataForLocation(position.coords.latitude,
  position.coords.longitude).then(data=>setdata(data))
})
  }
  return(
<WeatherContext.Provider value={{data,SearchCity,setSearchCity,fetchData,fetchCurrentUserLocation}}>
  {props.children}
  </WeatherContext.Provider>
  )
};