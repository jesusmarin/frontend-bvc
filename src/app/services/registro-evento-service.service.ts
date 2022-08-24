import { Injectable } from '@angular/core';
import { HttpClient,  HttpParams } from '@angular/common/http';
import { EventRegister, SearchDto } from '../models/eventRegister.model';

@Injectable({
  providedIn: 'root'
})
export class RegistroEventoServiceService {
  url='https://challenge-bvc.herokuapp.com/api/event-register';
  urlFilter='https://challenge-bvc.herokuapp.com/api/event-register/date-event-plat';
  registroEventos: EventRegister[]=[];
  constructor(private http: HttpClient) { }

  create(registroNuevo: EventRegister) {
     return this.http.post<EventRegister>(this.url, registroNuevo);
  }

  getListEventRegister(){
    return this.http.get<EventRegister[]>(this.url);
  }
  getListEventRegisterBetweenDate(data: SearchDto){
    let dto = JSON.stringify(data);
    const params = new HttpParams({

    })
    return this.http.post<EventRegister[]>(this.urlFilter,data);
  }
}
