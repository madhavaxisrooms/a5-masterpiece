import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CreateHotelService {

  constructor(
    private http: HttpClient,
  ) { }

  createHotel(hotel) {
    const url = "http://192.168.0.62:8888/api/be/createHotel";
    return this.http.post(url, hotel);
  }


  getCurrencyAndTimeZone(country) {
    const url = `https://restcountries.eu/rest/v1/alpha/${country}`;
    return this.http.get(url);
  }

  getAmenitiesList() {
    const url = "http://192.168.0.62:8888/api/be/fetchAmenities";
    return this.http.get(url);
  }

  getPropertyTypes() {
    const url = "http://192.168.0.62:8888/api/be/fetchPropertyTypes";
    return this.http.get(url);
  }

  getCountries() {
    const url = "http://192.168.0.62:8888/api/be/getAllCountries";
    return this.http.get(url);
  }
  getStatesByCountryId(countryId) {
    const url = "http://192.168.0.62:8888/api/be/getStateByCountryId/" + countryId;
    return this.http.get(url);
  }
  getCitiesByStateId(stateId) {
    const url = "http://192.168.0.62:8888/api/be/getCityByStateId/" + stateId;
    return this.http.get(url);
  }
  getLocationByCityId(cityId) {
    const url = "http://192.168.0.62:8888/api/be/getLocationByCityId/" + cityId;
    return this.http.get(url);
  }


  getHotelDetails(hotelId){
    const url = "http://192.168.0.62:8888//api/be/getAllHotelsBySupplierId/" + hotelId;
    return this.http.get(url);
  }
}
