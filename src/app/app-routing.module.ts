import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: '', loadChildren: () => import('./body/body.module').then(m => m.BodyModule) },
  { path: '', redirectTo: '', pathMatch: 'full' }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes,{ scrollPositionRestoration: "top" }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
