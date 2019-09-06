export class Calculator{
  constructor(age, lifeExpectancy){
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
  }
  earthAge(){
    return this.age;
  }
  mercuryAge(){
    return Math.floor(this.age / 0.24);
  }
  venusAge(){
    return Math.floor(this.age / 0.62);
  }
  marsAge(){
    return Math.floor(this.age / 1.88);
  }
  jupiterAge(){
    return Math.floor(this.age / 11.86);
  }
}
