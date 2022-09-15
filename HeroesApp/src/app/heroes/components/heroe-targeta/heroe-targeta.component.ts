import { Component, Input, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroe-targeta',
  templateUrl: './heroe-targeta.component.html',
  styleUrls: ['./heroe-targeta.component.css']
})
export class HeroeTargetaComponent implements OnInit {
  @Input() heroe!: Heroe;

  ngOnInit(): void {
    if (!this.heroe) {
      throw new Error('No se ha definido el heroe');
    }
  }
}
