import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyRoutingModule } from '../body/body-routing.module';
import { CdSeriesListComponent } from './cd-series-list.component';
import { CdSeriesButtonComponent } from '../cd-series-button/cd-series-button.component';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    CdSeriesListComponent,
    CdSeriesButtonComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    BodyRoutingModule,
  ],
  providers: [
  ]
})
export class CdSeriesListModule { }
