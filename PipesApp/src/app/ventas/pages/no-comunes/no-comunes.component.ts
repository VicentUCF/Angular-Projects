import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent {
  //i18nSelect
  persona1: Persona = {
    nombre: 'vicent',
    genero: Genero.masculino
  };

  persona2: Persona = {
    nombre: 'Sara',
    genero: Genero.femenino
  };

  invitacionMap = {
    masculino: 'invitarlo',
    femenino: 'invitarla'
  };

  //i18nPlural
  clientes: Persona[] = [
    this.persona1,
    this.persona2,
    {
      nombre: 'Juan',
      genero: Genero.masculino
    },
    {
      nombre: 'Maria',
      genero: Genero.femenino
    },
    {
      nombre: 'Pedro',
      genero: Genero.masculino
    },
    {
      nombre: 'Ana',
      genero: Genero.femenino
    }
  ];

  clientesPluralMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    other: 'tenemos # clientes esperando'
  };

  //Key Value Pipe

  cliente: Persona = this.persona1;

  //Async Pipe
  miObservable = interval(1000);

  valorPromesa = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('Promesa Resuelta');
    }, 2000);
  });

  cambiarCliente() {
    if (this.cliente === this.persona1) {
      this.cliente = this.persona2;
    } else {
      this.cliente = this.persona1;
    }
  }

  borrarCliente() {
    this.clientes.splice(0, 1);
  }

  addCliente() {
    this.clientes.push(this.persona1);
  }

  clientesToString(): Array<string> {
    return this.clientes.map((c) => c.nombre);
  }
}

interface Persona {
  nombre: string;
  genero: Genero;
}

enum Genero {
  masculino = 'masculino',
  femenino = 'femenino'
}
