import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../auth.service';

@Injectable()
export class CreateHotelService {

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  createHotel(hotel) {
    const url = "http://192.168.0.62:8888/api/be/createHotel";
    return this.http.post(url, hotel,{
      headers: new HttpHeaders().set('Authorization', this.authService.getToken())
    });
  }


  getCurrencyAndTimeZone(country) {
    const url = `https://restcountries.eu/rest/v1/alpha/${country}`;
    return this.http.get(url, {
      headers: new HttpHeaders().set('Authorization', this.authService.getToken())
    });
  }

  getAmenitiesList() {

    const url = "http://192.168.0.62:8888/api/be/fetchAmenities";
    return this.http.get(url, {
      headers: new HttpHeaders().set('Authorization', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOiIyMDE4LTA2LTA3IiwiZXhwIjoxNTI4MzUzNTcxNzMzLCJlbWFpbCI6ImFAYS5hIiwidXNlcklkIjoxOCwicGFzc3dvcmQiOiJ6cm5YazhZVFpxZGQ0R1dqcTV6cHFpU1Q4bk9ZMHFGNXR5blpHRUJKQSt4MmFMRE1aNW9JOVhnQUp3NkpTaGU4aVBxaHVUaFUwaFBZOXloVmlSeE43d1x1MDAzZFx1MDAzZCJ9.xX-CL05JfMJo0rYhI9YqNnVZ9Mc7CRaKmV0xXgzcZ-E')
    });
  }

  getPropertyTypes() {
    const url = "http://192.168.0.62:8888/api/be/fetchPropertyTypes";
    return this.http.get(url, {
      headers: new HttpHeaders().set('Authorization', this.authService.getToken())
    });
  }

  getCountries() {
    const url = "http://192.168.0.62:8888/api/be/getAllCountries";
    return this.http.get(url, {
      headers: new HttpHeaders().set('Authorization', this.authService.getToken())
    });
  }
  getStatesByCountryId(countryId) {
    const url = "http://192.168.0.62:8888/api/be/getStateByCountryId/" + countryId;
    return this.http.get(url, {
      headers: new HttpHeaders().set('Authorization', this.authService.getToken())
    });
  }
  getCitiesByStateId(stateId) {
    const url = "http://192.168.0.62:8888/api/be/getCityByStateId/" + stateId;
    return this.http.get(url, {
      headers: new HttpHeaders().set('Authorization', this.authService.getToken())
    });
  }
  getLocationByCityId(cityId) {
    const url = "http://192.168.0.62:8888/api/be/getLocationByCityId/" + cityId;
    return this.http.get(url, {
      headers: new HttpHeaders().set('Authorization', this.authService.getToken())
    });
  }


  getHotelDetails(hotelId) {
    const url = "http://192.168.0.62:8888/api/be/getHotel/" + hotelId;
    return this.http.get(url, {
      headers: new HttpHeaders().set('Authorization', this.authService.getToken())
    });
  }
}
