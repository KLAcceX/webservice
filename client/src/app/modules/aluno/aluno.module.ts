import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayComponent } from './components/display/display.component';
import { AddComponent } from './components/add/add.component';
import { IndexComponent } from './components/index/index.component';



@NgModule({
  declarations: [DisplayComponent, AddComponent, IndexComponent],
  imports: [
    CommonModule
  ]
})
export class AlunoModule { }
