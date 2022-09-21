import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent {
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];

  regionActiva = '';

  paises: Country[] = [];

  activarRegion(region: string) {
    if (this.regionActiva === region) {
      return;
    }
    this.regionActiva = region;
    this.paises = [];
    this.getPaisesPorRegion(region);
  }

  getCssClass(region: string) {
    return this.regionActiva === region
      ? 'btn btn-primary ms-2'
      : 'btn btn-outline-primary ms-2';
  }

  getPaisesPorRegion(region: string) {
    this.PaisService.buscarPaisPorRegion(region).subscribe((paises) => {
      console.log(paises);
      this.paises = paises;
    });
  }

  constructor(private PaisService: PaisService) {}
}
