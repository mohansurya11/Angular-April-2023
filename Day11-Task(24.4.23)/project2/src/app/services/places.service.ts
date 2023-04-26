import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  constructor(private http:HttpClient) { }

  getPlaces():Observable<any> {
    return this.http.get("http://localhost:4500/places")
  }
}
