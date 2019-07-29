import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './components/list/list.component';
import { AddComponent } from './components/add/add.component';
import { ViewComponent } from './components/view/view.component';

const routes: Routes = [
	{
		path: '',
		component: ListComponent
	},
	{
		path: 'add',
		component: AddComponent,
	},
	{
		path: 'add/:ra',
		component: AddComponent,
		data: {
			ra: 'RA'
		}
	},
	{
		path: 'view/:ra',
		component: ViewComponent,
		data: {
			ra: 'RA'
		}
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunoRoutingModule { }
