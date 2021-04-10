import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.scss'],
})
export class CreateaccountComponent implements OnInit {

  formsacc: FormGroup;
  isSubmitted = false;
  
  constructor(private fb: FormBuilder , private route: Router  ) { }

  ngOnInit() {

    this.formsacc = this.fb.group({
      name: ['', [Validators.required, Validators.email]], 
      pass:  ['', [Validators.required , Validators.minLength(8)]],  
    })
  }

  actionFormAcc(){
    this.isSubmitted = true;
    if (!this.formsacc.valid) {
      return false;
    } else {
      console.log(this.formsacc.value)
    }

    // para redireccionar a la pantalla de Tell us about yourself
    this.route.navigateByUrl("tellus");

}

  get errorControl() {
    return this.formsacc.controls;
  }
}
