import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { SendInformationService } from 'src/app/services/send-information.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  listNotes:any;

  constructor(private authService: AuthService, private router: Router, private sendInformationService :SendInformationService, private firestoreService: FirestoreService) { }

  ngOnInit(): void {
    this.getInformation();
  }
  getInformation(){
    this.firestoreService.getNotes().subscribe(data => {
      return this.listNotes = data;
    })
  }

  //Función para cerrar sesión
  signOut(){
    this.authService
    .logout()
     .then(() => {
      window.alert('Para cerrar sesión, oprime Aceptar');
     this.router.navigate([''])
     })
  }
  //Funcion para cambiar a la vista de crear una nueva nota
  newNote(){
    this.router.navigate(['newNotes'])
  }
}
