import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent {
  error = '';
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  termino = '';

  constructor(private PaisService: PaisService) {}

  buscar(termino: string) {
    this.error = '';

    this.PaisService.buscarCapital(termino).subscribe((paises) => {
      if (paises.length === 0) {
        this.error = `No se encontraron paises con nombre: ${termino}`;
        this.paises = [];
      }

      this.paises = paises;
    });
  }

  buscarSugerido(termino: string) {
    this.paisesSugeridos = [];
    this.buscar(termino);
  }

  sugerencias(termino: string) {
    this.error = '';
    this.termino = termino;

    this.PaisService.buscarCapital(termino).subscribe((paises) => {
      this.paisesSugeridos = paises.splice(0, 5);
    });
  }
}
