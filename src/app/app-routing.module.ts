import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'', redirectTo:'zoom-view', pathMatch:'full'
  },
  {path:'zoom-view',
  loadChildren:() => import('./zoom/zoom.module').then(m=> m.ZoomModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
