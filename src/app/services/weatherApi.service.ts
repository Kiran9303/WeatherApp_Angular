import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API_URL } from "../common/constants";

const weatherObj = {};
@Injectable({providedIn: 'root'})
export class WeatherApiService {

    constructor(private httpClient: HttpClient){

    }
   getCurrentWeather(): Observable<any> {
        const tempUrl = API_URL;
        // const url = 'https://api.weatherapi.com/v1/current.json?key=158405d6ebf848ce8bd40910232004&q=ottawa&aqi=no';
        return this.httpClient.get(tempUrl);        
    }
}

