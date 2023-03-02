import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, Platform } from '@ionic/angular';
import { PseudoService } from '../service/service-pseudo';
import { TransitionService } from '../service/service-transition';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {

  /*Variable utilisé pour quitter l'application sous Android*/
  subscribe: any;
  

  

  constructor(
    private router: Router,
    public platform: Platform,
    public pseudo:TransitionService,
    public alertCtrl: AlertController, 
    public pseudoService: PseudoService
    ) {
      
  /*Quitter l'application sous Android------------------------*/
    this.subscribe = this.platform.backButton.subscribeWithPriority(666666,()=>{
        if(this.constructor.name == "HomePage")
        {
          if(window.confirm("Voulez-vous quitter l'application ?"))
          {
            navigator["app"].exitApp();
          }
        }
      })
    this.pseudo.listTransition[0].points = 0;

  }    
   
   
  /* Bouton qui permet de rentré sont pseudo/ passer à la première énigme et stoppé l'audio */ 
  boutonAjoutPseudo(){

    this.showAlert();
    this.stopAudio()
  }


  /* Stop l'audio  */
  stopAudio(){
    let audio = document.querySelector("audio");
    audio.pause();
    audio.currentTime = 0;
  }


  /* Ajout d'un pseudo joueur (facultatif) --------------------------- */
  async showAlert() {
      const alert = await this.alertCtrl.create({ 
      header: 'Entrée votre pseudo', 
      subHeader: 'version compétitive', 
      message: "Vous n'etes pas obligé de rentrer de pseudo",
      inputs: [
        {
          name:'pseudo',
          placeholder:'Votre pseudo...',
          id:'uniqueID'  
        }], 
      buttons: [{
        text:'Annuler',
        role:'Cancel',
        handler: () => {
          localStorage.setItem('pseudo', null)
          this.pageTransition();
        },
      },
      {
        text: 'ok',
        handler: (alertData) => {
        if(alertData.pseudo != ""){
          this.verificationPseudo(alertData.pseudo)
          alertData.pseudo = localStorage.setItem('pseudo', JSON.stringify(alertData.pseudo))
        } 
        }      
      }]
    });
    await alert.present(); 
  }



    /* Envoie page transition numéro 0 (première transition) */
      pageTransition(){
      this.router.navigate(["transition/",0]);
      }

    /* Message d'alerte pseudo déja utilisé */
    async pseudoAlert(){
      const alert = await this.alertCtrl.create({ 
        header: "Erreur",
        subHeader: "Pseudo déja existant ou vide",
        message: "Veuillez choisir un autre pseudo",
        buttons: ["Ok"]
      });
      await alert.present();
    }

    /* Fonction permetant de vérifier si le pseudo est déja en base de donnée */
    verificationPseudo(pseudo:string){ 
      let test;
      let indice = 0;
      let sub = this.pseudoService.afDB.list('Pseudo').snapshotChanges().subscribe( listPseudoFirebase => {
      for(const unPseudo of listPseudoFirebase){
        test = unPseudo.payload.exportVal().pseudo;
        console.log(unPseudo.payload.exportVal())
          if (test == pseudo) {
            this.pseudoAlert();
            sub.unsubscribe;
            break;
          }else if(listPseudoFirebase[indice + 1] == null){
            this.pseudo.listTransition[0].pseudo = pseudo;
            this.pageTransition();
            sub.unsubscribe;
            break;
          }
          indice++;
        };
      })
    }
}
