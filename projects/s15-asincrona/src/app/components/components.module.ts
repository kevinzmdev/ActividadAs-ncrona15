import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventoComponent } from './evento/evento.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { TwowayComponent } from './twoway/twoway.component';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EventoComponent,
    InterpolationComponent,
    TwowayComponent,
    FormComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    EventoComponent,
    InterpolationComponent,
    TwowayComponent,
    FormComponent,
    TableComponent
  ]
})
export class ComponentsModule { }
