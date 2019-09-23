import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Filter } from '../enum/filter.enum';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) { }


  /**
   * this get all countries
   */
  getCountries() {
    return this.http.get(`${environment.api_url}all?fields=flag;name;capital;languages;region;currencies`).toPromise();
  }

  /**
   * this get all countries with a user filter
   * @param filter 
   * @param value 
   */
  getFilteredCountries(filter: Filter, value: string) {
    console.log(filter);
    return this.http.get(`${environment.api_url}${filter}/${value}`).toPromise();
  }
}
