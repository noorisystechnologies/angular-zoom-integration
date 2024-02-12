import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZoomRoutingModule } from './zoom-routing.module';
import { ZoomViewComponent } from './zoom-view/zoom-view.component';
import { ZoomView2Component } from './zoom-view2/zoom-view2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ZoomViewComponent,
    ZoomView2Component
  ],
  imports: [
    CommonModule,
    ZoomRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ZoomModule { }
