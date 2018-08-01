import { Component, OnInit , Input, Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todoworkout',
  templateUrl: './todoworkout.component.html',
  styleUrls: ['./todoworkout.component.css']
})
export class TodoworkoutComponent {
  @Input()
  workoutsList = [] ;
  constructor() {    }
  @Output() emitSave = new EventEmitter<string>() ;
  @Output() emitRemove = new EventEmitter<string>() ;

  remove(workout: string) {
    this.emitRemove.emit(workout) ;
  }

  save(workout: string) {
    this.emitSave.emit(workout) ;
  }

  getColor(): string {
    return this.workoutsList.length  >= 2 ? 'red' : 'green'; }
}
