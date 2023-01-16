import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {

  resultado: number = 0;

  Calcular() {
    return this.resultado ++
  }

  mensaje!: string;

  Generar(event: any) {
    this.mensaje = event.target.value;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
