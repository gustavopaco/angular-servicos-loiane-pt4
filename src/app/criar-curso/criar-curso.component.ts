import {Component, OnInit} from '@angular/core';
import {CursosService} from "../cursos/cursos.service";

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.scss'],
  providers : [CursosService] /* Note: Caso queria uma instancia de Servico para cada Component */
})
export class CriarCursoComponent implements OnInit {

  cursosEmitidos: string[] = [];

  constructor(private cursosService: CursosService) { }

  ngOnInit(): void {
    this.cursosEmitidos = this.cursosService.getCursos();
  }

  onAddCurso(value: string) {
    this.cursosService.addCursos(value);
  }
}
