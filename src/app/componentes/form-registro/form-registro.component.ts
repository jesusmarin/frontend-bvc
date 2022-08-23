
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import { FormControl} from '@angular/forms';
import { EventoServiceService } from 'src/app/services/evento-service.service';
import { PlataformaServiceService } from 'src/app/services/plataforma-service.service';
import { Event } from '../../models/eventos.model';
import { Platform } from '../../models/plataforma.model';
import { EventRegister } from '../../models/eventRegister.model';
import { RegistroEventoServiceService } from 'src/app/services/registro-evento-service.service';


@Component({
  selector: 'app-form-registro',
  templateUrl: './form-registro.component.html',
  styleUrls: ['./form-registro.component.sass']
})
export class FormRegistroComponent implements OnInit {



    cantidad = new FormControl(0);
    eventos: Event[] =[]
    plataformas: Platform[] =[]
    selectPlataforma = new FormControl("");
    selectEvento = new FormControl("");
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


  getCantidadValue(){
    return this.cantidad.value;
  }

  onVerDatos(){

    let cant = this.cantidad.value;
    let evSel = this.eventos.filter(ev => ev.idEvent===this.selectEvento.value)[0]
     let plaSel = this.plataformas.filter(ev => ev.name===this.selectPlataforma.value)[0]

     this.registroEvento.event=evSel;
     this.registroEvento.platform=plaSel;
     this.registroEvento.amount=cant;

     console.log(this.registroEvento)
     if(cant != null && cant > 0 && plaSel != null && evSel != null){
       this.createNewEvent();
     }
    }

  private createNewEvent(){
    this.serviceRegistro.create(this.registroEvento).subscribe(data => {return data});
    this.router.navigate(['/event-register'])
  }

}
