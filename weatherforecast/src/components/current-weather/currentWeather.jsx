import "./currentWeather.css"

const CurrentWeather = ({ data }) => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weatherDescription">{data.weather[0].description}</p>
        </div>
        <img
          src={`icons/${data.weather[0].icon}.png`}
          alt="icon"
          className="weather-icon"
        />
      </div>
      <div className="bottom">
        <p className="temperature">{Math.round(data.main.temp)}°C</p>
        <div className="details">
          <div className="parameterRow">
            <span className="parameterLabel top">Details</span>
          </div>
          <div className="parameterRow">
            <span className="parameterLabel">Feels like</span>
            <span className="parametervalue">
              {Math.round(data.main.feels_like)}°C
            </span>
          </div>
          <div className="parameterRow">
            <span className="parameterLabel">Wind</span>
            <span className="parametervalue"> {data.wind.speed} km/h</span>
          </div>
          <div className="parameterRow">
            <span className="parameterLabel">Humidity</span>
            <span className="parametervalue"> {data.main.humidity}</span>
          </div>
          <div className="parameterRow">
            <span className="parameterLabel">Pressure</span>
            <span className="parametervalue"> {data.main.pressure}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CurrentWeather
