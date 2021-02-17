import { Component, OnInit } from '@angular/core';
import { FormularioService } from 'src/app/services/formulario.service';

import { FormularioModel } from 'src/app/models/formulario';
import { NullTemplateVisitor } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data:FormularioModel[] = [];
  editable:boolean = false;
  nuevo:FormularioModel;

  constructor(private formularioService:FormularioService) { }

  ngOnInit(): void {
    this.read()
  }

  read()
  {
    this.formularioService.read().subscribe(
      (respuesta:FormularioModel[]) => this.data = respuesta
    )
  }

  update(dato:FormularioModel)
  {
    dato.editable=!dato.editable; 
    console.log()
    
    if(dato.codigo != '' && dato.nombre != '' && dato.tipo != '')
    {
      if (dato.id == undefined) {
        this.formularioService.create(dato).subscribe();
      }
      else
      {
        this.formularioService.update(dato).subscribe();
      }
    }
    
  }

  delete(datoId:number, index:number)
  {
    this.data.splice(index, 1);
    this.formularioService.delete(datoId).subscribe();
  }

  
  changeValue(index, datoTipo, a)
  {
    if (Number.isInteger(this.data[index][datoTipo]) ) {
      this.data[index][datoTipo] = Number.parseInt(a);
    }
    else
    {
      this.data[index][datoTipo] = a;
    }
  }

  addNew()
  {
    this.nuevo = new FormularioModel;
    this.nuevo.editable = true;
    this.data.push(this.nuevo);
  }

}
