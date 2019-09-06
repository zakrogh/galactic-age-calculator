export class Calculator{
  constructor(age, lifeExpectancy){
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
    this.planetLifeExpectancy = this.calculateLifeExpectancy();
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
  //0 for mercury, 1 for venus, 2 for mars, 3 for jupiter
  //Math.abs is used because the floor of a negative float gives you the next lowest integer
  //  ex: Math.floor(-0.05) returns -1
  calculateLifeExpectancy(){
    let arr = [0,0,0,0];
    arr[0] = Math.floor(Math.abs((this.lifeExpectancy - this.age) / 0.24));
    arr[1] = Math.floor(Math.abs((this.lifeExpectancy - this.age) / 0.62));
    arr[2] = Math.floor(Math.abs((this.lifeExpectancy - this.age) / 1.88));
    arr[3] = Math.floor(Math.abs((this.lifeExpectancy - this.age) / 11.86));
    return arr;
  }
}
