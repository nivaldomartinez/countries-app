import { Component, OnInit } from '@angular/core';
import { CountriesService } from './countries.service';
import { Filter } from './../enum/filter.enum';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

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
    ).catch(error => {
      console.log(error);
    })
  }

  /**
   * this get filtered countries
   */
  filterCountries() {
    this.service.getFilteredCountries(this.selectedFilter, this.filterValue.toLowerCase()).then(
      data => {
        this.countries = data;
      }
    ).catch(error => {
      console.log(error);
    })
  }

  /**
   * this execute when user select a page
   */
  onChangePage(event) {
    this.page = event;
    window.scroll(0,0);
  }

}
