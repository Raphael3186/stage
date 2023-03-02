import { Component, OnInit } from '@angular/core';
import { BornesScanerComponent } from '../component/borne-scaner/bornes-scaner.component';
import { ActivatedRoute } from '@angular/router';
import { Transition } from '../model/transition-model';
import { TransitionService } from '../service/service-transition';
import YouTubePlayer from 'youtube-player'
import { Platform } from '@ionic/angular';


declare var mapboxgl;


@Component({
  selector: 'app-transition',
  templateUrl: './transition.page.html',
  styleUrls: ['./transition.page.scss'],
})
export class TransitionPage implements OnInit {

  indice: number;
  rst: Transition;
  myLatLng: any;
  
 player: any;
 videoId: string;
 stopped: boolean = true;
 subscribe: any;

  constructor(
    public b: BornesScanerComponent,
    private activ: ActivatedRoute,
    public ts: TransitionService,
    public platform: Platform) {

    /*Quitter l'application sous Android------------------------*/
    this.subscribe = this.platform.backButton.subscribeWithPriority(666666,()=>{
      if(this.constructor.name == "TransitionPage")
      {
        if(window.confirm("Voulez-vous quitter l'application ?"))
        {
          navigator["app"].exitApp();
        }
      }
    })

    /*permet la récupération du paramètre passé dans router.navigate*/
    this.indice = parseInt(this.activ.snapshot.paramMap.get("id"));
    /*
    récupère l'objet Transition présent dans le tableau listTransition à l'indice passé en paramètre
    pour permettre un affichage correcte des données de la borne de transition
    */
    this.rst = this.ts["listTransition"][this.indice];
    this.myLatLng = { lat: this.rst.latitude, lng: this.rst.longitude };
    this.videoId = this.rst.codeYt

  }

  ngOnInit() {

    this.play()

  }

  /* Marche et arret de la video Youtube */
  play(){
    if(this.stopped){
      if(this.player == undefined){
        this.player = YouTubePlayer('divid');
      }
      this.player.loadVideoById(this.videoId).then(()=>{
        this.player.playVideo();
        this.stopped = false;
      })
    }
  }

  stop(){
    if(!this.stopped){
      this.player.stopVideo().then(()=>{
        this.stopped = true;
      })
    }
  }

  /* Fonction native ionic permetant d'activer une fonction (initMap()) l'orsque l'utilisateur ouvre la page */
  ionViewDidEnter(){
    this.initMap();
  }

  /* deplacer scan() dans BorneScanerComponent pour une gestion externe de toute les fonctions */
  scan() {
    this.b.switchBorne();
    this.b.scan()
  }

  /* initialisation de la map googlemap */
  initMap(){

    mapboxgl.accessToken = "pk.eyJ1IjoibWFpcmllZGVjb2xvbWllcnMiLCJhIjoiY2t0Ym50ZDRuMG1hcTJ3bXl1aHh6c2gyYiJ9.99Edcjt-GD9ekLHnBia1Ww";
    this.rst.map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: this.myLatLng,
        zoom: 17
      });
  
    
  }

  /* Création d'un marqueur représentant l'endroit ou ce trouve la prochaine borne */
  addMarker(){
    new mapboxgl.Marker()
      .setLngLat(this.myLatLng)
      .addTo(this.rst.map);
   
  }


}