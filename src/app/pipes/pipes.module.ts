import { NgModule } from '@angular/core';
import { FormatDatePipe } from './date/format-date/format-date.pipe';
import { FormNowPipe } from './date/form-now/form-now.pipe';
import { NumberToCurrencyPipe } from './currency/number-to-currency.pipe';

const pipeList = [
  FormatDatePipe,
  FormNowPipe,
  NumberToCurrencyPipe,
]

@NgModule({
  declarations: [
    ...pipeList,
  ],
  imports: [],
  exports: [
    ...pipeList,
  ]
})
export class PipesModule {
  // static forRoot() {
  //   return {
  //     ngModule: PipesModule,
  //     providers: [],
  //   }
  // }
}
