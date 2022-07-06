import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  Firestore,
  doc,
  deleteDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import Note from '../interface/notes.interface';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(private firestore: Firestore) {}
  addNote(note: Note) {
    const noteCollection = collection(this.firestore, 'notes');
    return addDoc(noteCollection, note);
  }
  getNotes(): Observable<Note[]> {
    const noteCollection = collection(this.firestore, 'notes');
    return collectionData(noteCollection, { idField: 'id' }) as Observable<
      Note[]
    >;
  }
  //funcion para eliminar una nota - se resuelve en el home component
  deleteNotes(note: Note) {
    const noteDocCollection = doc(this.firestore, `notes/${note.id}`);
    return deleteDoc(noteDocCollection);
  }
}
