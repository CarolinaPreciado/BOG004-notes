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
    console.log(this.editNoteId);
    this.getInformation();
  }
  getInformation() {
    this.firestoreService.getNotes().subscribe((data) => {
      return (this.listNotes = data);
    });
  }

  //Función para cerrar sesión con el evento click
  signOut() {
    const result = confirm('Para cerrar sesión, oprime Aceptar');
    if (!result) {
      return;
    }
    this.authService.logout().then(() => {
      this.router.navigate(['']);
    });
  }
  //Funcion para cambiar a la vista de crear una nueva nota
  newNote() {
    this.router.navigate(['newNotes']);
  }
  //Funcion para eliminar una nota
  async onClickDelete(note: Note) {
    const result = confirm('¿Estás seguro de borrar la nota?');
    if (!result) {
      return;
    }
    const response = await this.firestoreService.deleteNotes(note);
    console.log(response);
  }
  //Funcion para el boton de editar
  onClickEdit(note: Note) {
    this.editNoteId = note.id;
    // console.log(this.editNoteId);
    // console.log(note, 'Soy el console de Note');
    // this.sendInformationService.dispatchSendNote.emit({
    //   id: note.id,
    //   title: note.title,
    //   note: note.note,
    // });
    // this.router.navigate(['editNotes']);
  }
  async editNoteReceiver(note: Note) {
    note.id = this.editNoteId;
    await this.firestoreService.deleteNotes(note);
    await this.firestoreService.addNote(note);
    this.editNoteId = undefined;
  }
}
