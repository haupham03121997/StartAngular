import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnewayBindingComponent } from './oneway-binding/oneway-binding.component';
import {FormsModule}from "@angular/forms";
import { RegisterFormComponent } from './register-form/register-form.component';


@NgModule({
  declarations: [OnewayBindingComponent, RegisterFormComponent],
  imports: [
    CommonModule , FormsModule
  ],
  exports: [OnewayBindingComponent , RegisterFormComponent]
})
export class OneWayBindingModule { }
