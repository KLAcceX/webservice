import  { Document } from 'mongoose'

export default class Pessoa {
	nome: string
	email: string
	telefone: number


	constructor(
		nome: string,
		email: string,
		telefone: number)
	{
		this.nome = nome
		this.email = email
		this.telefone = telefone
	}
}

export interface IPessoa extends Pessoa, Document {
	formatar(): string;
	desformatar(): string;
	validar(): boolean;
}

export interface IPessoaFisica extends IPessoa {
	cpf: number
	dtNascimento: Date
}

export interface IPessoaJuridica extends Pessoa, Document {
	cnpj: number
	dtCriacao: Date
}