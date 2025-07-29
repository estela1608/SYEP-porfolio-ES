console.log("hello world");

let chicken =123;

console.log(typeof chicken);

console.log(10+"eggs");
console.log(10 + 8 + "eggs");
console.log("eggs"+ 10 +8);

console.log(26< 12);
//both conditions Need to be true 
console.log(7>3)&&(10>8);
//Only one condition must be tru
console.log (10>3)||(5>10);

//if the statement is logical or not 
console.log(!5>3);


const hour = new Date ().gethourse();
let greetinhg = "";

if (hour<12){
  gretting = "good morning";
}else if (hour<18){
    greeting="good afternoon"
}else{
    greeting = "good evening"; 
}

document.getElementById("creating").innertext = greeting;