import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AlunoRoutingModule } from './aluno-routing.module';

import { AddComponent } from './components/add/add.component';
import { ListComponent } from './components/list/list.component';
import { ViewComponent } from './components/view/view.component';

import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [ViewComponent, AddComponent, ListComponent, ViewComponent ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AlunoRoutingModule,
    DirectivesModule
  ]
})
export class AlunoModule { }
