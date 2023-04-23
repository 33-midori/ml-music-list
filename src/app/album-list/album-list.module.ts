import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumListComponent } from './album-list.component';
import { BodyRoutingModule } from '../body/body-routing.module';

@NgModule({
  declarations: [
    AlbumListComponent
  ],
  imports: [
    CommonModule,
    BodyRoutingModule
  ]
})
export class AlbumListModule { }
