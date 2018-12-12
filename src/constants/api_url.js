const location =  "Bogota,co";
const api_key =  "dd9172ff92d9e67b9cd76345513868c1";
const url_base_weather =  "https://api.openweathermap.org/data/2.5/weather";
export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}&units=metric`;