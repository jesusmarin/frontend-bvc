import { Component, OnInit } from '@angular/core';
import { EventoServiceService } from 'src/app/services/evento-service.service';
import { Event } from '../../models/eventos.model';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.sass']
})
export class EventosComponent implements OnInit {

  eventos: Event[]=[];
  evento: Event=this.eventos[0];

  constructor(
    private service : EventoServiceService
    ) { }

  ngOnInit(): void {
    this.service.getListEventos()
    .subscribe(data => {
      console.log(data)
      this.eventos=data;
      this.evento= this.eventos[0];
    });
  }
  myEvent(item:Event): void {
    this.evento=item;
  }

}
