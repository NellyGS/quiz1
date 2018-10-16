import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BocPage } from '../boc/boc';
import { IntPage } from '../int/int';
import { TvPage } from '../tv/tv';
import { LamPage } from '../lam/lam';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  boc = BocPage;
  tv = TvPage;
  sma  = IntPage;
  lam = LamPage;


 

  constructor(public navCtrl: NavController) {

  }

 Bocina () {
    this.navCtrl.push (this.boc) ;
  }
  Tv (){
    this.navCtrl.push (this.tv)
  }
 smartphone (){
    this.navCtrl.push (this.sma)
  }
  lampara (){
    this.navCtrl.push (this.lam)
  }

}
