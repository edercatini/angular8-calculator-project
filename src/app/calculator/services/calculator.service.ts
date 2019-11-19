import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  static readonly SUM: string = '+';

  static readonly MINUS: string = '-';

  static readonly TIMES: string = '*';

  static readonly DIVISION: string = '/';

  constructor() { }

  process(firstNumber: number, secondNumber: number, mathOperator: string): number {
    let result: number;

    switch (mathOperator) {
      case CalculatorService.SUM:
        result = firstNumber + secondNumber;
        break;
      case CalculatorService.MINUS:
        result = firstNumber - secondNumber;
        break;
      case CalculatorService.TIMES:
        result = firstNumber * secondNumber;
        break;
      case CalculatorService.DIVISION:
        result = firstNumber / secondNumber;
        break;
      default:
        result = 0;
    }

    return result;
  }
}
