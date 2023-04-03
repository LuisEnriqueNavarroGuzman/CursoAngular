import { Injectable } from "@angular/core";
import { DataServices } from "./data.services";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";

//ACCESO A DATOS 
//Anotación o decorador para indicar que se pueden inyectar objetos a este servicio
@Injectable()
export class EmpleadosService{
    constructor(private servicioVentanaEmergente: ServicioEmpleadosService,
                private dataService: DataServices){
    }
    setEmpleados(misEmpleados: Empleado[]){
        this.empleados = misEmpleados;
    }
    obtenerEmpleados(){
        return this.dataService.cargarEmpleados();
    }
    empleados: Empleado[] = [];
    /*
    empleados: Empleado[] = [
        new Empleado("Juan","Díaz","Presidente",7500),
        new Empleado("Ana","Raquel","Presidente",5500),
        new Empleado("María","Fdez","Presidente",3500),
        new Empleado("Laura","López","Presidente",2500),
    ];
    */
    agregaEmpleadoService(empleado: Empleado){
        this.servicioVentanaEmergente.muestraMensaje(`Persona que se va a agregar: \n ${empleado.nombre} \n Salario: ${empleado.salario}`);
        this.empleados.push(empleado);
        console.log("Agregar empleado Services", this.empleados);
        this.dataService.guardarEmpleados(this.empleados);
    }

    encontrarEmpleado(indice: number) : Empleado{
        let empleado: Empleado = this.empleados[indice];
        return empleado;
    }

    actualizaEmpleado(indice: number, empleado: Empleado){
        let empleadoModificado = this.empleados[indice];
        empleadoModificado.nombre = empleado.nombre;
        empleadoModificado.apellido = empleado.apellido;
        empleadoModificado.cargo = empleado.cargo;
        empleadoModificado.salario = empleado.salario;
        this.dataService.actualizaEmpleado(indice, empleado);

    }
    eliminaEmpleado(indice: number){
        this.empleados.splice(indice,1);
        this.dataService.eliminarEmpleado(indice);
        if(this.empleados) this.dataService.guardarEmpleados(this.empleados);
    }
}