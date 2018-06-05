import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor
} from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) {}
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    alert(1);
    const authService = this.injector.get(AuthService);
    const tokenizedReq = req.clone(
      {
        headers: req.headers.set('accessToken', 'bearer ' + authService.getToken())
      }
    );
    console.log("req", req);
    return next.handle(req);
  }
}
