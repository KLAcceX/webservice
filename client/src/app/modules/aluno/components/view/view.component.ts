import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlunoService } from '../../service/aluno.service';
import { Aluno } from '../../model/aluno.model';

@Component({
	selector: 'app-view',
	templateUrl: './view.component.html',
	styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

	aluno: Aluno;

	constructor(private route: ActivatedRoute, private alunoService: AlunoService) { }

	ngOnInit() {
		const alunoObservable = this.alunoService.getAlunos();

		let ra: string = this.route.snapshot.params.ra;
		if(ra){
			alunoObservable.subscribe((dadosAlunos: Aluno[]) => {
  				dadosAlunos.forEach((aluno: Aluno) => {
  					if (aluno.ra == ra) { 
  						this.aluno = aluno;
  					}
  				});
  			});
		}
	}

}
