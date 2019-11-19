import { TestBed, inject } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    expect(TestBed.get(CalculatorService)).toBeTruthy();
  });

  it('must sum two numbers', inject([CalculatorService], (service: CalculatorService) => {
      expect(service.process(10, 20, CalculatorService.SUM)).toEqual(30);
    })
  );

  it('must subtract two numbers', inject([CalculatorService], (service: CalculatorService) => {
      expect(service.process(15, 10, CalculatorService.MINUS)).toEqual(5);
    })
  );

  it('must multiplicate two numbers', inject([CalculatorService], (service: CalculatorService) => {
      expect(service.process(10, 10, CalculatorService.TIMES)).toEqual(100);
    })
  );

  it('must divide two numbers', inject([CalculatorService], (service: CalculatorService) => {
      expect(service.process(10, 5, CalculatorService.DIVISION)).toEqual(2);
    })
  );

  it('must return zero when setting invalid math operators', inject([CalculatorService], (service: CalculatorService) => {
      expect(service.process(10, 10, '%')).toEqual(0);
    })
  );

  it('must process only once', inject([CalculatorService], (service: CalculatorService) => {
      spyOn(service, 'process');
      service.process(10, 20, '+');
      expect(service.process).toHaveBeenCalledTimes(1);
    })
  );
});
