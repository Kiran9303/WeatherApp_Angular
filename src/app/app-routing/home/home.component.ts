import { Component, OnInit } from '@angular/core';
import { WeatherBudService } from '../../services/weatherApi.service';

@Component({
  selector: 'weatherBud-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  weatherCardInfo: any;

  constructor(private weatherApiService: WeatherBudService) { }

  ngOnInit(): void {
    this.weatherApiService.getCurrentWeather('ottawa', 'application/json').subscribe(
      (response) => {
        this.weatherCardInfo = response;
      },
      (error) => {
        console.log('error is:',error);
      }
    )
  }

}
