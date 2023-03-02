/* Création de l'objet pseudo qui permet de stocker le pseudo et les points du joueur avant de les envoyer en base de donnée */
export class Pseudo {
    pseudo: string= "";
    points: number;

    constructor(ps: string, po: number){
        this.pseudo = ps;
        this.points = po;
    }

}