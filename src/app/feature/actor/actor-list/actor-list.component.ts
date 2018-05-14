import { Component, OnInit } from '@angular/core';
import { ActorService } from '../../../service/actor.service';
import { Actor } from '../../../model/actor';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent implements OnInit {
  
  actors: Actor[];
  title: String = "List of All Actors";
  

  constructor(private actorSvc: ActorService) { }

  ngOnInit() {
    this.actorSvc.list().subscribe(actorsList => {
                                  this.actors = actorsList;
      console.log("this.actors = ", this.actors);
      }
    );
    
  }

}
