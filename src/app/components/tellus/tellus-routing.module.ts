import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TellusComponent } from './tellus.component';


const routes: Routes = [
  {
    path: '',
    component: TellusComponent,
  }
];;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TellusRoutingModule { }
