import { Injectable } from '@angular/core';
import MusicJson from './data/music.json'

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  private musicMap:any ={};
  constructor() { 
    for (const music of MusicJson){
      this.musicMap[music.id.toString()] = music;
    }
  }

  getMusicList(){
    return MusicJson;
  }

  getMusicMap(){
    return this.musicMap;
  }

}
