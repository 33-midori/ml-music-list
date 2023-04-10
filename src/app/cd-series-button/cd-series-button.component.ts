import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cdseries-button',
  templateUrl: './cd-series-button.component.html',
  styleUrls: ['./cd-series-button.component.css']
})
export class CdSeriesButtonComponent implements OnInit{
  @Input() path?: String;
  @Input() displayName?: String;
  @Input() shortName?: String;
  @Input() fullName?: String;
  
  path_before: String;
  constructor() { 
    this.path_before = "";
  }

  ngOnInit(): void {
    this.path_before = "/cd-series";
  }
}
