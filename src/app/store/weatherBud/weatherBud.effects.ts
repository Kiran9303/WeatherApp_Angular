import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { WeatherBudService } from "src/app/services/weatherApi.service";
import { UserLoginFailure, UserLoginRequest, UserLoginSuccess, WeatherBudActionTypes } from "./weatherBud.actions";
import { HttpResponse } from "@angular/common/http";
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from "rxjs";

@Injectable()
export class WeatherBudEffects {
    constructor(
        private actions$: Actions,
        private weatherBudService: WeatherBudService
    ){}

    getUserLoginInfo$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(WeatherBudActionTypes.USER_LOGIN_REQUEST),
            switchMap((action: UserLoginRequest) => {
                // this.logger.log('userLoginRequested');
                return this.weatherBudService.getCurrentWeather(action.payload).pipe(
                    map((res: HttpResponse<any>) => {
                        if(res.status !== 200){
                            console.log('not 200 response');
                        }
                        return new UserLoginSuccess(res.body);
                    }),
                    catchError((err: any) => {
                        return of(new UserLoginFailure());
                    })
                )
            })
        )
    })
}