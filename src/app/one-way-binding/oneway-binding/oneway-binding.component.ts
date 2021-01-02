import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oneway-binding',
  templateUrl: './oneway-binding.component.html',
  styleUrls: ['./oneway-binding.component.scss']
})
export class OnewayBindingComponent implements OnInit {
 public name : string = "Pham Xuan Hau";
 public obj:any  = {hoTen : "Nguyen Van a" , gioitinh : "Nam"}
  constructor() { }
  changeName(value: any) {
    this.name = value.value;  
  }
  ngOnInit(): void {
  }

}
