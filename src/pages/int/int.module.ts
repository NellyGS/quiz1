import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IntPage } from './int';

@NgModule({
  declarations: [
    IntPage,
  ],
  imports: [
    IonicPageModule.forChild(IntPage),
  ],
})
export class IntPageModule {}
