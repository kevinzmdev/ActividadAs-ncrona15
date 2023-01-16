import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {
  nombre: string = 'Christian Barnald';

  datos = {
    nombre: 'Christian',
    apellido: 'Barnald',
  }

  valor: number = 20;

  constructor() { }

  ngOnInit(): void {
  }

}
