import { Calculator }from './calculator';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const displayAge = function(calc){
  $(".mercuryBody").text("Your age on Mercury is: " + calc.mercuryAge());
  $(".venusBody").text("Your age on Venus is: " + calc.venusAge());
  $(".marsBody").text("Your age on Mars is: " + calc.marsAge());
  $(".jupiterBody").text("Your age on Jupiter is: " + calc.jupiterAge());
}
const displayLifeExpectancy = function(calc){
  let text = "Your remaining life expectancy on ";
  if(calc.age > calc.lifeExpectancy){
    text = "The number of years you have surpassed your life expectancy on "
  }
  $(".mercuryLifeBody").text(text + "Mercury is: " + calc.planetLifeExpectancy[0] + " Mercury years");
  $(".venusLifeBody").text(text + "Venus is: " + calc.planetLifeExpectancy[1] + " Venus years");
  $(".marsLifeBody").text(text + "Mars is: " + calc.planetLifeExpectancy[2] + " Mars years");
  $(".jupiterLifeBody").text(text + "Jupiter is: " + calc.planetLifeExpectancy[3] + " Jupiter years");
}

$(document).ready(function(){
  $(".mainform").submit(function(event){
    event.preventDefault();
    let userInput = parseInt($("#userAge").val());
    let userLife = parseInt($("#userLife").val());
    let calc = new Calculator(userInput, userLife)
    displayAge(calc);
    displayLifeExpectancy(calc);
    $(".output").fadeIn();
  });
});
