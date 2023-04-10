import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdolMusicListComponent } from './idol-music-list.component';
import { BodyRoutingModule } from '../body/body-routing.module';


@NgModule({
  declarations: [
    IdolMusicListComponent
  ],
  imports: [
    CommonModule,
    BodyRoutingModule,
  ],
  providers: [
  ]
})
export class IdolMusicListModule { }
