const reviews = [
{
     id: 1,
     name:'susan smith',
     img: '#'
     text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
  }

{
     id: 2,
     name:'Anna smith',
     img: '#'
     text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
  }

  {
     id: 3,
     name:'peter smith',
     img: '#'
     text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'
  }
];

 const ing=document.getElementById('person-ing');
const author=document.getElementById('author');
const job=document.getElementById('job');
const info=document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentItem = 0;
window.addEventListener("DOMContentLoaded" , function (){
 const item = revoiews[currentItem];
 img.src = item.ing;
 author.textcontent= item.name;
 job.textcontent= item.job;
 info.textcontent= item.text;
});

 function shoePerson(person){
    const item = reviews[person];
    img.src = item.ing;
    author.textcontent= item.name;
    job.textcontent= item.job;
    info.textcontent= item.text;
 }

nextBtn.addEventListener('click',function(){

   currentItem++;
   if (currentItem > reviews.length -1){
     currentItem =  0;  
    }
showPerson(currentItem);
});
 prevBtn.addEventListener('click', function(){
currentItem--;
 if ( currentItem<0){
     currentItem = review.length -1;
    }
  showPerson(currentItem);
 });


















// console. log ("Hello World");
# style2.css U
// let chicken = 123;
// console. log (chicken);
// console. log (typeof chicken)
// console. 10g(10 + " eggs");
// console. log (10 + 8 + " eggs");
// console. log("eggs "+ 10 + 8)
// console. log (8<3)
// //Both Conditions Need to be true
// console. 10g (7>3)&&(10>8);
// //Only one need condition must be true
// console. 1og (10>3) || (5>10);
// //If the statement is logical or not
// console. 10g(15>3);
// const hour = new Date() getHours();
// let greeting = ';
// if (hour>12){
1/
greeting= "good morning! *";
// Jelse if (hour<18){
//
gretting="good afternoon! *";
// Jelset
//
gretting="good evening! *";
// 3