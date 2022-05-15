import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoaderService } from './loader.service';
import {finalize} from 'rxjs/operators'

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  isAuth=true;
  constructor(private loaderService : LoaderService) {}
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loaderService.setIsLoading(true)
    const UpdatedRequest= this.isAuth ? request.clone({
      headers: request.headers.append('authorization', '123456')
    }): request;
    return next.handle(request).pipe(finalize(()=> this.loaderService.setIsLoading(false))
    );
  }
}
