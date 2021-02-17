import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormularioModel } from '../models/formulario';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {
  url:string = "https://localhost:44377/api/formulario"; // ACA VA EL URL DE FIREBASE DE LA BASE DE DATOS

  constructor(private httpClient:HttpClient) { }

  create(formularioModel:FormularioModel)
  {
    return this.httpClient.post(`${this.url}`, formularioModel);
  }

  read()
  {
    return this.httpClient.get(`${this.url}`);
  }

  update(formularioModel:FormularioModel)
  {
    console.log(formularioModel)
    return this.httpClient.put(`${this.url}/${formularioModel.id}`, formularioModel)
  }

  delete(formularioId:number)
  {
    return this.httpClient.delete(`${this.url}/${formularioId}`);
  }


}
