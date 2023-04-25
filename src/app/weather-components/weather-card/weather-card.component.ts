import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'weatherBud-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})


export class WeatherCardComponent {

  @Input() weatherCardInfo?: any;
  constructor() { }

}
