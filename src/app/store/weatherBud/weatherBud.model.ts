
export interface userLoginInfoState{
    userId: string;
    password?: string;
    homeLocation?: string;
}

export interface weatherInfoState{
    singleWeatherInfo: singleWeatherInfoState;
    multipleWeatherInfo: multipleWeatherInfoState;
}

export interface singleWeatherInfoState{
    locationName: string;
    temperature: number;
    temperature_feels_like: number;
    humidity: number;
    wind_speed: number;
    currentTime: string;
}

export interface multipleWeatherInfoState {
    multipleWeatherInfo: singleWeatherInfoState[];
}
