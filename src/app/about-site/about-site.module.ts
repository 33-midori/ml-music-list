import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutSiteComponent } from './about-site.component';
import { BodyRoutingModule } from '../body/body-routing.module';



@NgModule({
  declarations: [
    AboutSiteComponent
  ],
  imports: [
    CommonModule,
    BodyRoutingModule
  ],
  providers:[
  ]
})
export class AboutSiteModule { }
