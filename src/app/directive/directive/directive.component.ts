import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.scss']
})
export class DirectiveComponent implements OnInit {
 public status: boolean = true;
 public firtsColor : string = "red";
   constructor() { }
  ChangeStatusHidden(value){
    this.status = !this.status;
    console.log("status" , value);
    
  }
  // ChangeStatusShow(){
  //   this.status = true;
  // }
  OnchangeColor(color){
    console.log(":color" , color);
    this.firtsColor = color;
    
  }
  ngOnInit(): void {
  }

}
