import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { IonicModule } from '@ionic/angular';

import { ClassementPageRoutingModule } from './classement-routing.module';

import { ClassementPage } from './classement.page';
import { NgxDatatableModule } from '@swimlane/ngx-datatable'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClassementPageRoutingModule,
    NgxDatatableModule,
    Ng2SearchPipeModule
  ],
  declarations: [ClassementPage]
})
export class ClassementPageModule {}
