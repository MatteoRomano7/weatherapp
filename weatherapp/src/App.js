import "./App.css"
import MyNav from "./components/MyNav"
import WeatherApp from "./components/WeatherApp/WeatherApp"

function App() {
  return (
    <div>
      <MyNav />

      <div className="App">
        <WeatherApp />
      </div>
    </div>
  )
}

export default App
