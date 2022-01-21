//import validator from './validator.js';

//console.log(validator);

document.querySelector('.form-number-card').oninput = () =>{
    document.querySelector('.card-number-box').innerText = document.querySelector('.form-number-card').value;
}

document.querySelector('.form-name-card').oninput = () =>{
    document.querySelector('.card-holder-name').innerText = document.querySelector('.form-name-card').value;
}

document.querySelector('.month-input').oninput = () =>{
    document.querySelector('.exp-month').innerText = document.querySelector('.month-input').value;
}

document.querySelector('.year-input').oninput = () =>{
    document.querySelector('.exp-year').innerText = document.querySelector('.year-input').value;
}

document.querySelector('.cvv-card').onmouseenter = () =>{
    document.querySelector('.front-card').style.transform = 'perspective(1000px) rotateY(-180deg)';
    document.querySelector('.back-card').style.transform = 'perspective(1000px) rotateY(0deg)';
}

document.querySelector('.cvv-card').onmouseleave = () =>{
    document.querySelector('.front-card').style.transform = 'perspective(1000px) rotateY(0deg)';
    document.querySelector('.back-card').style.transform = 'perspective(1000px) rotateY(180deg)';
}

document.querySelector('.cvv-card').oninput = () =>{
    document.querySelector('.cvv-box').innerText = document.querySelector('.cvv-card').value;
}








const numberCardElement = document.getElementById('number-card')
const nameCardElement = document.getElementById('name-card')
const validationtButton = document.getElementById('validation-btn')
const numberElement = document.getElementById('number')
const nameElement = document.getElementById('name')
const messageValidationElement = document.getElementById('message-validation')


validationtButton.addEventListener('click', validationCard)

var number;
var name;
var t = 16;
var card = [t];
var sum=0;
var sum1=0;
var sum2=0;



function validationCard(){
  number = numberCardElement.value;
  localStorage.setItem('number', number)
 // numberElement.innerText = localStorage.getItem('number');

  name = nameCardElement.value;
  localStorage.setItem('name', name)
  //nameElement.innerText = localStorage.getItem('name');
  algorithmLuhn ();
};

// 4137894711755904
function algorithmLuhn (){

  for(let i=0; i < number.length; i++){
      card[i]=number[i] - 0;
  }

for(let i = t -1; i >= 0; i--){
  var p;
  var num = card[i];
  console.log(num);
  if(i % 2 == 0){
      p=num*2;
      if(p > 9){
          p=p-9;
          sum1=sum1+p;
      }
      else{
          sum1=sum1+p;

      }
  }
  else{
      p=num;
      sum2=sum2+p
  }
}

sum=sum1+sum2;
console.log("la suma es: " + sum)
if(sum % 10 == 0){
    console.log("Tajeta valida");
    messageValidationElement.innerText = "Tarjeta Valida"
    messageValidationElement.classList.add('correct')


}
else{
    console.log("Tajeta invalida");
    messageValidationElement.innerText = "Tarjeta inValida"
    messageValidationElement.classList.add('wrong')
}

}

















