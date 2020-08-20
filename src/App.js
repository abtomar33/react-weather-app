import React ,{useState} from 'react';
import Weather from './weather';

const api={
  key: "e55f10662c84478847f0db03677b583e",
  base: "https://api.openweathermap.org/data/2.5/"
}
function App() {
  const [query,setQuery]=useState('');
  const [forecast,setForecast]=useState({});

  const search=evt=>{
    if(evt.key==="Enter"){
      fetch(`${api.base}forecast?q=${query}&units=metric&APPID=${api.key}`)
      .then(res=>res.json())
      .then(result=>{
        setForecast(result);
        console.log(forecast);
        setQuery('');
        
        
    });
  }
}


  const dateBuilder=(d)=>{
    let months=["January","February","March","April","May","June","July","August","September","October","November","December"];
    let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    let day=days[d.getDay()];
    
    let date=d.getDate();
    let month=months[d.getMonth()];
    let year=d.getFullYear();
    

    return `${day} ${date} ${month} ${year}`
  }

 return (
    
    <div className="app">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Search Cities" onChange={e=>setQuery(e.target.value)}
          value={query} onKeyPress={search}/>

        </div>
        {forecast && forecast.city ? (
        <div className="weather-container">
          <div className="location">{forecast.city.name}, {forecast.city.country}</div>
          <div className="date">Today: {dateBuilder(new Date())}</div>

          {forecast.list.map((item,index) =>{
           if(index,5){
            return(
                <Weather temp={item.main.temp}
                  date={item.dt_txt}
                  weathertype={item.weather[0].description}
                  humidity={item.main.humidity}
                  speed={item.wind.speed}
                  mintemp={item.main.temp_min}
                  maxtemp={item.main.temp_max}/>  
            );}
          })}
        
        </div>
        ) :null}
       
      </main>
    </div>
  );
}

export default App;
