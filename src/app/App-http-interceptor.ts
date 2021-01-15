import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()

export class AppHttpInteceptor implements HttpInterceptor {

    constructor(private router: Router) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let obj = localStorage.getItem('token');

        if (obj != null) {
            req = req.clone({
                setHeaders: { 'Authorization': obj }
            });
        }
        else {
            if (req.url === 'addProject') {
                this.router.navigate(['/']);
                return;
            }
        }
        return next.handle(req);
    }
}