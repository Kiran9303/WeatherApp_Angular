import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { WeatherCoreComponent } from './weather-components/weather-home.component';
import { SingleLocationComponent } from './weather-components/single-location/single-location/single-location.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonMaterialModuleModule } from './common/common-material-module.module';
import { CoreModule } from './core/core-module/core.module';
import { HomeComponent } from './app-routing/home/home.component';
import { ErrorComponent } from './app-routing/error/error.component';
import { HeaderNavComponent } from './shared/header-nav/header-nav.component';
import { FooterNavComponent } from './shared/footer-nav/footer-nav.component';
import { WeatherApiService } from './services/weatherApi.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { WeatherCardComponent } from './weather-components/weather-card/weather-card.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherCoreComponent,
    SingleLocationComponent,
    HomeComponent,
    ErrorComponent,
    HeaderNavComponent,
    FooterNavComponent,
    WeatherCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonMaterialModuleModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [ HttpClient ],
  bootstrap: [AppComponent]
})
export class AppModule { }
