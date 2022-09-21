import { Component, OnInit } from '@angular/core';
import { Heroe, Color } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent {
  enMayusucla = true;
  orderBy = '';

  heroes: Heroe[] = [
    {
      nombre: 'Aquaman',
      vuela: false,
      color: Color.blue
    },
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.red
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.yellow
    },
    {
      nombre: 'Flash',
      vuela: true,
      color: Color.red
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.green
    }
  ];

  changeMayusucla() {
    this.enMayusucla = !this.enMayusucla;
  }

  changeOrderTo(orderBy: string) {
    this.orderBy = orderBy;
  }
}
