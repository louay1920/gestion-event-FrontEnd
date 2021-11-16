import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Evenement } from '../evenement';
import { EventService } from '../event.service';
import { Inscription } from '../inscription';
import { InscriptionServiceService } from '../inscription-service.service';

@Component({
  selector: 'app-create-inscription',
  templateUrl: './create-inscription.component.html',
  styleUrls: ['./create-inscription.component.css']
})
export class CreateInscriptionComponent implements OnInit {
  
  inscription : Inscription = new Inscription();
  id : number;
  evenement : Evenement = new Evenement();
  constructor( private eventservive : EventService, private inscriptionService : InscriptionServiceService, private route : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {

    this.id= this.route.snapshot.params['id'];
    this.eventservive.getEventById(this.id).subscribe( data =>{
      this.evenement= data;
      //console.log(this.evenement);
    }

    );
    console.log('ngOnInit')
    //console.log(this.evenement);
  }

  saveInscription()
  {
    this.inscriptionService.createInscription(this.inscription).subscribe(data =>{
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
    this.inscription.evenement= this.evenement;
    console.log(this.inscription);
    //console.log(this.inscription.evenement);
    this.saveInscription();
  }



}

