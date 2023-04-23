import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicService } from '../service/music.service';
import { AlbumService } from '../service/album.service';
import { IdolService } from '../service/idol.service';

//CDアルバムの一覧を表示する
@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {
  /** CDシリーズ名 */
  seriesName = "";
  /** アルバムの配列 */
  public albumList: any = [];
  /** アルバム毎の曲リスト キー：アルバムID 要素:トラック番号昇順ソートの楽曲リスト */
  public albumMusicMap: any = {};
  /** アイドル連想配列 */
  public idolMap: any;
  /** 楽曲情報の歌唱メンバーの表示有無フラグ */
  public vocalShowState:Array<boolean> = [];
  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService,
    private musicService : MusicService,
    private idolService: IdolService
    ) {
      
    }

  ngOnInit() {
    this.route.params.subscribe((params) => (this.seriesName =  params['cdseriesId']));
    //アルバムリストを選択したCDシリーズで抽出する
    this.albumList = this.albumService.getAlbumList();
    this.albumList = this.albumList.filter( (v:any) => {return v.cdseriesPath == this.seriesName});
    this.idolMap = this.idolService.getIdolMap();
    //albumMusicMapをキー：アルバムID 要素:トラック番号昇順ソートの楽曲リストで設定する
    const musicList = this.musicService.getMusicList();
    for(const album of this.albumList){
      const albumMusicList = musicList.filter((v)=>{return v.albumId == album.id});
      albumMusicList.sort((a,b) => {return a.trackNum - b.trackNum});
      albumMusicList.map((v:any) => v["vocalShowState"] = v.unitType == 4 ? false : true);
      this.albumMusicMap[album.id.toString()] = albumMusicList;
    }

  }

  /** 歌唱メンバー押下時 */
  clickVocalListPullDown(event:any,music:any){
    if(music["vocalShowState"]){
      music["vocalShowState"] = false;
    }else{
      music["vocalShowState"] = true;
    }
  }
}
