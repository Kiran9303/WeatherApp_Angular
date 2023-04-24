import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from '../../services/weatherApi.service';

@Component({
  selector: 'weatherBud-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  weatherCardInfo: any;

  constructor(private weatherApiService: WeatherApiService) { }

  ngOnInit(): void {
    this.weatherApiService.getCurrentWeather().subscribe(
      (response) => {
        this.weatherCardInfo = response;
        console.log('response is:',response)
      },
      (error) => {
        console.log('error is:',error);
      }
    )
  }

}
