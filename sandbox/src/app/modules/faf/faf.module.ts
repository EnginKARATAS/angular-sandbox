import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FafdashComponent } from './components/fafdash/fafdash.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FafdashComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class FafModule { }
