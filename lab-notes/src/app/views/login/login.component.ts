import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = {
    email: '',
    password: ''
  }
  constructor(private authService: AuthService, private route: Router) { }
  ngOnInit(): void {
  }
lWithGoogle(){
  const { email, password } = this.user;
  this.authService.loginWithGoogle(email,password).then(res => {
    this.changeView();
  })
}
changeView(){
  this.route.navigate(['home'])
}

}
