import { Injectable } from '@angular/core';
import CdSeriresListJson from './data/cdseriesList.json'

@Injectable({
  providedIn: 'root'
})
export class CdSeriesListService {

  cdSeriresList = [];
  constructor() {

  }
  getCdseriesList(){
    //return Object.entries(CdSeriresListJson);
    return CdSeriresListJson;
  }

}
