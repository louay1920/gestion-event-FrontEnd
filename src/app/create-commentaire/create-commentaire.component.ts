import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Commentaire } from '../commentaire';
import { CommentaireService } from '../commentaire.service';
import { Evenement } from '../evenement';
import { EventService } from '../event.service';

@Component({
  selector: 'app-create-commentaire',
  templateUrl: './create-commentaire.component.html',
  styleUrls: ['./create-commentaire.component.css']
})
export class CreateCommentaireComponent implements OnInit {

  commentaire : Commentaire = new Commentaire();
  id : number;
  evenement : Evenement = new Evenement();

  constructor(private eventService : EventService, private commentService : CommentaireService, 
    private route : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.eventService.getEventById(this.id).subscribe( data =>{
      this.evenement= data;
      //console.log(this.evenement);
    }

    );
    console.log('ngOnInit')
  }

  saveComment()
  {
    this.commentService.createComment(this.commentaire).subscribe(data =>{
      console.log("saaave");
      console.log(data);
      this.goToEventList();
    });
  }

  goToEventList()
  {
    this.router.navigate(['events']);
    
  }



  onSubmit()
  {
    console.log('fi west l onSubmit()')
    this.commentaire.evenement = this.evenement;
    console.log(this.commentaire);
    this.saveComment();

  }

}
