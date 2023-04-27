import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API_URL } from "../common/constants";
import { getHttpParams } from "../core/utils/apiUtils";

const weatherObj = {};
@Injectable({providedIn: 'root'})
export class WeatherBudService {

    constructor(private httpClient: HttpClient){

    }
   getCurrentWeather(payload: any): Observable<any> {
        const tempUrl = API_URL+'/current';
        const params = getHttpParams({location: payload.currentLocation, responseType: payload.responseType});
        return this.httpClient.get(tempUrl, {params: params} );        
    }
}

