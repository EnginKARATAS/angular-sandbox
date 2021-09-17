import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FafdashComponent } from './components/fafdash/fafdash.component';
import { FafRoutingModule } from './faf-routing.module';



@NgModule({
  declarations: [
    FafdashComponent,
  ],
  imports: [
    CommonModule,
    FafRoutingModule
  ]
})
export class FafModule { }
