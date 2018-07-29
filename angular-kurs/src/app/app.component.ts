import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-kurs';
  colorClass = 'color2' ;
  logoUrl = 'http://www.drewnianyteatrzyk.pl/environment/cache/images/500_500_productGfx_5408d3e5a551a0e08d115f05a1ff71c6.jpg' ;
  MaxLength = 6 ;
  value = 'Wpisz Tekst' ;
  imageClass = 'angularimage' ;

  change() {
    this.value = 'Wpisales tekst' ;
    this.logoUrl = 'https://cygnus.org.pl/wp-content/uploads/2016/12/swan-water-bird-nature-water-57431.jpeg' ;
  }
}


