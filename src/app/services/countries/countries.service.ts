import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Filter } from '../../enum/filter.enum';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) { }


  /**
   * this get all countries
   */
  getCountries() {
    const complementUrl = "all?fields=flag;name;capital;languages;region;currencies"
    return this.http
               .get(`${environment.api_url}${complementUrl}`)
               .toPromise();
  }

  /**
   * this get all countries with a user filter
   * @param filter 
   * @param value 
   */
  getFilteredCountries(filter: Filter, filterValue: string) {
    return this.http
               .get(`${environment.api_url}${filter}/${filterValue}`)
               .toPromise();
  }

  /**
   * this get country by name
   * @param name name of the country
   */
  getCountryByName(name: string) {
    return this.http
               .get(`${environment.api_url}name/${name}?fullText=true`)
               .toPromise();
  }
}
