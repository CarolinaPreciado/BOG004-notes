import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Note from 'src/app/interface/notes.interface';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { SendInformationService } from 'src/app/services/send-information.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  listNotes: any;
  editNoteId: any;

  constructor(
    private authService: AuthService,
    private router: Router,
    private sendInformationService: SendInformationService,
    private firestoreService: FirestoreService
  ) {}

  ngOnInit(): void {
    this.getInformation();
  }
  getInformation() {
    this.firestoreService.getNotes().subscribe((data) => {
      return (this.listNotes = data);
    });
  }

  //Función para cerrar sesión con el evento click
  signOut() {
    this.authService.logout().then(() => {
      window.alert('Para cerrar sesión, oprime Aceptar');
      this.router.navigate(['']);
    });
  }
  //Funcion para cambiar a la vista de crear una nueva nota
  newNote() {
    this.router.navigate(['newNotes']);
  }
  //Funcion para eliminar una nota
  async onClickDelete(note: Note) {
    window.alert('¿Estás seguro de borrar la nota?');
    const response = await this.firestoreService.deleteNotes(note);
    console.log(response);
  }
  //Funcion para el boton de editar
  onClickEdit(note: Note) {
    this.editNoteId = note.id;
    // console.log(note, 'Soy el console de Note')
    // this.sendInformationService.dispatchSendNote.emit({
    //   id: note.id,
    //   title: note.title,
    //   note: note.note,
    // });
    // this.router.navigate(['editNotes']);
  }
}
