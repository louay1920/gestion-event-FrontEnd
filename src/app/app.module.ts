import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import{ HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventListComponent } from './event-list/event-list.component';
import { TypeComponent } from './type/type.component';
import { CreateCommentaireComponent } from './create-commentaire/create-commentaire.component';
import { CreateInscriptionComponent } from './create-inscription/create-inscription.component';
import { FormsModule } from '@angular/forms';
import { CreateCommentComponent } from './create-comment/create-comment.component';
import { CreateEvaluationComponent } from './create-evaluation/create-evaluation.component';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    TypeComponent,
    CreateCommentaireComponent,
    CreateInscriptionComponent,
    CreateCommentComponent,
    CreateEvaluationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
