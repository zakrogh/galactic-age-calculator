import { Calculator }from './calculator';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const displayAge = function(calc){
  let currentAge = calc.mercuryAge();
  $(".mercuryBody").text("Your age on Mercury is: " + calc.mercuryAge());
  $(".venusBody").text("Your age on Venus is: " + calc.venusAge());
  $(".marsBody").text("Your age on Mars is: " + calc.marsAge());
  $(".jupiterBody").text("Your age on Jupiter is: " + calc.jupiterAge());
  $(".output").fadeIn();
}

$(document).ready(function(){
  $(".mainform").submit(function(event){
    event.preventDefault();
    let userInput = parseInt($("#userAge").val());
    let userLife = parseInt($("#userLife").val());
    let calc = new Calculator(userInput, userLife)
    displayAge(calc);
  });
});
