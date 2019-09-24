import { Component, OnInit, Input } from '@angular/core';
import { CountriesService } from '../../../../services/countries/countries.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {

  @Input() selectedCountryName: string;
  country;

  constructor(private service: CountriesService) { }

  ngOnInit() {
    this.getCountryData();
  }

  /**
   * this get all data of the selected country
   */
  getCountryData() {
    this.service.getCountryByName(this.selectedCountryName).then(
      countryData => {
        if (countryData[0]) {
          /// Here I destruct the object to use only the data that is needed
          const { 
            flag, 
            name, 
            capital, 
            borders, 
            languages, 
            population,
            alpha3Code,
            topLevelDomain,
            subregion,
            latlng
          } = countryData[0];
          this.country = { 
            flag, 
            name, 
            capital, 
            borders, 
            languages, 
            population,
            alpha3Code,
            topLevelDomain,
            subregion,
            latlng
          }
        }
      }
    )
  }

}
