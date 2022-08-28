import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Restaurants } from './restaurants';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Restaurants[]>('http://192.168.43.247:8080/Restaurant');
  }

  getById(id: number) {
    return this.http.get<Restaurants>(`http://192.168.43.247:8080/Restaurant/${id}`);
   }

  create(r: Restaurants) {
    return this.http.post<Restaurants>('http://192.168.43.247:8080/Restaurant', r);
  }

  update(r: Restaurants) {
    return this.http.put<Restaurants>('http://192.168.43.247:8080/Restaurant', r);
  }
}
