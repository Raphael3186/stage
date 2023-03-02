import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { BornesScanerComponent } from '../../component/borne-scaner/bornes-scaner.component';
import { NotesComponent } from '../../component/notes/notes.component'
import { AlertController } from '@ionic/angular';
import { TransitionService } from 'src/app/service/service-transition';

@Component({
  selector: 'app-premiere-borne',
  templateUrl: './premiere-borne.page.html',
  styleUrls: ['./premiere-borne.page.scss'],
})
export class PremiereBornePage implements OnInit {

  reponse:string;
  indice1:boolean = false;
  indice2:boolean = false;

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
    this.router.navigate(['premiere-borne/indice1']);
    this.indice1 = true;
  }
/*Ouvrir l'indice 2*/

  ouvrirPageIndice2(){
    this.router.navigate(['premiere-borne/indice2']);
    this.indice2 = true;
  }

/*Ouvrir page transition 2*/

  deuxiemeBorne(id){
  if(this.indice1 && this.indice2){
    this.pseudo.listTransition[0].points += 1;
  }else if(this.indice1 || this.indice2){
    this.pseudo.listTransition[0].points += 2;
  }else{
    this.pseudo.listTransition[0].points += 3;
  }
  localStorage.setItem("points", JSON.stringify(this.pseudo.listTransition[0].points))
  this.router.navigate(["transition/" + id]);
  
}

/*alerte pour reponse incomplete*/
async showAlert() { 
  const alert = await this.alertCtrl.create({ 
  header: 'Erreur', 
  subHeader: 'Réponse incomplète', 
  message: 'Vous avez trouvez 1 mot sur les 2 attendus', 
  buttons: ['OK'] 
  }); 
  await alert.present(); 
  const result = await alert.onDidDismiss();  
  console.log(result); 
}

async errorAlert() { 
  const alert = await this.alertCtrl.create({ 
  header: 'Erreur', 
  subHeader: 'Réponse fausse', 
  message: 'Vous avez trouvez 0 mot sur les 2 attendus', 
  buttons: ['OK'] 
  }); 
  await alert.present(); 
  const result = await alert.onDidDismiss();  
  console.log(result); 
} 

/*traitement de la réponse borne 1*/


  traitementReponse(){
    if((this.indice1 && this.indice2) && (this.reponse == null)){
      this.deuxiemeBorne(1);
    }
    if(this.reponse != null){
    this.reponse = this.reponse.toLowerCase();
    this.reponse = this.reponse.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  
      if(this.reponse.indexOf("hotel") >= 0 && this.reponse.indexOf("ville") >= 0){
        this.deuxiemeBorne(1);
      }else if(this.reponse.indexOf("hotel") >= 0 || this.reponse.indexOf("ville") >= 0){
        this.showAlert();
      }else{
        this.errorAlert();
      }
    }
    this.reponse = null;
  }

}
