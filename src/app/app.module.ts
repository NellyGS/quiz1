import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BocPage } from '../pages/boc/boc';
import { TvPage } from '../pages/tv/tv';
import { LamPage } from '../pages/lam/lam';
import { IntPage } from '../pages/int/int';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BocPage,
    TvPage,
    LamPage,
    IntPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BocPage,
    TvPage,
    LamPage,
    IntPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
