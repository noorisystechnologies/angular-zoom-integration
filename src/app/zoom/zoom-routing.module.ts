import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZoomViewComponent } from './zoom-view/zoom-view.component';
import { ZoomView2Component } from './zoom-view2/zoom-view2.component';

const routes: Routes = [
  // { path: '', redirectTo: '/zoom-view' , pathMatch:'full'},
  {path:'',component: ZoomViewComponent},
  {path:'zoom-meeting',component: ZoomView2Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZoomRoutingModule { }
