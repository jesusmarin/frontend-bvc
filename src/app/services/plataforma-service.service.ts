import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Platform } from '../models/plataforma.model';

@Injectable({
  providedIn: 'root'
})
export class PlataformaServiceService {
  url :string = 'https://challenge-bvc.herokuapp.com/api/platforms'
  platforms : Platform[] =[];


  constructor( private http: HttpClient) { }

  getListPlatforms(){
    return this.http.get<Platform[]>(this.url);
  }
}
