interface IAluno {
	nome: String;
	ra: String;
	sexo: String;
	idade: Number;
	dataNascimento: Date;
}

export class Aluno implements IAluno {
	public nome: String;
	public ra: String;
	public sexo: String;
	public idade: Number;
	public dataNascimento: Date;

	constructor()
	constructor(aluno?: IAluno)
	constructor(aluno?: any) {
		this.nome = aluno ? aluno.nome : '';
		this.ra = aluno ? aluno.ra : '';
		this.sexo = aluno ? aluno.sexo : '';
		this.idade = aluno ?aluno.idade : 0;
		this.dataNascimento = aluno ? aluno.dataNascimento : new Date();
	}
}