import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor
} from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    
    const authService = this.injector.get(AuthService);
    
    const tokenizedReq = req.clone({
      setHeaders: {
        'Authorization': authService.getToken(),
      },
    });
    return next.handle(tokenizedReq);
  }
}
