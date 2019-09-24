import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CountriesComponent } from './components/countries/countries.component';
import { CountriesService } from './services/countries/countries.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CountryDetailsComponent } from './components/countries/components/country-details/country-details.component';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { AgmCoreModule } from '@agm/core';
import { environment } from 'src/environments/environment';

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
      apiKey: environment.googleApiKey
    })
  ],
  providers: [
    CountriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
