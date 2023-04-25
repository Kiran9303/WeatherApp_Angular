import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherCardComponent } from './weather-card.component';

describe('WeatherCardComponent', () => {
  let component: WeatherCardComponent;
  let fixture: ComponentFixture<WeatherCardComponent>;

  const cardInfo = {
    location: {
        name: "Ottawa",
        region: "Ontario",
        country: "Canada",
        localtime: "2023-04-24 22:42"
    },
    current: {
        temp_c: 6,
        temp_f: 42.8,
        feelslike_c: 4.6,
        feelslike_f: 40.3
    }
};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherCardComponent);
    component = fixture.componentInstance;
    component.weatherCardInfo = cardInfo;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
