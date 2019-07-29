import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
	{ 
		path: '',
		component: HomeComponent
	},
	{
		path: 'alunos',
		loadChildren: () => import('./modules/aluno/aluno.module').then(mod => mod.AlunoModule)
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
