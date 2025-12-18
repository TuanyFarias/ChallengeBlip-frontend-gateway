import { WeatherResponse } from '../dto/WeatherResponse'
const X_API_KEY = import.meta.env.VITE_X_API_KEY

export async function getWeather(city: string): Promise<WeatherResponse> {
    const url = `http://localhost:5000/api/weather?city=${encodeURIComponent(city)}`

    const response = await fetch(url, {
    headers: {
        'Authorization': X_API_KEY
    },
    })
    if (!response.ok) {
        throw new Error('Algo deu errado na sua requisição!')
    }

    const data = await response.json()
    return data as WeatherResponse
}