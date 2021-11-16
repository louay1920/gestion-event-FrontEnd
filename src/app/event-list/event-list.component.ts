import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Evenement } from '../evenement';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  events: Evenement[];
  ville : string;

  constructor(private eventservice : EventService, private router : Router) { }

  ngOnInit(): void {
    this.getEvents();
  
  }


  private getEvents()
  {

    this.eventservice.getEventsList().subscribe( data => {
      this.events = data;
      console.log(data);
    });

      
  }

  createInscription(id : number)
  {
    this.router.navigate(['inscription', id]);

  }

  createComment(id : number)
  {
    this.router.navigate(['commentaire', id]);
  }

  createEvaluation(id : number)
  {
    this.router.navigate(['evaluation', id]);
  }

  Search()
  {
    if (this.ville != "")
    {
      this.events= this.events.filter(res=>{
        return res.ville.toLocaleLowerCase().match(this.ville.toLocaleLowerCase());
      });
    }
    else if (this.ville =="")
    {
      this.ngOnInit();
    }
  }

}
