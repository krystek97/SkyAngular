import { Component, OnInit , Output , EventEmitter } from '@angular/core';
@Component({
  selector: 'app-addworkout',
  templateUrl: './addworkout.component.html',
  styleUrls: ['./addworkout.component.css']
})
export class AddworkoutComponent implements OnInit {

  newWorkout: string ;
  series: number ;
  @Output()
  emitWorkout = new EventEmitter<string>() ;
  add(series: number) {
    this.emitWorkout.emit(this.newWorkout) ;
    this.newWorkout = '' ;
    this.series = series * 6 ;
    console.log(series) ;
  }

  constructor() { }

  ngOnInit() {
  }

}
