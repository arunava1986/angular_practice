import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { RegisterUser,AuthUser, ResponseObject } from "./../models/app.security.models";

@Injectable({
    providedIn:'root'
})
export class HttpSecureService {
    constructor(private http:HttpClient){}
    private url:string = 'http://localhost:9002';

    register(user:RegisterUser):Observable<ResponseObject>{
        let response:Observable<ResponseObject>;
        response = this.http.post<ResponseObject>(`${this.url}/api/app/register`, user, {
            headers: new HttpHeaders({'Content-Type':'application/json'})
        });
        return response;
    }

    auth(user:AuthUser):Observable<ResponseObject>{
        let response:Observable<ResponseObject>;
        response = this.http.post<ResponseObject>(`${this.url}/api/app/auth`, user, {
            headers: new HttpHeaders({'Content-Type':'application/json'})
        });
        return response;
    }

    getData(token:string): Observable<ResponseObject> {
        let response:Observable<ResponseObject>;
        response = this.http.get<ResponseObject>(`${this.url}/api/app/get`, {
            headers:new HttpHeaders({'AUTHORIZATION':`bearer ${token}`})
        });
        return response;
    }
    
   
} 