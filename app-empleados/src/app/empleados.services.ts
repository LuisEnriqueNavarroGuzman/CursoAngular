import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";

//ACCESO A DATOS 
//Anotación o decorador para indicar que se pueden inyectar objetos a este servicio
@Injectable()
export class EmpleadosService{
    constructor(private servicioVentanaEmergente: ServicioEmpleadosService){

    }
    empleados: Empleado[] = [
        new Empleado("Juan","Díaz","Presidente",7500),
        new Empleado("Ana","Raquel","Presidente",5500),
        new Empleado("María","Fdez","Presidente",3500),
        new Empleado("Laura","López","Presidente",2500),
    ];
    
    agregaEmpleadoService(empleado: Empleado){
        this.servicioVentanaEmergente.muestraMensaje(`Persona que se va a agregar: \n ${empleado.nombre} \n Salario: ${empleado.salario}`);
        this.empleados.push(empleado);
    }

}