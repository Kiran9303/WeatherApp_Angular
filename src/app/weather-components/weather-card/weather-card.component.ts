import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'weatherBud-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})


export class WeatherCardComponent implements OnInit {

  @Input() weatherCardInfo: any;
  constructor() { }

  ngOnInit(): void {
  }

}
