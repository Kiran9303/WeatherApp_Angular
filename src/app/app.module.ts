import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { WeatherCoreComponent } from './weather-components/weather-home.component';
import { SingleLocationComponent } from './weather-components/single-location/single-location/single-location.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonMaterialModuleModule } from './common/common-material-module.module';
import { CoreModule } from './core/core-module/core.module';

@NgModule({
  declarations: [
    AppComponent,
    WeatherCoreComponent,
    SingleLocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonMaterialModuleModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
