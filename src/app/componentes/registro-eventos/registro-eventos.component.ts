import { Component, OnInit } from '@angular/core';
import {EventRegister} from '../../models/eventRegister.model'
import {RegistroEventoServiceService} from '../../services/registro-evento-service.service'
import { Platform } from '../../models/plataforma.model';
import { Event } from '../../models/eventos.model';

@Component({
  selector: 'app-registro-eventos',
  templateUrl: './registro-eventos.component.html',
  styleUrls: ['./registro-eventos.component.sass']
})
export class RegistroEventosComponent implements OnInit {

  registroEventos: EventRegister[]=[];

  registroEvento: EventRegister={
    id: 0,
    date: 0,
    amount: 0,
    cost: 0,
    platform: {
      id: 0,
      name: "",
      decription: ""
    },
    event: {
      id: 0,
      idEvent: "",
      description: "",
      cost: 0
    }
  };

  constructor(private service: RegistroEventoServiceService) {}

  ngOnInit(): void {
    this.service.getListEventRegister()
    .subscribe(data=>{
      this.registroEventos = data;
      this.registroEvento = this.registroEventos[0];
    })
  }

  myEventregister(item: EventRegister){
    this.registroEvento=item;
  }

}
