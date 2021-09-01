import {EventEmitter, Injectable} from "@angular/core";
import {LogService} from "../shared/log.service";

@Injectable()
export class CursosService {

  emitirCursoCriado = new EventEmitter<string>();
  static criouNovoComponent = new EventEmitter<string>();
  private cursos: string[] = ["Angular 2", "Java", "Kotlin"];

  constructor(private logService : LogService) {
    console.log("Servico instanciado");
  }

  getCursos() {
    this.logService.consoleLog("Obtendo Lista de Cursos")
    return this.cursos;
  }

  addCursos(nomeCurso: string) {
    this.logService.consoleLog(`Criando um curso: ${nomeCurso}`)
    this.cursos.push(nomeCurso);
    this.emitirCursoCriado.emit(nomeCurso);
    CursosService.criouNovoComponent.emit(nomeCurso);
  }
}
