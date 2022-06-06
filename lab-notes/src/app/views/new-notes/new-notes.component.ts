import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FirestoreService } from 'src/app/services/firestore.service';



@Component({
  selector: 'app-new-notes',
  templateUrl: './new-notes.component.html',
  styleUrls: ['./new-notes.component.scss']
})
export class NewNotesComponent implements OnInit {

  formNotes: FormGroup;

  constructor(private firestoreService: FirestoreService, public formBuilder: FormBuilder) {
    this.formNotes = this.formBuilder.group({
      title : [''],
      note : [''],
    })
  }
  ngOnInit(): void {
    this.formNotes;
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
