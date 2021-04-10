import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SamlRoutingModule } from './saml-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SamlComponent } from './saml.component';


@NgModule({
  declarations: [ SamlComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SamlRoutingModule
  ]
})
export class SamlModule { }
