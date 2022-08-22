import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventRegister } from '../models/eventRegister.model';

@Injectable({
  providedIn: 'root'
})
export class RegistroEventoServiceService {
  url='https://challenge-bvc.herokuapp.com/api/event-register';
  registroEventos: EventRegister[]=[];
  constructor(private http: HttpClient) { }

  // addRegistoEvento(registroEventos: EventRegister) : EventRegister{
  //   return this.http.post>(this.url);
  // }
  getListEventRegister(){
    return this.http.get<EventRegister[]>(this.url);
  }
}