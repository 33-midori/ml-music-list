import { Injectable } from '@angular/core';
import IdolJson from './data/idol.json';

@Injectable(
  {providedIn: 'root'}
)

export class IdolService {

  constructor() { 

  }

  getIdolList(){
    return IdolJson;
  }

  getIdolMapKeyId(){
    let idolMap:any = {};

    for(const idol of IdolJson){
      idolMap[idol.id.toString()] = idol;
    }

    return idolMap;
  }

}
