import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { NotesComponent } from 'src/app/component/notes/notes.component';
import { BornesScanerComponent } from '../../component/borne-scaner/bornes-scaner.component';
import { AlertController } from '@ionic/angular';
import { TransitionService } from 'src/app/service/service-transition';


@Component({
  selector: 'app-borne4',
  templateUrl: './borne4.page.html',
  styleUrls: ['./borne4.page.scss'],
})
export class Borne4Page implements OnInit {

  reponse:string;
  indice2: boolean = false;
  indice1: boolean = false;

  constructor(
    private b: BornesScanerComponent, 
    public router: Router,
    public popoverController: PopoverController,
    public alertCtrl: AlertController,
    public pseudo:TransitionService) { }

  ngOnInit() {
  }

  /* Popover pour afficher un text où écrir des notes */ 
  async notesPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: NotesComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  //----------------------------------------------------------

  /*Ouvrir l'indice 1*/

  ouvrirPageIndice1(){
    this.indice1 = true;
    this.router.navigate(['borne4/indice1']);
  }
  /*Ouvrir l'indice 2*/

  ouvrirPageIndice2(){
    this.indice2 = true;
    this.router.navigate(['borne4/indice2']);
  }

  /*Ouvrir page transition 5*/

  deuxiemeBorne(id){
    if(this.indice1 && this.indice2){
      this.pseudo.listTransition[0].points += 1;
    }else if(this.indice1 || this.indice2){
      this.pseudo.listTransition[0].points += 2;
    }else{
      this.pseudo.listTransition[0].points += 3;
    }
    this.recupPointLocalStorage();
    this.router.navigate(["transition/" + id]);
  
}
  /* Traitement de la réponse numero 4 */
  traitementReponse(){
      if((this.indice1 && this.indice2) && (this.reponse == null)){
        this.deuxiemeBorne(4);
      }
      if(this.reponse != null){
      this.reponse = this.reponse.toLowerCase();
      this.reponse = this.reponse.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

      if(this.reponse.indexOf("radegonde") >= 0){
        this.deuxiemeBorne(4);
      }else{
        this.errorAlert();
      }
    }
    this.reponse = null;
  }

  async errorAlert() { 
    const alert = await this.alertCtrl.create({ 
    header: 'Erreur', 
    subHeader: 'Réponse fausse',  
    buttons: ['OK'] 
    }); 
    await alert.present(); 
    const result = await alert.onDidDismiss();  
    console.log(result); 
  } 
  /* Permet de recuperer les points de l'énigme precedente dans le local storage pour les additioner aux points de l'énigme sur la borne actuelle*/
  recupPointLocalStorage(){
    
    let temp =parseInt(localStorage.getItem("points")) + this.pseudo.listTransition[0].points

    localStorage.setItem("points", JSON.stringify(temp));
    
    
  }
  /* --------------------------------------------------------- */

}