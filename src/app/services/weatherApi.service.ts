import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API_URL } from "../common/constants";
import { getHttpParams } from "../core/utils/apiUtils";

const weatherObj = {};
@Injectable({providedIn: 'root'})
export class WeatherApiService {

    constructor(private httpClient: HttpClient){

    }
   getCurrentWeather(currentLocation: String, responseType: String): Observable<any> {
        const tempUrl = API_URL+'/current';
        const params = getHttpParams({location: currentLocation, responseType: responseType});
        return this.httpClient.get(tempUrl, {params: params} );        
    }
}

