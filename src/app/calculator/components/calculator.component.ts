import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../services';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  private firstNumber: string;
  private secondNumber: string;
  private result: number;
  private mathOperator: string;

  constructor(private calculatorService: CalculatorService) { }

  ngOnInit() {
    this.clear();
  }

  clear(): void {
    this.firstNumber = '0';
    this.secondNumber = null;
    this.result = null;
    this.mathOperator = null;
  }

  addNumber(givenNumber: string): void {

    if (this.mathOperator === null) {
      this.firstNumber = this.concatNumber(this.firstNumber, givenNumber);
  	} else {
  	  this.secondNumber = this.concatNumber(this.secondNumber, givenNumber);
  	}
  }

  concatNumber(currentNumber: string, numberToConcat: string): string {

    if (currentNumber === '0' || currentNumber === null) {
  	  currentNumber = '';
  	}

  	if (numberToConcat === '.' && currentNumber === '') {
  	  return '0.';
  	}

  	if (numberToConcat === '.' && currentNumber.indexOf('.') > -1) {
  	  return currentNumber;
  	}

  	return currentNumber + numberToConcat;
  }

  setMathOperator(operation: string): void {

    if (this.mathOperator === null) {
      this.mathOperator = operation;
      return;
  	}

  	if (this.secondNumber !== null) {
  		this.result = this.calculatorService.process(parseFloat(this.firstNumber), parseFloat(this.secondNumber), this.mathOperator);
  		this.mathOperator = operation;
  		this.firstNumber = this.result.toString();
  		this.secondNumber = null;
  		this.result = null;
  	}
  }

  calculate(): void {

    if (this.secondNumber === null) {
  		return;
  	}

  	this.result = this.calculatorService.process(parseFloat(this.firstNumber), parseFloat(this.secondNumber), this.mathOperator);
  }

  get display(): string {

    if (this.result !== null) {
  		return this.result.toString();
    }
  	if (this.secondNumber !== null) {
  		return this.secondNumber;
    }
    return this.firstNumber;
  }
}
