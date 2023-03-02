/*
on créer une liste d'objet Transition, un par borne
on entrera en brupt les données de chaque borne
*/
import { Transition } from "../model/transition-model";

export class TransitionService{
    listTransition: Transition[] = [
                                      /*    "Lieu"    "Latitude" "Longitude"               "Video"    */ 
    /*Transition n°0*/ new Transition("Ancien cinema",43.610979,1.332796,"K4WyR1epPss"),                                    
    /*Transition n°1*/ new Transition("L’Hôtel de ville sur la place Alex Raymond",43.610661,1.334683,"b5G3sbuGudo"),        
    /*Transition n°2*/ new Transition("L’arrêt de bus «Médiathèque – Pavillon blanc»",43.609032,1.336365,"kn9T-0Y11OQ"),  
    /*Transition n°3*/ new Transition("Au croisement des rues Chrestias et Gilet : la fontaine Chrestias",43.610293,1.339570,"5XfY-D2biEo"),
    /*Transition n°4*/ new Transition("Eglise Sainte-Radegonde",43.612723,1.339270,"iz5mIU3hbS8"),                          
    /*Transition n°5*/ new Transition("Le Conservatoire",43.610158,1.340741,"ISssry_quhs"),                                 
    /*Transition n°6*/ new Transition("La place de la Bascule",43.608113,1.339126,"whrhjeMMiEM"),                           
    /*Transition n°7*/ new Transition("Rond-point des droits de l’Homme",43.608582,1.336113,"3AbSsElqB-E"),                 
    /*Transition n°8*/ new Transition("Maison citoyenne Saint-Exupéry, ancienne gare de Colomiers",43.609805,1.332887,"TN3TGdTxFAE"),
    /*Transition n°9*/ new Transition("Espace nautique Jean Vauchère",43.608800,1.332680,"N_Fc2wX-mDM"),                                      
    ];

    
    

}