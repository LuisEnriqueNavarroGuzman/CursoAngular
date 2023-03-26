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
  /*public private protected*/
  public nombre = "Luis"
  public apellido = "Navarro"
  private edad = 18;
  public habilitacionCuadroProperty = true;  
  public usuRegistrado = true;
  
  public textoDeRegistro = "No hay nadie registrado";
  public textoDeRegistro2 = "No hay nadie registrado";

  public empresa = "Google"
  public empresa2 = "Google"

  getEdad(){
    return this.edad;
  }
  llamaEmpresa(value: string){
  }
  getRegistroUsuario(){
    this.usuRegistrado = false;
  }
  setUsuarioRegistrado(text? : string){
    if(!text){
      alert("El usuario se acaba de registrar");
    }else{
      this.textoDeRegistro = text;
    }
  }
  setUsuarioRegistrado2(event: Event){
    //alert(event.target);
    if((<HTMLInputElement>event.target).value == "si"){
      this.textoDeRegistro2 = "El usuario se acaba de registrar";
    }else{
      this.textoDeRegistro2 = "No hay nadie registrado";
    }
  }
  cambiaEmpresa(event: Event){
    this.empresa = (<HTMLInputElement>event.target).value;
  }
  constructor () {}
  ngOnInit(): void {
  }
}
