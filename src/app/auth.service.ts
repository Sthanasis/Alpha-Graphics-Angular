import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/internal/operators';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _loginUrl:string = 'http://localhost:3000/api/router/login';
  private _logoutUrl:string = 'http://localhost:3000/api/router/admin/logout';

  constructor(private http: HttpClient,private router: Router) { }

  login(data:any): Observable<any> {
    return this.http.post<any>(this._loginUrl, data, httpOptions).pipe(
        tap((result) => this.save_token(result)),
        catchError(this.handleError<any>('login'))
    );
  }

  logout(){
    return this.http.get<any>(this._logoutUrl,httpOptions).pipe(
      tap((result)=> this.remove_token(result)),
      catchError(this.handleError<any>('logout'))
    )
  }

  private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
          return of(result as T);
      };
  }

  private save_token(data:any) {
    console.log(data)
    if (data.status === 'success') {
        localStorage.setItem('token', data.token);
        localStorage.setItem('userId', data.data.user.id);
        return;
    }
  }

  private remove_token(data:any){
    if(data.status === 'success'){
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
    }
  }

  canActivate(): boolean {
    const token = localStorage.getItem('token');
      if (token == null)   {
        this.router.navigate(['/']);
        return false;
      }
      return true;
    }
}
