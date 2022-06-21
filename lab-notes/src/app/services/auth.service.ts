import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: AngularFireAuth){
  }
  //funcion para iniciar sesion con google - retorna una promesa en el login component
  loginWithGoogle() {
   return this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  // Funcion para cerrar seción - retorna una promesa en el home component
  logout(){
    return this.auth.signOut();
  }

}
