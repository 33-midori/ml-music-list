import { Injectable } from '@angular/core';
import CdSeriesMapJson from './data/cdseriesMap.json';

@Injectable({
  providedIn: 'root'
})
export class CdSeriesMapService {

  constructor() { }

  getCdSeriesMap(){
    return CdSeriesMapJson;
  }
}
