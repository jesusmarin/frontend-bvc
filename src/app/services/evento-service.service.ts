import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Event } from '../models/eventos.model';

@Injectable({
  providedIn: 'root'
})
export class EventoServiceService {
  url:string='https://challenge-bvc.herokuapp.com/api/events';
  eventos: Event[]=[];
  constructor(
    private http: HttpClient
  ) { }

  getListEventos(){
    return this.http.get<Event[]>(this.url);
  }
}
