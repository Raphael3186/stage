
import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { Pseudo } from "../model/pseudo-model";

@Injectable()
export class PseudoService {
    listPseudo: Pseudo[] = [];

    constructor(
        public afDB: AngularFireDatabase,
        ){

    }

    /* Permet le rechargement des pseudos et les points associer à ce dernier en base de donnée */
    loadPseudo() {
        this.afDB.list("Pseudo").snapshotChanges().subscribe(listPseudoFirebase => {
            this.listPseudo = [];
            listPseudoFirebase.forEach(unPseudo => {
                let nouveauPseudo: Pseudo = new Pseudo(unPseudo.key,unPseudo.payload.exportVal().pseudo);
                this.listPseudo.push(nouveauPseudo);
            });


            
        });
    }
    
    /* Fonction qui ajoute le pseudo et les points en bdd  */ 
    ajouterPseudoEtPoint(ps:string,po:number) {
        let unPseudo: Pseudo = new Pseudo(ps,0);
        let unPoint : Pseudo = new Pseudo("", po)

        this.afDB.list('Pseudo').push({
            pseudo: unPseudo.pseudo,
            point: unPoint.points
        });
    }

    /* Fonction qui récupère les pseudos et les points stockés dans la bdd */ 
    getListPseudo(){
        let listPseudoInFirebase = [];

            this.afDB.list('Pseudo').snapshotChanges().subscribe(listPseudoFirebase => {
                listPseudoFirebase.forEach(unPseudo  =>{
    
                    let nouveauPseudo: Pseudo = new Pseudo(unPseudo.payload.exportVal().pseudo, Number(unPseudo.payload.exportVal().point));
                    listPseudoInFirebase.push(nouveauPseudo);
                })
            })
       return listPseudoInFirebase; 
    };    
    
   
}
   
        







