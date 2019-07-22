import Aluno from '../model/alunoModel'
import { Request, Response } from 'express'

export class AlunoController{
	
	public add (req: Request, res: Response) {
		let newAluno = new Aluno(req.body)

		newAluno.save((err: any, aluno: any) => {
			if(err){
				res.send(err)
			}
			console.log(aluno)
		})
	}

	public getAll (res: Response) {
		Aluno.find({}, (err: any, alunos: any) => {
			if(err){
				res.send(err)
			}
			console.log(alunos)
		})
	}

	public get (req: Request, res: Response) {
		Aluno.findById(req.params.alunoId, (err: any, aluno: any) => {
			if(err){
				res.send(err)
			}
			res.send(aluno)
		})
	}

	public update (req: Request, res: Response) {
		Aluno.findOneAndUpdate({ _id: req.params.alunoId }, req.body, { new: true }, (err: any, aluno: any) => {
			if(err) {
				res.send(err);
			}
			res.send(aluno);
		})
	}

	public delete (req: Request, res: Response) {
		Aluno.findByIdAndRemove({ _id: req.params.alunoId }, (err: any, aluno: any) => {
			if(err) {
				res.send(err)
			}
			res.send({ message: 'Aluno ' + aluno.nome + ' deletado!'})
		})
	}
}