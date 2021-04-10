import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotfoundRoutingModule } from './notfound-routing.module';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NotfoundComponent } from './notfound.component';


@NgModule({
  declarations: [ NotfoundComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotfoundRoutingModule
  ]
})
export class NotfoundModule { }
