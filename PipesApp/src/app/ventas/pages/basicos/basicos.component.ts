import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent{

  nombreLower: string = 'vicent';
  nombreUpper: string = 'VICENT';
  nombreTitle: string = 'ViCeNt';

  fecha: Date = new Date(); // Fecha actual

}
