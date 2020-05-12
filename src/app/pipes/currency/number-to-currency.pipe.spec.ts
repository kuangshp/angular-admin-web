import { NumberToCurrencyPipe } from './number-to-currency.pipe';

describe('NumberToCurrencyPipe', () => {
  it('create an instance', () => {
    const pipe = new NumberToCurrencyPipe();
    expect(pipe).toBeTruthy();
  });
});
