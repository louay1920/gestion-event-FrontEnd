import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Evaluation } from '../evaluation';
import { EvaluationService } from '../evaluation.service';
import { Evenement } from '../evenement';
import { EventService } from '../event.service';

@Component({
  selector: 'app-create-evaluation',
  templateUrl: './create-evaluation.component.html',
  styleUrls: ['./create-evaluation.component.css']
})
export class CreateEvaluationComponent implements OnInit {

  evaluation : Evaluation = new Evaluation();
  id : number;
  evenement : Evenement = new Evenement();

  constructor(private eventService : EventService, private evaluationService : EvaluationService, 
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

  saveEvaluation()
  {
    this.evaluationService.CreateEvaluation(this.evaluation).subscribe(data =>{
      console.log("saaave eval");
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
    this.evaluation.evenement = this.evenement;
    console.log(this.evaluation);
    console.log('fi west l onSubmit()');
    this.saveEvaluation();
  }

}
