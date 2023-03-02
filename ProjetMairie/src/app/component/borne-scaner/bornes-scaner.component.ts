//component qui gere les fonctiones liées aux bornes et à la transition

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';


@Component({
  selector: 'app-bornes-scaner',
  templateUrl: './bornes-scaner.component.html',
  styleUrls: ['./bornes-scaner.component.scss'],
})
export class BornesScanerComponent implements OnInit {

  data:string;

  constructor
  (private router: Router, 
  private barCode: BarcodeScanner,) { }

  ngOnInit() {}

  /*permet l'affichage de la borne selon le retour du QRcode enregistré dans la variable data & rechargement de la page pour affichage de la MAP*/
  switchBorne() {
    switch (this.data) {
      case ('https://eqrcode.co/a/hn2smB'):
        this.router.navigate(['premiere-borne']).then(() =>{
          location.reload();
        })
        break;
      case ("https://eqrcode.co/a/QEzOD1"):
        this.router.navigate(['borne2']).then(() =>{
          location.reload();
        })
        break;
      case ("https://eqrcode.co/a/KFZNSd"):
        this.router.navigate(['borne3']).then(() =>{
          location.reload();
        })
        break;
      case ("https://eqrcode.co/a/8okmuj"):
        this.router.navigate(['borne4']).then(() =>{
          location.reload();
        })
        break;
      case ("https://eqrcode.co/a/pHDdSs"):
        this.router.navigate(['borne5']).then(() =>{
          location.reload();
        })
        break;
      case ("https://eqrcode.co/a/o4T8xd"):
        this.router.navigate(['borne6']).then(() =>{
          location.reload();
        })
        break;
      case ("https://eqrcode.co/a/rBNdG3"):
        this.router.navigate(['borne7']).then(() =>{
          location.reload();
        })
        break;
      case ("https://eqrcode.co/a/6RqTKx"):
        this.router.navigate(['borne8']).then(() =>{
          location.reload();
        })
        break;
      case ("https://eqrcode.co/a/siipBM"):
        this.router.navigate(['borne9']).then(() =>{
          location.reload();
        })
        break;
      case ("https://eqrcode.co/a/Ou6TOe"):
        this.router.navigate(['borne10']).then(() =>{
          location.reload();
        })
        break;
      default: 
      break;
    }
  }
  
  /**Lance le scan du QRcode si l'utilisateur autorise l'utilisation de l'appareil photo
  peut ne pas fonctionner si l'appareil est trop vieux**/
  scan()
  {
    this.data=null;
    this.barCode.scan().then(barCodeData => {

      this.data = barCodeData.text;
      this.switchBorne();
    
    }).catch(err => {
      console.log('Error',err);
    })
  }
}




