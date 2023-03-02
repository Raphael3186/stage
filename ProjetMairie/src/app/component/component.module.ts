import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { SideMenuComponent } from "./side-menu/side-menu.component";



@NgModule({
    imports: [ CommonModule, FormsModule, IonicModule],
    declarations: [SideMenuComponent],/*Ajout du component SideMenu*/
    exports: [SideMenuComponent]/*Ajout du component SideMenu*/
  })
export class ComponentModule {

}