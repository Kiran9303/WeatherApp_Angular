import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WeatherCoreComponent } from 'src/app/weather-components/weather-home.component';
import { SingleLocationComponent } from 'src/app/weather-components/single-location/single-location/single-location.component'


export const routes = [
  { path: '', component: WeatherCoreComponent },
  { path: 'login', component: SingleLocationComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot( routes, {enableTracing: false})
  ]
})
export class AppRoutingModule { }
