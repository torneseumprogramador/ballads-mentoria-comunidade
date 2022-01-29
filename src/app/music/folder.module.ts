import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';
import { ListOfMusicComponent } from './componets/list-of-music/list-of-music.component';
import { FormOfMusicComponent } from './componets/form-of-music/form-of-music.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule
  ],
  declarations: [
    FolderPage,
    ListOfMusicComponent,
    FormOfMusicComponent
  ]
})
export class FolderPageModule {}
