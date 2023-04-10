import { ChangeDetectorRef, Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IdolService } from '../service/idol.service';

@Component({
  selector: 'app-idol-music-list',
  templateUrl: './idol-music-list.component.html',
  styleUrls: ['./idol-music-list.component.css']
})
export class IdolMusicListComponent implements OnInit{
  
  idolId:number = 0;
  idol:any = [];
  public idolMap:any;

  /** 楽曲情報の歌唱メンバーの表示有無フラグ */
  public vocalShowState:Array<boolean> = [];

  /** unitTypeが切り替わった最初の要素を持つ配列 */
  public unitTypeStartNumList:Array<number> = [];

  private albumList:any =[];
  constructor(
    public changeDetectorRef: ChangeDetectorRef,
    private route: ActivatedRoute,
    private idolservice :IdolService
    ) {}

  ngOnInit() {
    const idolListAll = this.idolservice.getIdolList();
    this.route.params.subscribe((params) => {
      this.idolId =  params['idolId'];
      this.idol = idolListAll.filter(v => v.id == this.idolId)[0];
      this.initialize(this.idol);
    });
    this.idol = idolListAll.filter(v => v.id == this.idolId)[0];
    this.initialize(this.idol);
    this.idolMap = this.idolservice.getIdolMapKeyId();
  }

  ngOnChanges(){

  }

  private initialize(idol:any){
    this.vocalShowState = new Array<boolean>;
    this.unitTypeStartNumList = [];
    this.unitTypeStartNumList.push(0);
    for(let i = 0; i< idol.musicList.length; i++){
      const showFlag = idol.musicList[i].unitType == 2 ? true : false;
      this.vocalShowState.push(showFlag);
      if(i != 0 && idol.musicList[i].unitType != idol.musicList[i-1].unitType){
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
