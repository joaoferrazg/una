import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  titulo = 'Aluno';
  notaCorteAprovacao = 70;
  notaCorteReprovacao = 40;
}