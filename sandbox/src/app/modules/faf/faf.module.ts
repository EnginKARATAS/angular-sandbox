import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FafdashComponent } from './components/fafdash/fafdash.component';
import { FafRoutingModule } from './faf-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FafdashComponent,
  ],
  imports: [
    CommonModule,
    FafRoutingModule,
    ReactiveFormsModule
  ]
})
export class FafModule { }
