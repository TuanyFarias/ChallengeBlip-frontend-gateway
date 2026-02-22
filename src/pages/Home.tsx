import { useState } from 'react'
import { getWeather } from '../services/WeatherService'
import { WeatherResponse } from '../dto/WeatherResponse'
import { WeatherCard } from '../components/WeatherCard'

export function Home() {
    const [city, setCity] = useState('')
    const [weather, setWeather] = useState<WeatherResponse | null>(null)
    const [error, setError] = useState<string | null>(null)

    const handleSearch = async () => {
        try {
            setError(null)
            const data = await getWeather(city)
            setWeather(data)
        } catch (err: any) {
            setError(err.message)
        }
    }

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                width: '100vw',        
                boxSizing: 'border-box', 
                padding: 20,
                backgroundColor: '#121212', 
                margin: 0
            }}
        >
            
            <img 
                src="https://capricho.abril.com.br/wp-content/uploads/2022/08/NegativeFarawayDungenesscrab-size_restricted.gif?w=620" 
                alt="Weather Animation" 
                style={{ 
                    width: '950px', 
                    borderRadius: '8px', 
                    marginBottom: '20px',
                    display: 'block', 
                    WebkitMaskImage: 'radial-gradient(circle, black 40%, rgba(0,0,0,0) 100%)',
                    maskImage: 'radial-gradient(circle, black 40%, rgba(0,0,0,0) 100%)',
                }} 
            />

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 20 }}>
                <input
                    type="text"
                    value={city}
                    onChange={e => setCity(e.target.value)}
                    placeholder="Cidade e Estado: 'São Paulo, SP' "
                    style={{
                        padding: '10px',
                        borderRadius: '5px',
                        border: '1px solid #ccc',
                        width: '250px'
                    }}
                />
                <button 
                    onClick={handleSearch} 
                    style={{ 
                        marginTop: 10,
                        padding: '10px 20px',
                        cursor: 'pointer',
                        borderRadius: '5px',
                        backgroundColor: '#007bff',
                        color: 'white',
                        border: 'none',
                        width: '100%'
                    }}
                >
                    Buscar
                </button>
            </div>

            {error && <p style={{ color: 'red', marginTop: 10 }}>{error}</p>}

            {weather && (
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <WeatherCard weather={weather} city={city} />
                </div>
            )}
        </div>
    )
}