import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.services';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-actualiza-component',
  templateUrl: './actualiza-component.component.html',
  styleUrls: ['./actualiza-component.component.css']
})
export class ActualizaComponentComponent {
  constructor(private router: Router,
    private route: ActivatedRoute,
    private miServicio: ServicioEmpleadosService,
    private empleadosServices: EmpleadosService) {

  }
  empleados: Empleado[] = [];

  action: number;
  ngOnInit(): void {
    this.action = parseInt(this.route.snapshot.queryParams['action']);
    this.empleados = this.empleadosServices.empleados;
    this.indice = this.route.snapshot.params['id'];
    let empleado: Empleado = this.empleadosServices.encontrarEmpleado(this.indice);
    this.cuadroNombre = empleado.nombre;
    this.cuadroApellido = empleado.apellido;
    this.cuadroCargo = empleado.cargo;
    this.cuadroSalario = empleado.salario;
  }
  volverHome() {
    this.router.navigate([""]);
  }
  /*
  actualizaEmpleado(): void {
    let miEmpleado = new Empleado(
      this.cuadroNombre,
      this.cuadroApellido,
      this.cuadroCargo,
      this.cuadroSalario
    );
    //this.miServicio.muestraMensaje(`Nombre del empleado: ${miEmpleado.nombre}`);
    this.empleadosServices.actualizaEmpleado(this.indice, miEmpleado);
    this.router.navigate([""]);
  }
  eliminaEmpleado(): void {
    //this.miServicio.muestraMensaje(`Nombre del empleado: ${miEmpleado.nombre}`);
      this.empleadosServices.eliminaEmpleado(this.indice);
      this.router.navigate([""]);
  }
  */
 actualizaEmpleado(){
  if(this.action == 1){
    let miEmpleado = new Empleado(
      this.cuadroNombre,
      this.cuadroApellido,
      this.cuadroCargo,
      this.cuadroSalario
    );
    //this.miServicio.muestraMensaje(`Nombre del empleado: ${miEmpleado.nombre}`);
    this.empleadosServices.actualizaEmpleado(this.indice, miEmpleado);
    this.router.navigate([""]);
  }else{
    this.empleadosServices.eliminaEmpleado(this.indice);
    this.router.navigate([""]);
  }
 }
  cuadroNombre: string = "";
  cuadroApellido: string = "";
  cuadroCargo: string = "";
  cuadroSalario: number = 0;
  indice: number;
}
