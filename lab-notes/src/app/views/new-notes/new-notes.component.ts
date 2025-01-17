import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Note from 'src/app/interface/notes.interface';
import { FirestoreService } from 'src/app/services/firestore.service';
import { SendInformationService } from 'src/app/services/send-information.service';

@Component({
  selector: 'app-new-notes',
  templateUrl: './new-notes.component.html',
  styleUrls: ['./new-notes.component.scss'],
})
export class NewNotesComponent implements OnInit {
  formNotes: FormGroup;
  showNotes: Note[];

  constructor(
    private firestoreService: FirestoreService,
    public formBuilder: FormBuilder,
    private sendInformationService: SendInformationService,
    private router: Router
  ) {
    this.formNotes = this.formBuilder.group({
      title: [''],
      note: [''],
    });
    this.showNotes = [
      {
        title: '',
        note: '',
      },
    ];
  }
  ngOnInit(): void {
    this.formNotes;
    this.getNewNotes();
  }
  async onSubmit() {
    const response = await this.firestoreService.addNote(this.formNotes.value);
  }
  returnView() {
    this.router.navigate(['home']);
  }
  //funcion para guardar las notas - evento click del new notes component
  saveNote() {
    this.onSubmit();
    this.formNotes.reset();
    this.router.navigate(['home']);
  }
  //Obtener nuevas notas
  getNewNotes() {
    this.firestoreService.getNotes().subscribe((notes) => {
      this.showNotes = notes;
      this.sendNotes();
    });
  }
  sendNotes() {
    this.sendInformationService.dispatchSendInformation.emit({
      data: this.showNotes,
    });
  }
}
