import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServerResponseObject } from './Interfaces/ServerResponse'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CvServiceService {
  private _geturl:string = 'http://localhost:3000/api/router/file/cv';
  private _posturl:string = 'http://localhost:3000/api/router/cv';

  constructor(private http: HttpClient) { }

  GetCv():any {
    this.http.get(this._geturl,{responseType:'blob' as 'json'}).toPromise().then(res => this.downloadFile(res,'application/pdf'));
  }

  PostCv(data:any) {
    console.log(data);
    return this.http.post<any>(this._posturl, data).subscribe(res=> {
      if(res.status === 'success'){
        alert('Cv uploaded successfully');
      } else {
        alert('Something went wrong');
      }
    });
  }

  downloadFile(data: any, type: string) {
    let blob = new Blob([data], { type: type});
    let url = window.URL.createObjectURL(blob);
    let pwa = window.open(url);
    if (!pwa || pwa.closed || typeof pwa.closed == 'undefined') {
      alert( 'Please disable your Pop-up blocker and try again.');
    }
  }
}
