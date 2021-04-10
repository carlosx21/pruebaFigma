import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";


@Injectable({
  providedIn: 'root'
})
export class AuthGoService {

  constructor( public afAuth: AngularFireAuth) { }

  // Sign in with Google
  GoogleAuth() {
   
  }  

  // Auth logic to run auth providers
  AuthLogin(provider) {
  
  }
}
