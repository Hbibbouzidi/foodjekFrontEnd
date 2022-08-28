import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Livreurs } from './livreurs';

@Injectable({
  providedIn: 'root'
})
export class LivreursService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Livreurs[]>('http://192.168.43.247:8080/deliveryagent');
  }

  getById(id: number) {
    return this.http.get<Livreurs>(`http://192.168.43.247/deliveryagent/${id}`);
   }

  create(r: Livreurs) {
    return this.http.post<Livreurs>('http://192.168.43.247/deliveryagent', r);
  }

  update(r: Livreurs) {
    return this.http.put<Livreurs>('http://192.168.43.247/deliveryagent', r);
  }
}
