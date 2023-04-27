import { Action } from "@ngrx/store";
import { userLoginInfoState, weatherInfoState } from "./weatherBud.model";




export enum WeatherBudActionTypes {
    USER_LOGIN_REQUEST = '[User request] User login request',
    USER_LOGIN_SUCCESS = '[User request] User login request success',
    USER_LOGIN_FAILURE = '[User request] User login request failure'
}

export class UserLoginRequest implements Action {
    readonly type = WeatherBudActionTypes.USER_LOGIN_REQUEST
    constructor(public payload: weatherInfoState){}
}

export class UserLoginSuccess implements Action {
    readonly type = WeatherBudActionTypes.USER_LOGIN_SUCCESS
    constructor(public payload: weatherInfoState){}
}

export class UserLoginFailure implements Action {
    readonly type = WeatherBudActionTypes.USER_LOGIN_FAILURE
    //constructor(public payload: userLoginInfoState){}
}

export type WeatherBudActions =  UserLoginRequest 
| UserLoginSuccess 
| UserLoginFailure;