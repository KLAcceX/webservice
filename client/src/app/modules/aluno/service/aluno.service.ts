import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Aluno } from '../model/aluno.model';

@Injectable({
	providedIn: 'root'
})
export class AlunoService {

	//Base de dados para teste do front
	private alunos: Aluno[] = [
		new Aluno({nome: 'Aluno Um', ra: 'A00001', sexo: 'Masculino', idade: 19, dataNascimento: new Date('2000/01/01')}),
		new Aluno({nome: 'Aluno Dois', ra: 'B00002', sexo: 'Feminino', idade: 18, dataNascimento: new Date('2000/02/02')}),
		new Aluno({nome: 'Aluno Três', ra: 'C00003', sexo: 'Masculino', idade: 17, dataNascimento: new Date('2000/03/03')})
	];

		constructor() { }

		public getAlunos(): any {
			//Alterar para requisição REST
			const alunosObservable = new Observable(observer => {
				setTimeout(() => {
					observer.next(this.alunos);
				}, 1000);
			});

			return alunosObservable;
		}
}
