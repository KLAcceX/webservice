import mongoose, { Schema } from 'mongoose'
import { IPessoaFisica } from '../model/interface/pessoaModel'
import { desformatar, formatarCpf, validarCpf } from '../util/index'

export interface IProfessor extends IPessoaFisica {
	rp: number
}

const ProfessorSchema: Schema = new Schema({
	nome: { type: String, required: 'Informe o Nome' },
	email: { type: String, required: 'Informe o E-mail' },
	telefone: { type: Number, required: 'Informe o Telefone' },
	cnpj: { type: Number, required: 'Informe o CNPJ' },
	dtCriacao: { type: Date, required: 'Informe a Data de Criacao' },
	rp: { type: Number, required: 'Informe o RP' },
})

ProfessorSchema.methods.formatar = formatarCpf
ProfessorSchema.methods.desformatar = desformatar
ProfessorSchema.methods.validar = validarCpf

export default mongoose.model<IProfessor>('Professor', ProfessorSchema, 'professor')