import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import { FormControl} from '@angular/forms';

import { EventoServiceService } from 'src/app/services/evento-service.service';
import { PlataformaServiceService } from 'src/app/services/plataforma-service.service';
import { RegistroEventoServiceService } from 'src/app/services/registro-evento-service.service';

import { Platform } from '../../models/plataforma.model'
import { EventRegister } from '../../models/eventRegister.model';
import { SearchDto } from '../../models/eventRegister.model';
import { Event } from '../../models/eventos.model';


@Component({
  selector: 'app-filter-register',
  templateUrl: './filter-register.component.html',
  styleUrls: ['./filter-register.component.sass']
})
export class FilterRegisterComponent implements OnInit {



  eventos: Event[] =[]
  plataformas: Platform[] =[]
  selectPlataforma = new FormControl("");
  selectEvento = new FormControl("");
  fecha = new FormControl<Date>(new Date);
  start = new Date();
  end = new Date();
  registroEventos: EventRegister[]=[];
  registroEvento :EventRegister={
    id: -1,
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
  }
  dto:SearchDto={
    start: 0,
    end: 0,
    event: {
      id: 0,
      idEvent: "",
      description: "",
      cost: 0
    },
    platform: {
      id: 0,
      name: "",
      decription: ""
    }
}
  constructor(
    private router: Router,
    private serviceEvent : EventoServiceService,
    private servicePlat:PlataformaServiceService,
    private serviceRegistro:RegistroEventoServiceService
  ) { }

  ngOnInit(): void {
    this.serviceEvent.getListEventos()
    .subscribe(data => {
      this.eventos=data;
    });
    this.servicePlat.getListPlatforms()
     .subscribe(data => {
        this.plataformas = data;
     });

    }

    dateStartChange(data:any){
      this.start=new Date(data.target.value);
      this.dto.start=this.start.getTime();
      console.log(this.start.getTime())

  }
    dateEndChange(data:any){
      this.end=new Date(data.target.value);
      this.dto.end=this.end.getTime();
      console.log(this.end.getTime())
  }

  consultarRegistros(){
    if(this.selectEvento.value?.length){
      this.dto.event = this.eventos.filter(ev => ev.idEvent===this.selectEvento.value)[0]
    }
    if(this.selectPlataforma.value?.length){
      this.dto.platform = this.plataformas.filter(ev => ev.name===this.selectPlataforma.value)[0]
    }
    if(this.dto.start != null && this.dto.end != null ){
      if(this.dto.platform?.name != null && this.dto.event?.idEvent != null){

            this.serviceRegistro.getListEventRegisterBetweenDate(this.dto)
            .subscribe(d => {
              this.registroEventos=d;
            });
      }
    }
  }

  reload(){
    window.location.reload();
  }

}
