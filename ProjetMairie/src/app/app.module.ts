import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ComponentModule } from './component/component.module';
import { SideMenuComponent } from './component/side-menu/side-menu.component';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { BornesScanerComponent } from './component/borne-scaner/bornes-scaner.component';
import { TransitionService } from './service/service-transition';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { PseudoService } from './service/service-pseudo';



/* Indentifiant Firebase pour liaison au projet */
var firebaseConfig = {
  apiKey: "AIzaSyBoRw6CPQfcxbfAwFoYrpppgcIomkh84Ts",
  authDomain: "projetmairiecolomiers.firebaseapp.com",
  databaseURL: "https://projetmairiecolomiers-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "projetmairiecolomiers",
  storageBucket: "projetmairiecolomiers.appspot.com",
  messagingSenderId: "898156475226",
  appId: "1:898156475226:web:b7ca4502cb235d5e847963",
  measurementId: "G-THYS6D95QK"
};



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, 
    IonicModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig), 
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AppRoutingModule,
    ComponentModule,],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, 
    SideMenuComponent, 
    BarcodeScanner, 
    BornesScanerComponent, 
    TransitionService,
    PseudoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
