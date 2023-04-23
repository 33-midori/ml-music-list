import { Injectable } from '@angular/core';
import IdolJson from './data/idol.json';

@Injectable(
  {providedIn: 'root'}
)

export class IdolService {
  private idolMap:any = {};
  constructor() { 
    for(const idol of IdolJson){
      this.idolMap[idol.id.toString()] = idol;
    }
  }

  getIdolList(){
    return IdolJson;
  }

  getIdolMap(){
    return this.idolMap;
  }

}
