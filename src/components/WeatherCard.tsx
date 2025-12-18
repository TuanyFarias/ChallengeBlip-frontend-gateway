import { WeatherResponse } from '../dto/WeatherResponse'

interface WeatherCardProps {
    weather: WeatherResponse
    city: string
}

export function WeatherCard({ weather, city }: WeatherCardProps) {
    return (
        <div style={{ border: '5px solid #ccc', padding: 30, marginTop: 20, borderRadius: 8, width: 950, textAlign:'center', boxShadow: '0 4px 15px rgba(0,0,0,0.5)' }}>
            <h2>{city}</h2>

            <p><strong>Temperatura:</strong>{weather.current.temp_c}°C</p>
            <p><strong>Período:</strong> {weather.current.is_day === 1 ? '☀️ Dia' : '🌙 Noite'}</p>
            <p><strong>Sensação Térmica:</strong> {weather.current.feelslike_c}</p>
            <p><strong>Condição:</strong> {weather.current.condition.text}</p>
            <p><strong>Umidade:</strong> {weather.current.humidity}%</p>
            <p><strong>Nuvens:</strong> {weather.current.cloud}%</p>
            <p><strong>Última atualização:</strong> {weather.current.last_updated}</p>
            <img src={weather.current.condition.icon} alt={weather.current.condition.text} />
        </div>
    )
}
