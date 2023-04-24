
export interface weatherBudState{
    weatherCard?: WeatherCard;
}

export interface WeatherCard {
    location?: LocationInfo;
    currentWeather?: WeatherInfo;
}

export interface LocationInfo {
    country?: String;
    name?: String;
    region?: String;
    tz_id?: String;
}

export interface WeatherInfo {
    
}