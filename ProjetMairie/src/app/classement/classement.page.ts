import { Component, OnInit } from '@angular/core';
import { PseudoService } from '../service/service-pseudo';



@Component({
  selector: 'app-classement',
  templateUrl: './classement.page.html',
  styleUrls: ['./classement.page.scss'],
})
export class ClassementPage implements OnInit {

  listPseudoInFireBase: any;
  /*Varible utiliser pour la searchbar dans l'html*/
  searchTerm: string;
  
 
  constructor(
    public pseudoService: PseudoService,
    )
  {

    /* Envoie des données pseudo et points du joueur dans la variable listPseudoInFireBase pour affichage dans un tableau*/
    this.listPseudoInFireBase = this.pseudoService.getListPseudo();
  }

  ngOnInit() {
    
    
    /* Chargement de la syncronisation de la listPseudo et Firebase*/
    this.pseudoService.loadPseudo();
    
  }

  


}


