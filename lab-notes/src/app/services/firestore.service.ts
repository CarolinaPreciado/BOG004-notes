import { Injectable } from '@angular/core';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import Note from '../interface/notes.interface';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: Firestore) { }
    addNote(note: Note){
    const noteCollection = collection(this.firestore, 'notes');
      return addDoc(noteCollection, note);
  }
}

