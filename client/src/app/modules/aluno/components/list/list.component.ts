import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../../service/aluno.service';
import { Aluno } from '../../model/aluno.model';

@Component({
  selector: 'app-aluno-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

	public alunos: Aluno[] = [];

  	constructor(private alunoService: AlunoService) { }

  	ngOnInit() {
  		const alunoObservable = this.alunoService.getAlunos();
  		alunoObservable.subscribe((dadosAlunos: Aluno[]) => {
  			this.alunos = dadosAlunos;
  		})
  	}

}
