import { Injectable } from '@angular/core';

import AlbumJson from './data/album.json';
import { IdolService } from './idol.service';

@Injectable(
  {providedIn: 'root'}
)
export class AlbumService {


  constructor(private idolService:IdolService) { 
  }
  getAlbumMap(){
    return AlbumJson;
  }
}
