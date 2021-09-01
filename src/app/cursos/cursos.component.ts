import {Component, OnInit} from '@angular/core';
import {CursosService} from "./cursos.service";

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'],
  providers: [CursosService]  /* Note: Caso queria uma instancia de Servico para cada Component */
})
export class CursosComponent implements OnInit {

  cursosComponentes : string[] = [];

  constructor(private cursosService : CursosService) {

  }

  ngOnInit(): void {
    console.info("Cursos OnInit" +  this.cursosComponentes)
    this.cursosComponentes = this.cursosService.getCursos();

    CursosService.criouNovoComponent.subscribe(response => this.cursosComponentes.push(response))
  }

}
