import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: AngularFireAuth){
  }
  loginWithGoogle() {
   return this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  // Funcion para cerrar seción
  logout(){
    return this.auth.signOut();
  }

}
