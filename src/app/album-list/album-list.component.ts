import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CdSeriesMapService } from '../service/cd-series-map.service';

//CDアルバムの一覧を表示する
@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {
  seriesName = "";
  cdSeriesMap:any = [];
  private albumList:any =[];
  constructor(private route: ActivatedRoute,private cdseriesMapService:CdSeriesMapService) {}

  ngOnInit() {
    this.route.params.subscribe((params) => (this.seriesName =  params['cdseriesId']));
    this.cdSeriesMap = this.cdseriesMapService.getCdSeriesMap();
  }
}
