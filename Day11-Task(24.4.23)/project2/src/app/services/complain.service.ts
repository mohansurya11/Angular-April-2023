import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComplainService {
  
  postCompaint(obj: { id: number; fname: any; lname: any; email: any; message: any; }) {
    throw new Error('Method not implemented.');
  }
  httpOptions:any;
  constructor(private http:HttpClient) { 
  
  }
  postComplaint(obj:any):Observable<any>{

    this.httpOptions =  new HttpHeaders({
      'Content-Type':  'application/json',
    })

  return this.http.post("http://localhost:4500/places",obj,this.httpOptions);
 }

}
