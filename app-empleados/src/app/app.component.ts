import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de empleados';
  empleados: Empleado[] = [
      new Empleado("Juan","Díaz","Presidente",7500),
      new Empleado("Ana","Raquel","Presidente",5500),
      new Empleado("María","Fdez","Presidente",3500),
      new Empleado("Laura","López","Presidente",2500),
  ];
  agregarEmpleado(): void{
    let miEmpleado = new Empleado(
      this.cuadroNombre,
      this.cuadroApellido,
      this.cuadroCargo,
      this.cuadroSalario    
    );
    this.empleados.push(miEmpleado);
  }
   cuadroNombre: string = "";
   cuadroApellido: string = "";
   cuadroCargo: string = "";
   cuadroSalario: number = 0;


}
