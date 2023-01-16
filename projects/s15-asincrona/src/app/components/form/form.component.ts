import { Component, OnInit } from '@angular/core';
import { estudiante } from './estudiante';
import { estudianteStorage } from './estudianteStorage';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private estudianteStorage: estudianteStorage) { }

  nombre!: string;
  apellidos!: string;
  carrera!: string;

  estudiante: estudiante[] = [];

  datos = new Array();

  insertarDatos(){
    if(this.nombre && this.apellidos && this.carrera) {
      let nuevoEstudiante = new estudiante(this.nombre, this.apellidos, this.carrera);
      this.estudiante.push(nuevoEstudiante);
      this.estudianteStorage.setEstudianteStorage(this.estudiante);
      this.limpiarCampos();
    }
  }

  Eliminar(indice:number){
    if(confirm('¿Seguro que desea eliminarlo?')){
      this.estudiante.splice(indice, 1);
      this.estudianteStorage.setEstudianteStorage(this.estudiante);
    }
  }

  limpiarCampos(){
    this.nombre = "";
    this.apellidos = "";
    this.carrera = "";
  }

  getEstudianteStorage() {
    this.estudiante = this.estudianteStorage.getEstudianteStorage();
  }

  ngOnInit(): void {
    this.getEstudianteStorage();
  }

}
