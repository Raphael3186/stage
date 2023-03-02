import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { SideMenuComponent } from './component/side-menu/side-menu.component';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(
    public router: Router, 
    public popoverController: PopoverController, 
    public sideMenuComponent: SideMenuComponent) {}

  /*Popover pour le bouton redirection mairie-----------------*/
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: SideMenuComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  

  /*Ouvrir Page Regle -----------------------------*/
  ouvrirPageRegle(){
    this.router.navigate(['regle-du-jeu']);
  }
  

  /*Ouvrir Page Classement ------------------------*/
  ouvrirPageClassement(){
    this.router.navigate(['classement'])
  }
  



}
