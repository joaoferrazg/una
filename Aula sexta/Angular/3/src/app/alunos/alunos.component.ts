import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  nome = 'Ana';
  dataDeNascimento = '19/05/2002';
  curso = 'Tecnologia da Informação';
  semestre = '2';
  unidadeCurricular = 'Usabilidade';
  nota = '83';

  constructor() { }

  ngOnInit(): void {
  }
}