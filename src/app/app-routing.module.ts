import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCommentaireComponent } from './create-commentaire/create-commentaire.component';
import { CreateEvaluationComponent } from './create-evaluation/create-evaluation.component';
import { CreateInscriptionComponent } from './create-inscription/create-inscription.component';
import { EventListComponent } from './event-list/event-list.component';
import { TypeComponent } from './type/type.component';

const routes: Routes = [
  { path : 'type', component: TypeComponent },
  {path: 'events', component: EventListComponent},
  { path: '', redirectTo: 'events', pathMatch: 'full'},
  { path : 'inscription/:id', component: CreateInscriptionComponent },
  { path : 'commentaire/:id', component: CreateCommentaireComponent },
  { path : 'evaluation/:id', component: CreateEvaluationComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
