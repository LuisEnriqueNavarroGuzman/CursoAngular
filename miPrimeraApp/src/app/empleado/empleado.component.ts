import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
  //Componente inline no necesita archivo html ni css
  //template: "<p>Aquí iría un empleado</p>",
  //styles : ["p{background-color: red;}"]
})
export class EmpleadoComponent implements OnInit {
  nombre = "Luis"
  apellido = "Navarro"
  /*private*/ edad = 18;
  empresa = "Pildoras informaticas"
  /*
  getEdad(){
    return this.edad;
  }
  */
  constructor () {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
