import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  constructor() { }
   public email: string = "";
   public fullName:string ="";
   public status: boolean = false;
   ChangeEmail(value : string){
     this.email = value;
   }
  ngOnInit(): void {
  }

}
