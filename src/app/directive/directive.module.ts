import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveComponent } from './directive/directive.component';
import { MyDirectiveModule } from '../my-directive/my-directive.module';
// import { DirectiveForComponent } from './directive-for/directive-for.component';



@NgModule({
  declarations: [DirectiveComponent],
  imports: [
    CommonModule ,MyDirectiveModule
  ],
  exports: [DirectiveComponent ]
})
export class DirectiveModule { }
