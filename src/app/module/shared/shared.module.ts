import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  declarations: [],
  imports: [PipesModule, CommonModule, FormsModule, ReactiveFormsModule],
  exports: [PipesModule, CommonModule, FormsModule, ReactiveFormsModule],
})
export class SharedModule {}
