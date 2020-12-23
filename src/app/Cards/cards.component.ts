import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  // @HostListener('window:scroll', ['$event'])
  // onWindowScroll(e) {
  //   let element = document.querySelector('.animacao_row');
  //   if (window.pageYOffset > element.clientHeight) {
  //     element.classList.add('animate');
  //   } else {
  //     element.classList.remove('animate');
  //   }    
  // }  
}
