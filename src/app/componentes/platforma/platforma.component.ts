import { Component, OnInit } from '@angular/core';
import { Platform } from '../../models/plataforma.model';
import { PlataformaServiceService } from '../../services/plataforma-service.service';

@Component({
  selector: 'app-platforma',
  templateUrl: './platforma.component.html',
  styleUrls: ['./platforma.component.sass']
})
export class PlatformaComponent implements OnInit {

  platforms : Platform[] =[];
   platform : Platform= {
    id: 0,
    name: "",
    decription: ""
  };

  constructor(private service:PlataformaServiceService) {
  }

  ngOnInit(): void {
     this.service.getListPlatforms()
     .subscribe(data => {
        this.platforms = data;
        this.platform=this.platforms[0];
     });
  }
  myPlatform(item:Platform): void {
      this.platform= item;
  }

}
