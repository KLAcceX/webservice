import mongoose, { Schema } from 'mongoose'
import { IPessoaFisica } from '../model/interface/pessoaModel'
import { desformatar, formatarCpf, validarCpf } from '../util/index'

export interface IAluno extends IPessoaFisica {
	ra: number
}

const AlunoSchema: Schema = new Schema({
	nome: { type: String, required: 'Informe o Nome' },
	email: { type: String, required: 'Informe o E-mail' },
	telefone: { type: Number, required: 'Informe o Telefone' },
	cpf: { type: Number, required: 'Informe o CPF' },
	dtNascimento: { type: Date, required: 'Informe a Data de Nascimento' },
	ra: { type: Number, required: 'Informe o RA' },
})

AlunoSchema.methods.formatar = formatarCpf
AlunoSchema.methods.desformatar = desformatar
AlunoSchema.methods.validar = validarCpf

export default mongoose.model<IAluno>('Aluno', AlunoSchema, 'aluno')