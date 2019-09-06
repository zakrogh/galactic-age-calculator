import { Calculator } from './../src/calculator.js';
describe('Calculator'), function (){
  let calculator;
  beforeEach(function(){
    calculator = new Calculator(50);
  });
  it('test if a persons age appears correctly'), function(){
    expect(calculator.age).toEqual(50);
  }
  it('test if a persons age on Mercury appears correctly'), function(){
    //dostuff
  }
  it('test if a persons age on Venus appears correctly'), function(){
    //dostuff
  }
  it('test if a persons age on Mars appears correctly'), function(){
    //dostuff
  }
  it('test if a persons age on Jupiter appears correctly'), function(){
    //dostuff
  }
}
