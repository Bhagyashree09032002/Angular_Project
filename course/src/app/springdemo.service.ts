import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpringdemoService{

  constructor(private httpClient:HttpClient){}
    private url="http://localhost:8080/getnames";
    getNames():Observable<any>{
      return this.httpClient.get<any>(`${this.url}`)
    }
    
}
