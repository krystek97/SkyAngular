import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  workoutsList: Array<string> = [] ;
  workoutsaveList: Array<string> = [] ;
  add(workout: string) {
    this.workoutsList.push(workout) ;
  }
  remove(workout: string) {
    this.workoutsList = this.workoutsList.filter(e => e !== workout) ;
  }
  save(workout: string) {
    this.workoutsaveList.push(workout) ;
    this.remove(workout) ;
  }
}



