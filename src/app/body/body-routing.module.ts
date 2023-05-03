import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body.component';
import { CdSeriesListComponent } from '../cd-series-list/cd-series-list.component';
import { AlbumListComponent } from '../album-list/album-list.component';
import { IdolMusicListComponent } from '../idol-music-list/idol-music-list.component';
import { AboutSiteComponent } from '../about-site/about-site.component';

const routes: Routes = [
  { path: '', component: BodyComponent,
    children:[
      { path: 'index', component: CdSeriesListComponent},
      { path: 'about', component: AboutSiteComponent},
      { path: '', redirectTo: 'index', pathMatch: 'full' },
    ]},
  { path: 'idol/:idolId', component: BodyComponent,
    children:[
      { path: '', component: IdolMusicListComponent},
    ]},
  { path: 'cd-series/:cdseriesId', component: BodyComponent,
    children:[
      { path: '', component: AlbumListComponent},
    ]},
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: 'index', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BodyRoutingModule { }
