import { Component, OnInit , Output , EventEmitter } from '@angular/core';
@Component({
  selector: 'app-addworkout',
  templateUrl: './addworkout.component.html',
  styleUrls: ['./addworkout.component.css']
})
export class AddworkoutComponent implements OnInit {

  newWorkout: string ;
  @Output()
  emitWorkout = new EventEmitter<string>() ;
  add() {
    this.emitWorkout.emit(this.newWorkout) ;
    this.newWorkout = '' ;
  }

  constructor() { }

  ngOnInit() {
  }

}
