import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Alunos';
  name = 'Ana';
  birthDate = '19/05/2002';
  course = 'Tecnologia da Informação';
  semester = '4';
  uc = 'Usabilidade'
}
