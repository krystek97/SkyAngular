import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() workouts = ['Wyciskanie na klate' , 'Podciaganie na drazku' , 'Wioslowanie sztanga'] ;

  constructor() { }

  ngOnInit() {
  }

}
