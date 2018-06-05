import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HotelDetailsService {

  constructor(
    private http: HttpClient
  ) { }

  getHotelDetails(supplierId){
    const url = "http://192.168.0.62:8888/api/be/getAllHotelsBySupplierId/" + supplierId;
    return this.http.get(url);
  }

  requestedForTial(hotelId){
    const url = "http://192.168.0.62:8888/api/be/requestHotelTrial/" + hotelId;
    return this.http.get(url);
  }

  
}
