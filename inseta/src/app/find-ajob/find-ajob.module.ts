import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FindAJobPageRoutingModule } from './find-ajob-routing.module';

import { FindAJobPage } from './find-ajob.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FindAJobPageRoutingModule
  ],
  declarations: [FindAJobPage]
})
export class FindAJobPageModule {}
