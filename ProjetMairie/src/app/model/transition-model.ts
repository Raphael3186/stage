/*
Objet qui enregistre les données de transition
entre les bornes.
lieu: lieu ou la borne se situe
resume: resumé historique du lieu
PARTIE: n°de l'arret  
photo: une photo indicative de la borne pour que l'utilisateur se repère plus facilement
pseudo: le pseudo de l'utilisateur
points: points accumuler par l'utilisateur 
*/
export class Transition{
    lieu: string = "";
    latitude: number;
    longitude: number;
    map: any;
    codeYt: string;
    pseudo: string = "";
    points: number = 0;

    constructor(l: string, la: any, lng: any, codeYt: string){
        this.lieu = l;
        this.latitude = la;
        this.longitude = lng;
        this.codeYt = codeYt;
    }
}