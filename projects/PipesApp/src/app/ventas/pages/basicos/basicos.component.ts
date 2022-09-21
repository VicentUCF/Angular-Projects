import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {
  nombreLower = 'vicent';
  nombreUpper = 'VICENT';
  nombreTitle = 'ViCeNt';

  fecha: Date = new Date(); // Fecha actual
}
