import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Product } from "./../models/app.product.model";

@Injectable({
    providedIn:'root'
})
export class HttpService {
    constructor(private http:HttpClient){}
    private url:string = 'https://apiapptrainingnewapp.azurewebsites.net/api/products';

    getData(): Observable<Product[]> {
        let response:Observable<Product[]>;
        response = this.http.get<Product[]>(this.url);
        return response;
    }

    getDataById(id:number): Observable<Product> {
        let response:Observable<Product>;
        response = this.http.get<Product>(`${this.url}/${id}`);
        return response;
    }
    postData(prd:Product):Observable<Product> {
        let response:Observable<Product>;
        response = this.http.post<Product>(`${this.url}`, prd, {
            headers: new HttpHeaders({'Content-Type':'application/json'})
        });
        return response;
    }

    putData(id:number, prd:Product):Observable<Product> {
        let response:Observable<Product>;
        const options = {
            headers: new HttpHeaders({'Content-Type':'application/json'})
        };
        response = this.http.put<Product>(`${this.url}/${id}`, prd,  options);
        return response;
    }

    deleteData(id:number): Observable<Product> {
        let response:Observable<Product>;
        response = this.http.delete<Product>(`${this.url}/${id}`);
        return response;
    }
} 