import { Component, OnInit, ViewChild } from '@angular/core';
import { CountriesService } from './countries.service';
import { Filter } from './../enum/filter.enum';
import { NgxSmartModalComponent } from 'ngx-smart-modal';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {
  @ViewChild('countryDetailModal') countryModal: NgxSmartModalComponent;
  @ViewChild('errorModal') errorModal: NgxSmartModalComponent;
  selectedCountry; // selected country, this is set with the user open country modal
  filters = Filter; // filter enum
  selectedFilter: Filter; // selected filter from 'select'
  filterValue: string; // value entereb by the user to filter

  countries; // countries data
  page = 1; // initial page
  pageSize = 20; // number of element in a page
  
  constructor(private service: CountriesService) { }

  ngOnInit() {
    this.retrieveData();
  }


  /**
   * this get all countries (initial state of the app)
   */
  private retrieveData() {
    this.service.getCountries().then(
      data => {
        this.countries = data;
      }
    )
  }

  /**
   * this get filtered countries
   */
  filterCountries() {
    if (this.filterValue) {
      this.service.getFilteredCountries(this.selectedFilter, this.filterValue.toLowerCase()).then(
        data => {
          this.countries = data;
        }
      ).catch(() => {
        this.errorModal.open();
      })
    } else {
      this.retrieveData();
    }
  }

  /**
   * this open a modal with the country details
   * @param country country selected
   */
  openCountryDetails(country) {
    this.countryModal.open();
    this.selectedCountry = country;
  }

  /**
   * this execute when user select a page
   * @param event ngx-pagination event
   */
  onChangePage(event) {
    this.page = event;
    window.scroll(0,0);
  }

  /**
   * this search filtered countries when user press enter
   * @param event keyup event
   */
  onPressEnter(event) {
    if (event.code === 'Enter') {
      this.filterCountries();
    }
  }

}
