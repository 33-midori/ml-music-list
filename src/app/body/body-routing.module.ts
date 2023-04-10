import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body.component';
import { CdSeriesListComponent } from '../cd-series-list/cd-series-list.component';
import { AlbumListComponent } from '../album-list/album-list.component';
import { IdolMusicListComponent } from '../idol-music-list/idol-music-list.component';

const routes: Routes = [
  { path: '', component: BodyComponent,
    children:[
      { path: 'index', component: CdSeriesListComponent},
      { path: 'idol/:idolId', component: IdolMusicListComponent},
      { path: 'cd-series/:cdseriesId', component: AlbumListComponent},
      { path: '', redirectTo: 'index', pathMatch: 'full' },
    ]},
    
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: 'index', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BodyRoutingModule { }
