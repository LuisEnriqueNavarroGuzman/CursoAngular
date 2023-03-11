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
  habilitacionCuadro = true;  
  usuRegistrado = true;
  //empresa = "Pildoras informaticas"
  /*
  getEdad(){
    return this.edad;
  }
  */
  /*llamaEmpresa(value: string){
  }*/
  getRegistroUsuario(){
    console.log("getRegistroUsuario");
    this.usuRegistrado = false;
  }
  constructor () {}
  ngOnInit(): void {
  }
}
