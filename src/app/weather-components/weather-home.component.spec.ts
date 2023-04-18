import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherCoreComponent } from './weather-home.component';

describe('WeatherCoreComponent', () => {
  let component: WeatherCoreComponent;
  let fixture: ComponentFixture<WeatherCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherCoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
