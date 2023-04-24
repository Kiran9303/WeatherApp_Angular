import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WeatherCoreComponent } from 'src/app/weather-components/weather-home.component';
import { SingleLocationComponent } from 'src/app/weather-components/single-location/single-location/single-location.component'
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';


export const routes = [
  { path: '', component: HomeComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'weatherApp', component: WeatherCoreComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot( routes, {enableTracing: false})
  ]
})
export class AppRoutingModule { }
