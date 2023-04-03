import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
@Injectable()
 export class DataServices{
    uri: string;
    constructor(private httpClient: HttpClient){
         this.uri = 'https://mis-clientes-4a91a-default-rtdb.europe-west1.firebasedatabase.app/datos.json';

    }
   cargarEmpleados(){
        return this.httpClient.get(this.uri)
    }
    guardarEmpleados(empleados: Empleado[]){
        this.httpClient.put( this.uri ,empleados).subscribe(
            response => console.log("Se han guardado los empleados: ", response),
            error    => console.log("Error: ", error),
        );
    }
    actualizaEmpleado(indice: number, empleado: Empleado){
        let uri = `https://mis-clientes-4a91a-default-rtdb.europe-west1.firebasedatabase.app/datos/${indice}.json`;
        this.httpClient.put(uri ,empleado).subscribe(
            response => console.log("Se ha modifica correctamente el empleado: ", response),
            error    => console.log("Error: ", error),
        );
    }

    eliminarEmpleado(indice: number){
        let uri = `https://mis-clientes-4a91a-default-rtdb.europe-west1.firebasedatabase.app/datos/${indice}.json`;
        this.httpClient.delete(uri).subscribe(
            response => console.log("Se ha eliminado correctamente el empleado: ", response),
            error    => console.log("Error: ", error),
        );
    }
 }