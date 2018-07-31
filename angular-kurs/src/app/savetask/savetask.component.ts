import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-savetask',
  templateUrl: './savetask.component.html',
  styleUrls: ['./savetask.component.css']
})
export class SavetaskComponent implements OnInit {

  @Input()
  workoutsaveList: Array<string> = [] ;
  constructor() { }

  ngOnInit() {
  }

}
