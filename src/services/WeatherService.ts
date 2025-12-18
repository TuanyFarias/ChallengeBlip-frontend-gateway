import { WeatherResponse } from '../dto/WeatherResponse'

export async function getWeather(city: string): Promise<WeatherResponse> {
    const url = `http://localhost:5000/api/weather?city=${encodeURIComponent(city)}`

    const response = await fetch(url)
    if (!response.ok) {
        throw new Error('Erro ao buscar o clima no backend')
    }

    const data = await response.json()
    return data as WeatherResponse
}