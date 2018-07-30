import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  book = 'Wpisz nazwe ksiazki' ;
  pages = 'Wpisz ilosc stron' ;
  saveK(event) {
    this.book = event.target.value ; }
  saveP(event) {
    this.pages = event.target.value ; }
}


