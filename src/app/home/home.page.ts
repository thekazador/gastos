import { Component } from '@angular/core';
import anime from 'animejs/lib/anime.es';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private count = 0;

  constructor() {}

  animar() {
    this.count += 100;
    anime({
      targets: '.anima-me',
      easing: 'easeOutBounce',
      /*
      translateX: [
        {value: this.count, duration: 2000},
        {value: 0, duration: 2000}
      ],
      */
      rotate: [
        {value: '180deg', duration: 0},
        {value: '360deg', duration: 2000},
        {value: '180deg', duration: 2000}
      ],
      /*
      backgroundColor: [
        {value: '#ff00ff', duration: 2000},
        {value: '#e8b77b', duration: 2000}
      ],
      */
      scale: [
        {value: '0', duration: 0},
        {value: '1', duration: 2000},
        {value: '0', duration: 2000}
      ],
      duration: 2000
    });
  }
}
