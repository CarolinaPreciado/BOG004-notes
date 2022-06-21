import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService, private route: Router) { }
  ngOnInit(): void {
  }
  //Funcion para iniciar sesion con el evento click (se resuelve la promesa de la funcion creada en el authService)
lWithGoogle(){
  this.authService.loginWithGoogle().then(res=> {
    console.log(res);
    // if(res){
    this.route.navigate(['home'])
    // }
   })
}
}
