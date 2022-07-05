import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FirestoreService } from 'src/app/services/firestore.service';
import { SendInformationService } from 'src/app/services/send-information.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  @Input() title: string = '';
  @Input() note: string = '';
  public formNotes: FormGroup;
  selectNote: any;
  allN: any;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private sendInformation: SendInformationService,
    private firestoreService: FirestoreService
  ) {
    console.log(this.title, 'titulo****');
    console.log(this.note, 'nota*****');
    this.formNotes = this.formBuilder.group({
      title: this.title,
      note: this.note,
    });
    // this.sendInformation.dispatchSendNote.subscribe((data) => {
    //   this.selectNote = data;
    //   console.log(data, '**************');
    //   this.formNotes.setValue({
    //     title: data.title,
    //     note: data.note,
    //   });
    // console.log(this.selectNote, 'SELECTNOTE**************');
    // });
  }
  ngOnInit(): void {
    // this.allNotes();
    // this.getNoteForEdit();
    // console.log(this.getNoteForEdit(), 'Esta es la funcion de getNoteForEdit');
  }
  returnView() {
    this.router.navigate(['home']);
  }
  editNote() {
    // TODO guardar info nueva en firebase
    this.router.navigate(['home']);
  }
  getNoteForEdit() {}
  allNotes() {
    this.firestoreService
      .getNotes()
      .pipe(take(1))
      .subscribe((data) => {
        // console.log((this.allN = data), 'Estas son las notas allN');
      });
  }
}
