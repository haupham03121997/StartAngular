import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutHeaderComponent } from './layout-header/layout-header.component';
import { LayoutfooterComponent } from './layoutfooter/layoutfooter.component';
import { LayoutSliderComponent } from './layout-slider/layout-slider.component';




@NgModule({
  declarations: [LayoutHeaderComponent, LayoutfooterComponent, LayoutSliderComponent,],
  imports: [
    CommonModule
  ],
  exports: [LayoutHeaderComponent ,LayoutSliderComponent, LayoutfooterComponent ,]
})
export class LayoutModule { }
