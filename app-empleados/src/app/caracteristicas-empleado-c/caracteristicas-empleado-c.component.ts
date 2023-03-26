import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-caracteristicas-empleado-c',
  templateUrl: './caracteristicas-empleado-c.component.html',
  styleUrls: ['./caracteristicas-empleado-c.component.css']
})
export class CaracteristicasEmpleadoCComponent {
  @Output() caracteristicasEmpleados = new EventEmitter<string>();
  agregarCaracteristicas(value: string){
    this.caracteristicasEmpleados.emit(value);
  }
}
  