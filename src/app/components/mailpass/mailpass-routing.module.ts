import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MailpassComponent } from './mailpass.component';

const routes: Routes = [
  {
    path: '',
    component: MailpassComponent,
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MailpassRoutingModule { }
