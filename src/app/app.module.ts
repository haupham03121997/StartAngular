import { DirectiveModule } from './directive/directive.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { BodyComponent } from './dashboard/body/body.component';
import { FooterComponent } from './dashboard/footer/footer.component';
import { SliderComponent } from './dashboard/body/slider/slider.component';
import { ContentComponent } from './dashboard/body/content/content.component';
import { ItemComponent } from './dashboard/body/content/item/item.component';
import { LayoutModule } from './layout/layout.module';
import { OneWayBindingModule } from './one-way-binding/one-way-binding.module';
import { MyDirectiveModule } from './my-directive/my-directive.module';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    SliderComponent,
    ContentComponent,
    ItemComponent,
  
  ],
  imports: [
    BrowserModule , LayoutModule , OneWayBindingModule , DirectiveModule , MyDirectiveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
