import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CdSeriesListService } from '../service/cd-series-list.service';
import { IdolService } from '../service/idol.service';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-cdseries-list',
  templateUrl: './cd-series-list.component.html',
  styleUrls: ['./cd-series-list.component.css']
})
export class CdSeriesListComponent implements OnInit{
  
  public tabIndexState:number;
  cdseriesList:any = [];
  idolList:any = [];

  constructor(
    private route: ActivatedRoute,
    private cdseriesServiceList :CdSeriesListService,
    private idolservice :IdolService,
    ) {
      const index = sessionStorage.getItem('tabIndexState') ?? "0";
      this.tabIndexState = parseInt(index);
      sessionStorage.setItem("tabIndexState",this.tabIndexState.toString());
    }

  ngOnInit() {
    this.cdseriesList = this.cdseriesServiceList.getCdseriesList();
    this.idolList = this.idolservice.getIdolList();
  }

  public changeTab(event:MatTabChangeEvent){
    if(event.index == 1){
      sessionStorage.setItem("tabIndexState","1");
    }else{
      sessionStorage.setItem("tabIndexState","0");
    }
  }
}
