import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { HomeComponent } from './views/home/home.component';
import { NewNotesComponent } from './views/new-notes/new-notes.component';
import { AngularFireModule } from '@angular/fire/compat';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './views/home/edit/edit.component';

// import { AngularFireModule } from '@angular/fire';

// const firebaseConfig = {
//   apiKey: "AIzaSyCiQfbLDkCZtbPSixu_gVQ-P5v09r9wi1A",
//   authDomain: "lab-notes--grafito.firebaseapp.com",
//   projectId: "lab-notes--grafito",
//   storageBucket: "lab-notes--grafito.appspot.com",
//   messagingSenderId: "25437571709",
//   appId: "1:25437571709:web:f3b98066796cd9103b7f14"
// };

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NewNotesComponent,
    EditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirestore(() => getFirestore()),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
