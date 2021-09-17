import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FafdashComponent } from './components/fafdash/fafdash.component';

const routes: Routes = [
  {path: '', component: FafdashComponent}
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FafRoutingModule { }
