import { NgModule } from '@angular/core';
import { FormatDatePipe } from './date/format-date/format-date.pipe';
import { FormNowPipe } from './date/form-now/form-now.pipe';

const pipeList = [FormatDatePipe, FormNowPipe];

@NgModule({
  declarations: [...pipeList],
  imports: [],
  exports: [...pipeList],
})
export class PipesModule {}
