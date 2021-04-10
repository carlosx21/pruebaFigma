import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-saml',
  templateUrl: './saml.component.html',
  styleUrls: ['./saml.component.scss'],
})
export class SamlComponent implements OnInit {

  // Variable para controlar el formulario reactivo
  formsaml: FormGroup;
  // Variable para validacion del formulario 
  isSubmitted = false;
  // Variable que se utilizaria para validar el mail ingresado si es correcto o no
  badMail= true;

  constructor(private fb: FormBuilder ) { }

  ngOnInit() {

    this.formsaml = this.fb.group({
      name: ['', [Validators.required, Validators.email]],    
    })
    
  }

  
  actionFormSaml(){
        this.isSubmitted = true;
        if (!this.formsaml.valid) {
          return false;
        } else {
          console.log(this.formsaml.value)
        }
        // here change badMail with validation

    }
}
