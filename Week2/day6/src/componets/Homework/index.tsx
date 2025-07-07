  import React, { useEffect, useState } from 'react';
import styles from './weather.module.css';
  import { Wifi,SignalHigh,BatteryFull  } from 'lucide-react';

const WeatherComponent = () => {
  const [location, setLocation] = useState<string>('Da Nang');
  const [weather, setWeather] = useState<any>(null);
  const [count, setCount] = useState<number>(0)

  const handleChangeLocation = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
    // setCount(prev=>prev+1)
  };

  const keyEnter = (e: React.KeyboardEvent<HTMLInputElement>) =>{
    if (e.key === 'Enter') {
      console.log('Bạn đã nhấn Enter!:'+ location);
      setCount(prev=>prev+1)
    }
  }
  
  useEffect(() => {
    const fetchWeather = async () => {
      const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=c9a0ca46550648b29ce125849232709&q=${location}&days=1&aqi=no&alerts=no&lang=vi`);
      const data = await response.json();
      console.log(data);
      setWeather(data);
    };
    fetchWeather();
  }, [count]);
  
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.timenow}>{weather?.location?.localtime?.slice(-5)}</div>
        <div className={styles.iconHeader}>
          <SignalHigh/>
          <Wifi/>
          <BatteryFull/>
          </div>
      </div>
      <div className={styles.searchBar}>
        <input type="text" name="" id="" placeholder={location} onChange={handleChangeLocation} onKeyDown={keyEnter}/>
      </div>
      <div className={styles.weather}>
        <div className={styles.temperature}>
          <h1>{Math.floor(weather?.current?.temp_c)}°</h1>
        </div>
        <div className={styles.weatherIcon}>
          <img src={weather?.current?.condition?.icon} alt="" />
        </div>
      </div>
        <h3>{weather?.current?.condition?.text}</h3>
      <div className={styles.forecast}>
          <div className={styles.forecastLeft}>
            <div className={styles.title}>Humidity</div>
            <div className={styles.value}>{weather?.current?.humidity} %</div>
          </div>
          <div className={styles.verticalLine}></div>
          <div className={styles.forecastRight}>
            <div className={styles.title}>Wind</div>
            <div className={styles.value}>{weather?.current?.wind_kph} km/h</div>
          </div>
      </div>
      <div className={styles.footer}>
        <h1>Now</h1>
        <div className={styles.footerContainer}>
          {weather?.forecast?.forecastday[0]?.hour?.slice(0, 4).map((item:any, index:number)=>(
            <div className={styles.weatherItem}>
              <img src={item.condition.icon} alt="" />
              <div className={styles.temperatureNow}>{Math.floor(item.temp_c)}°</div>
              <div className={styles.timeNow}>{index === 0 ? 'Now' : item.time.slice(-5)}</div>
            </div>
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default WeatherComponent;