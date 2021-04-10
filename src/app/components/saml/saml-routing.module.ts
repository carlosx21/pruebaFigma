import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SamlComponent } from './saml.component';

const routes: Routes = [
  {
    path: '',
    component: SamlComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SamlRoutingModule { }
