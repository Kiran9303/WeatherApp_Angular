import { Component, OnInit } from '@angular/core';
import { ALL_WEATHER_BUTTON, CURRENT_LOCATION_BUTTON, HOME_BUTTON } from 'src/app/common/constants';

export interface menuItemList{
  buttonName: string;
  buttonVal: string;
}

@Component({
  selector: 'weatherBud-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent implements OnInit {

  menuItems: menuItemList [] = [
    { buttonName: 'Home', buttonVal: HOME_BUTTON},
    { buttonName: 'All weather', buttonVal: ALL_WEATHER_BUTTON},
    { buttonName: 'Current location', buttonVal: CURRENT_LOCATION_BUTTON}
  ];
  constructor() { }

  ngOnInit(): void {
  }

  getWeather(buttonVal: string) {
    console.log('clicked button', buttonVal);
  }

}
