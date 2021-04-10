import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
})
export class PasswordComponent implements OnInit {

  myFormPass: FormGroup;
  
  constructor(private fb: FormBuilder,
             private route: Router , 
             private actro: ActivatedRoute) { }

  ngOnInit() {

    this.myFormPass =  this.fb.group({
      email: ['', [Validators.required, Validators.email]],    
    })
  }

  actionFormPass(){
     this.route.navigateByUrl("mailpass/"+ this.myFormPass.get('email').value);
  }
}
