import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../auth.service';

@Injectable()
export class HotelDetailsService {

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  getHotelDetails(supplierId){
    const url = "http://192.168.0.62:8888/api/be/getAllHotelsBySupplierId/"+ JSON.parse(localStorage.getItem('userDetails')).userId ;
    return this.http.get(url, {
      headers: new HttpHeaders().set('Authorization', this.authService.getToken())
    });
  }

  requestedForTial(hotelId){
    const url = "http://192.168.0.62:8888/api/be/requestHotelTrial/" + hotelId;
    return this.http.get(url, {
      headers: new HttpHeaders().set('Authorization', this.authService.getToken())
    });
  }
  
}
