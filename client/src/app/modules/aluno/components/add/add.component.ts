import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AlunoService } from '../../service/aluno.service';
import { Aluno } from '../../model/aluno.model';

@Component({
  selector: 'app-aluno-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

	public alunoForm: FormGroup;
	public aluno: Aluno;

	constructor(private route: ActivatedRoute, private alunoService: AlunoService) {
	}

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

		if(!this.aluno){
			this.aluno = new Aluno();
		}

		this.alunoForm = new FormGroup({
			nome: new FormControl(this.aluno.nome, [Validators.required]),
			sexo: new FormControl(this.aluno.sexo, [Validators.required]),
			dataNascimento: new FormControl(this.aluno.dataNascimento, [Validators.required])
		});
	}

	submit() {
		console.log(this.alunoForm.value);
		alert("O aluno foi cadastrado!");
		this.alunoForm.reset();
	}

};