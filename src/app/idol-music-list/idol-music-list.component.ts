import { ChangeDetectorRef, Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IdolService } from '../service/idol.service';
import { MusicService } from '../service/music.service';

@Component({
  selector: 'app-idol-music-list',
  templateUrl: './idol-music-list.component.html',
  styleUrls: ['./idol-music-list.component.css']
})
export class IdolMusicListComponent implements OnInit{
  
  idolId:number = 0;
  idol:any = [];
  public idolMap:any;
  public musicMap:any;

  /** 楽曲情報の歌唱メンバーの表示有無フラグ */
  public vocalShowState:Array<boolean> = [];

  /** unitTypeが切り替わった最初の要素を持つ配列 */
  public unitTypeStartNumList:Array<number> = [];

  private albumList:any =[];
  constructor(
    public changeDetectorRef: ChangeDetectorRef,
    private route: ActivatedRoute,
    private idolservice :IdolService,
    private musicService : MusicService
    ) {}

  ngOnInit() {
    const idolListAll = this.idolservice.getIdolList();
    this.musicMap = this.musicService.getMusicMap();
    this.route.params.subscribe((params) => {
      this.idolId =  params['idolId'];
      this.idol = idolListAll.filter(v => v.id == this.idolId)[0];
      this.initialize(this.idol);
    });
    this.idol = idolListAll.filter(v => v.id == this.idolId)[0];
    this.initialize(this.idol);
    this.idolMap = this.idolservice.getIdolMap();
  }

  ngOnChanges(){

  }

  private initialize(idol:any){
    this.vocalShowState = new Array<boolean>;
    this.unitTypeStartNumList = [];
    this.unitTypeStartNumList.push(0);
    for(let i = 0; i< idol.musicList.length; i++){
      const music =  this.musicMap[idol.musicList[i].toString()];
      const showFlag = music.unitType != 4 ? true : false;
      this.vocalShowState.push(showFlag);
      if(i != 0 && music.unitType != this.musicMap[idol.musicList[i-1].toString()].unitType){
        this.unitTypeStartNumList.push(i);
      }
    }
  }

  /** 歌唱メンバー押下時 */
  clickVocalListPullDown(event:any,num:number){
    if(this.vocalShowState[num]){
      this.vocalShowState[num] = false;
    }else{
      this.vocalShowState[num] = true;
    }
  }
}
