import { ThisReceiver, ThrowStmt } from "@angular/compiler";

export class FormularioModel
{
    id:number;
    codigo:string;
    nombre:string;
    tipo:string;
    precio:number;
    editable:boolean;

    constructor(){
        this.editable = false;
        this.codigo = '';
        this.nombre = '';
        this.tipo = '';
        this.precio = 0;
    }

}