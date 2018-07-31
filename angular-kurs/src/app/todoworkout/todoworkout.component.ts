import { Component, OnInit ,Input, Output ,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todoworkout',
  templateUrl: './todoworkout.component.html',
  styleUrls: ['./todoworkout.component.css']
})
export class TodoworkoutComponent implements OnInit {
  @Input()
  workoutsList = [] ;
  constructor() { }
  @Output() emitSave = new EventEmitter<string>() ;
  @Output() emitRemove = new EventEmitter<string>() ;
  ngOnInit() {
  }

  remove(workout: string) {
    this.emitRemove.emit(workout) ;
  }

  save(workout: string) {
    this.emitSave.emit(workout) ;
  }

}
