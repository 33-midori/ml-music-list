import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BodyComponent } from './body.component';
import { BodyRoutingModule } from './body-routing.module';
import { HeaderComponent } from '../header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from '../footer/footer.component';
import { CdSeriesListModule } from '../cd-series-list/cd-series-list.module';
import { AlbumListModule } from '../album-list/album-list.module';
import { IdolMusicListModule } from '../idol-music-list/idol-music-list.module';
import { AboutSiteModule } from '../about-site/about-site.module';

@NgModule({
  declarations: [
    BodyComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    BodyRoutingModule,
    MatToolbarModule,
    AboutSiteModule,
    CdSeriesListModule,
    AlbumListModule,
    IdolMusicListModule
  ]
})
export class BodyModule { 
}
