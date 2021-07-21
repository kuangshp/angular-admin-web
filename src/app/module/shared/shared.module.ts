import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { NzFormModule } from 'ng-zorro-antd/form';

@NgModule({
  declarations: [],
  imports: [PipesModule, CommonModule, FormsModule, ReactiveFormsModule, NzFormModule],
  exports: [PipesModule, CommonModule, FormsModule, ReactiveFormsModule, NzFormModule],
})
export class SharedModule {}
