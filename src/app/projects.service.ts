import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ServerResponseObject} from './Interfaces/ServerResponse'
import {Observable} from 'rxjs'



@Injectable({
    providedIn:'any'
})

export class ProjectsService{
    private _url:string = 'https://salty-ravine-86849.herokuapp.com/api/router/';
    
    constructor(private http: HttpClient){}

    GetProjects(): Observable<ServerResponseObject> {
        return this.http.get<ServerResponseObject>(this._url);
    }

}