import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServerResponseObject, ServerResponseSingleObject } from './Interfaces/ServerResponse'
import { Observable } from 'rxjs'

@Injectable({
    providedIn:'any'
})

export class ProjectsService{
    private _url:string = 'http://localhost:3000/api/router/';
    
    constructor(private http: HttpClient){}

    GetProject(id:string): Observable<ServerResponseSingleObject>{
        return this.http.get<ServerResponseSingleObject>(`${this._url}${id}`);
    }

    GetProjects(): Observable<ServerResponseObject> {
        return this.http.get<ServerResponseObject>(this._url);
    }

    PostProject(data: any){
        return this.http.post<any>(this._url,data);
    }

    GetGraphicDesignProjects(): Observable<ServerResponseObject> {
        return this.http.get<ServerResponseObject>(`${this._url}graphicDesign`);
    }

    GetConceptArtProjects(): Observable<ServerResponseObject> {
        return this.http.get<ServerResponseObject>(`${this._url}conceptArt`);
    }

    DeleteProject(id){
        return this.http.delete(`${this._url}${id}`);
    }
}