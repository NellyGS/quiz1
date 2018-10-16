import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BocPage } from './boc';

@NgModule({
  declarations: [
    BocPage,
  ],
  imports: [
    IonicPageModule.forChild(BocPage),
  ],
})
export class BocPageModule {}
