import {AlunoController} from '../controller/alunoController'

export class Routes {
	public alunoController: AlunoController = new AlunoController()

	public routes(app:any): void {

		app.route('/aluno')
			.get(this.alunoController.getAll)
			.post(this.alunoController.add)

		app.route('/aluno/:alunoId')
			.get(this.alunoController.get)
			.put(this.alunoController.update)
			.delete(this.alunoController.delete)
	}
}