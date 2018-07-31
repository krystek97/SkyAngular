import { Component, OnInit } from '@angular/core';

@Component
({
  selector: 'app-sky',
  templateUrl: './sky.component.html',
  styleUrls: ['./sky.component.css']
})
export class SkyComponent {
  inputText = 'Wpisz tekst' ;
  maxLength = 6 ;
  LogoUrl = '' ;
  colorClass = 'color' ;
  constructor() {

  }
}
