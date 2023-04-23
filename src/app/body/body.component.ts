import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IdolService } from '../service/idol.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  constructor(
    private idolservice :IdolService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      /*
      const idolMap:any = this.idolservice.getIdolMapKeyId();
      const idolId:string = params['idolId'];
      if(!(idolId in idolMap)){
        this.router.navigate(["/"]);
      }*/
    });
  }
}
