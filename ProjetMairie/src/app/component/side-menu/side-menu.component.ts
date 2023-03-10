//component de gestion de l'affichage du side menu de la barre header
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {

  constructor(public menu: MenuController) {}

  ngOnInit() {
   
  }

//ouvre le slide
  openSlide(){
    this.menu.enable(true, 'slide');
    this.menu.open('slide');
  }

}
