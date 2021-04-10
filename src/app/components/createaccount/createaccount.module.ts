import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateaccountRoutingModule } from './createaccount-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CreateaccountComponent } from './createaccount.component';


@NgModule({
  declarations: [CreateaccountComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CreateaccountRoutingModule
  ]
})
export class CreateaccountModule { }
