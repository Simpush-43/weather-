const BaseUrl = 'https://api.weatherapi.com/v1/forecast.json?key=201f48ea99c14eecbd061152250803'

  const Cleancityname = (city)=>{
    return city.normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
  };

export const getWeatherDataForCity = async(city)=>{
  const cleancity = Cleancityname(city)
  const encodedCity = encodeURIComponent(cleancity); 
const Response = await fetch(`${BaseUrl}&q=${encodedCity}&days=3&aqi=yes&alerts=no`);
return await Response.json();
}
export const getWeatherDataForLocation = async(lat,lon)=>{
  const Response = await fetch(`${BaseUrl}&q=${lat},${lon}&aqi=yes`);
return await Response.json();
}
export const getWeatherDataforNearbyCity = async (lat,lon)=>{
  const Response = await fetch(`${BaseUrl}&Q=${lat},${lon}&aqi=yes`);
  return await Response.json();
}