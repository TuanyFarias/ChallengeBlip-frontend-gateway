export interface WeatherResponse {
    current: CurrentWeather
}

export interface CurrentWeather {
    name: string
    last_updated: string
    temp_c: number
    feelslike_c: number
    humidity: number
    cloud: number
    is_day: number
    condition: Condition
}

export interface Condition {
    text: string
    icon: string
    code: number
}