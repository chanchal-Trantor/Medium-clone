import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
registerForm= new FormGroup({
  name:new FormControl(''),
  password:new FormControl('')
})
  constructor() { }

  ngOnInit(): void {
  }
register(event:any){
  event.preventDefault();
  console.log(this.registerForm.value)
}
}
