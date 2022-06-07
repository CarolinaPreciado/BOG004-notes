import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import Note from 'src/app/interface/notes.interface';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-new-notes',
  templateUrl: './new-notes.component.html',
  styleUrls: ['./new-notes.component.scss']
})
export class NewNotesComponent implements OnInit {

  formNotes: FormGroup;
  newNotes: Note[]

  constructor(private firestoreService: FirestoreService, public formBuilder: FormBuilder) {
    this.formNotes = this.formBuilder.group({
      title : [''],
      note : [''],
    });
    this.newNotes = [{
      title: '',
      note: '',
    }]
  }
  ngOnInit(): void {
    this.formNotes;
    this.firestoreService.getNotes().subscribe(notes => {
      this.newNotes = notes;
      console.log(this.newNotes, 'NOTAAAAAAAAAAAAS!')
    })
  }
  async onSubmit(){
    console.log(this.formNotes.value);
 const response = await this.firestoreService.addNote(this.formNotes.value);
  }
  saveNote(){
    this.onSubmit();
    this.formNotes.reset();
  }
}
