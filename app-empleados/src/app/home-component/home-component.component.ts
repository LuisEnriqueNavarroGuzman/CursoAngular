import { Component } from '@angular/core';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.services';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent {
  //primer metodo que se ejecuta al iniciar la app
  constructor(private miServicio: ServicioEmpleadosService,
              private empleadosServices: EmpleadosService){
  //this.empleados = empleadosServices.empleados;              
  }
  //segundo metodo que se ejecuta al iniciar la app
  ngOnInit(): void {
    //this.empleados = this.empleadosServices.empleados; 
    this.empleadosServices.obtenerEmpleados().subscribe(misEmpleados => {
      console.log(misEmpleados);
      this.empleados =  misEmpleados ? Object.values(misEmpleados) : [];
      this.empleadosServices.setEmpleados(this.empleados);
    });
  }
  titulo = 'Listado de empleados';
  empleados: Empleado[] = [];
  agregarEmpleado(): void{
    let miEmpleado = new Empleado(
      this.cuadroNombre,
      this.cuadroApellido,
      this.cuadroCargo,
      this.cuadroSalario    
    );
    //this.miServicio.muestraMensaje(`Nombre del empleado: ${miEmpleado.nombre}`);
    this.empleadosServices.agregaEmpleadoService(miEmpleado);
  }
   cuadroNombre: string = "";
   cuadroApellido: string = "";
   cuadroCargo: string = "";
   cuadroSalario: number = 0;

}
