import { Component, OnInit, Input } from '@angular/core';
import { CountriesService } from '../../countries.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {

  @Input() selectedCountryName: string;
  countryData;

  constructor(private service: CountriesService) { }

  ngOnInit() {
    this.getCountryData();
  }

  /**
   * this get all data of the selected country
   */
  getCountryData() {
    this.service.getCountryByName(this.selectedCountryName).then(
      data => {
        if (data[0]) {
          this.countryData = data[0];
        }
      }
    )
  }

}
