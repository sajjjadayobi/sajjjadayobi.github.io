import { useState, useEffect } from 'react'
import { IoCloudyOutline, IoSunnyOutline, IoRainyOutline, IoSnowOutline } from 'react-icons/io5'

const Weather = () => {
  const [weather, setWeather] = useState({
    temp: 24,
    condition: 'Cloudy',
    location: 'Tehran'
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // For demo purposes, using static data
    // In production, you would fetch from OpenWeatherMap API
    const fetchWeather = async () => {
      try {
        // Simulating API call
        setTimeout(() => {
          setWeather({
            temp: 24,
            condition: 'Cloudy',
            location: 'Tehran'
          })
          setLoading(false)
        }, 500)

        // Example of real API call (commented out):
        // const API_KEY = 'your_api_key_here'
        // const response = await fetch(
        //   `https://api.openweathermap.org/data/2.5/weather?q=Tehran&appid=${API_KEY}&units=metric`
        // )
        // const data = await response.json()
        // setWeather({
        //   temp: Math.round(data.main.temp),
        //   condition: data.weather[0].main,
        //   location: data.name
        // })
      } catch (error) {
        console.error('Weather fetch error:', error)
        setLoading(false)
      }
    }

    fetchWeather()
  }, [])

  const getWeatherIcon = (condition) => {
    switch (condition.toLowerCase()) {
      case 'clear':
      case 'sunny':
        return <IoSunnyOutline className="w-5 h-5 text-amber-300" />
      case 'rain':
      case 'drizzle':
        return <IoRainyOutline className="w-5 h-5 text-blue-300" />
      case 'snow':
        return <IoSnowOutline className="w-5 h-5 text-blue-100" />
      case 'clouds':
      case 'cloudy':
      default:
        return <IoCloudyOutline className="w-5 h-5 text-gray-300" />
    }
  }

  if (loading) {
    return (
      <div className="flex items-center space-x-2 animate-pulse">
        <div className="w-5 h-5 bg-white/20 rounded" />
        <div className="w-24 h-4 bg-white/20 rounded" />
      </div>
    )
  }

  return (
    <div className="flex items-center space-x-2">
      {getWeatherIcon(weather.condition)}
      <span className="text-white/80 text-sm font-light">
        {weather.condition} in {weather.location}
      </span>
    </div>
  )
}

export default Weather
