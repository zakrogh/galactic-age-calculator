import { Calculator } from './../src/calculator.js';
describe('Calculator', function (){
  let calculator;
  beforeEach(function(){
    calculator = new Calculator(50, 100);
  });
  it('test if a persons age appears correctly', function(){
    expect(calculator.age).toEqual(50);
  });
  it('test if a persons age on Mercury appears correctly', function(){
    expect(calculator.mercuryAge()).toEqual(208);
  });
  it('test if a persons age on Venus appears correctly', function(){
    expect(calculator.venusAge()).toEqual(80);
  });
  it('test if a persons age on Mars appears correctly', function(){
    expect(calculator.marsAge()).toEqual(26);
  });
  it('test if a persons age on Jupiter appears correctly', function(){
    expect(calculator.jupiterAge()).toEqual(4);
  });
  it('test if a persons age appears correctly', function(){
    expect(calculator.lifeExpectancy).toEqual(100);
  });
  it('test if a persons life expectancy on Mercury appears correctly', function(){
    expect(calculator.planetLifeExpectancy[0]).toEqual(208);
  });
  it('test if a persons life expectancy on Venus appears correctly', function(){
    expect(calculator.planetLifeExpectancy[1]).toEqual(80);
  });
  it('test if a persons life expectancy on Mars appears correctly', function(){
    expect(calculator.planetLifeExpectancy[2]).toEqual(26);
  });
  it('test if a persons life expectancy on Jupiter appears correctly', function(){
    expect(calculator.planetLifeExpectancy[3]).toEqual(4);
  });
});
