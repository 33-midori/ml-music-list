import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CdSeriesListService } from '../service/cd-series-list.service';
import { IdolService } from '../service/idol.service';

@Component({
  selector: 'app-cdseries-list',
  templateUrl: './cd-series-list.component.html',
  styleUrls: ['./cd-series-list.component.css']
})
export class CdSeriesListComponent implements OnInit{
  cdseriesList:any = [];
  idolList:any = [];

  constructor(
    private route: ActivatedRoute,
    private cdseriesServiceList :CdSeriesListService,
    private idolservice :IdolService
    ) {}

  ngOnInit() {
    this.cdseriesList = this.cdseriesServiceList.getCdseriesList();
    this.idolList = this.idolservice.getIdolList();
  }
}
