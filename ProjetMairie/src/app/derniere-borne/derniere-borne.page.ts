import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-derniere-borne',
  templateUrl: './derniere-borne.page.html',
  styleUrls: ['./derniere-borne.page.scss'],
})



export class DerniereBornePage implements OnInit {

  subscribe: any;

  constructor(
    public router: Router,
    public platform: Platform) {
    /*Quitter l'application sous Android------------------------*/
    this.subscribe = this.platform.backButton.subscribeWithPriority(666666,()=>{
      if(this.constructor.name == "DerniereBornePage")
      {
        if(window.confirm("Voulez-vous quitter l'application ?"))
        {
          navigator["app"].exitApp();
        }
      }
    })
   }

  ngOnInit() {
  }

/*Retour au Menu Principal*/
  retourAuMenu(){
    this.router.navigate(['']);
  }

}
