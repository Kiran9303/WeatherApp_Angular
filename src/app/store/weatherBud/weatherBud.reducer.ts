import { WeatherBudActionTypes, WeatherBudActions } from "./weatherBud.actions";
import { multipleWeatherInfoState, singleWeatherInfoState, userLoginInfoState, weatherInfoState } from "./weatherBud.model";
import { WeatherBudState } from "./weatherBud.state";

export const initialState: WeatherBudState = {
    loginData: {} as userLoginInfoState,
    weatherInfo: {} as weatherInfoState,
};

export function reducer (state = initialState, action: WeatherBudActions) : WeatherBudState {
    switch(action.type){
        case WeatherBudActionTypes.USER_LOGIN_REQUEST: {
            return initialState;
        }
        case WeatherBudActionTypes.USER_LOGIN_SUCCESS: {
            return {
                ...state,
                weatherInfo: action.payload
            };
        }
        default: {
            return state;
        };
    }
    
}