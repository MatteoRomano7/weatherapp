import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion"

import "./forecast.css"

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
]

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay()
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  )

  return (
    <div>
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daylyItem">
                  <img
                    src={`icons/${item.weather[0].icon}.png`}
                    alt="weather"
                    className="iconSmall"
                  />
                  <label className="day">{forecastDays[idx]}</label>
                  <label className="description">
                    {item.weather[0].description}
                  </label>
                  <label className="min-max">
                    {Math.round(item.main.temp_min)}°C and
                    {Math.round(item.main.temp_max)}°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="dailyDetailsGrid">
                <div className="dailyDetailsGridItem">
                  <label>Pressure</label>
                  <label>{item.name.pressure} hPa</label>
                </div>
                <div className="dailyDetailsGridItem">
                  <label>Humidity</label>
                  <label>{item.name.humidity} %</label>
                </div>
                <div className="dailyDetailsGridItem">
                  <label>Clouds</label>
                  <label>{item.clouds.all} %</label>
                </div>
                <div className="dailyDetailsGridItem">
                  <label>Wind Speed</label>
                  <label>{item.wind.speed} km/h</label>
                </div>
                <div className="dailyDetailsGridItem">
                  <label>Sea Level</label>
                  <label>{item.main.sea_level} m</label>
                </div>
                <div className="dailyDetailsGridItem">
                  <label>Feels like</label>
                  <label>{Math.round(item.main.feels_like)} °C</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
export default Forecast
