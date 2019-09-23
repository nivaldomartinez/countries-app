import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CountriesComponent } from './countries/countries.component';
import { CountriesService } from './countries/countries.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CountryDetailsComponent } from './countries/components/country-details/country-details.component';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    CountryDetailsComponent,
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    HttpClientModule,
    FormsModule,
    NgxSmartModalModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA1gQws6P9upbXgByWwt_l1z3KYIRFoUnU'
    })
  ],
  providers: [
    CountriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
