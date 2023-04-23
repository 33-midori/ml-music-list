import { Injectable } from '@angular/core';
import AlbumJson from './data/album.json';

@Injectable(
  {providedIn: 'root'}
)
export class AlbumService {
  private albumMap:any = {}
  constructor() { 
    for (const album of AlbumJson){
      this.albumMap[album.id.toString()] = album;
    }
  }
  getAlbumList(){
    return AlbumJson;
  }
  getAlbumMapById(){
    return this.albumMap;
  }
  getAlbumMapByAlbumId(){
    return this.albumMap;
  }
}
