
import { Component, OnInit, OnChanges } from '@angular/core';
import { FormControl} from '@angular/forms';
import { EventoServiceService } from 'src/app/services/evento-service.service';
import { PlataformaServiceService } from 'src/app/services/plataforma-service.service';
import { Event } from '../../models/eventos.model';
import { Platform } from '../../models/plataforma.model';

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
    //  Platform = {
    //   id: 0,
    //   name: "",
    //   decription: ""
    // }



  constructor(
    private serviceEvent : EventoServiceService,
    private servicePlat:PlataformaServiceService
  ) { }

  OnChanges(){
    console.log(this.selectEvento.value)
    console.log(this.selectPlataforma.value)
  }

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
    console.log("click")
    console.log(this.cantidad.value)
    console.log(this.eventos.filter(ev => ev.idEvent===this.selectEvento.value))
    console.log(this.plataformas.filter(ev => ev.name===this.selectPlataforma.value))

  }


}
