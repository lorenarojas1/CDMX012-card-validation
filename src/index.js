import validator from './validator.js';

//console.log(validator);

// Declarar variables del DOM
const numberInputElement = document.querySelector(".form-number-card")
const numberBoxElement = document.querySelector(".card-number-box")

const nameInputElement = document.querySelector(".form-name-card")
const nameBoxElement = document.querySelector(".card-holder-name")

const monthInputElement = document.querySelector(".month-input")
const monthBoxElement = document.querySelector(".exp-month")

const yearInputElement = document.querySelector(".year-input")
const yearBoxElement = document.querySelector(".exp-year")

const cvvInputElement = document.querySelector(".cvv-card")
const cvvBoxElement = document.querySelector(".cvv-box")

const frontCardElement = document.querySelector(".front-card")
const backCardElement = document.querySelector(".back-card")

const validationtButton = document.querySelector(".validation-btn");
const restarttButton = document.querySelector(".restart-btn");
const messageValidationElement = document.getElementById("message-validation")

//Incicializar eventos
numberInputElement.addEventListener("input", addNumber)
nameInputElement.addEventListener("input", addName)
monthInputElement.addEventListener("input", addMonth)
yearInputElement.addEventListener("input", addYear)
cvvInputElement.addEventListener("input", addCvv)
cvvInputElement.addEventListener("mouseenter", rotate1)
cvvInputElement.addEventListener("mouseleave", rotate2)
validationtButton.addEventListener("click", validationCard);
restarttButton.addEventListener("click", clearInformation);



//Funciones para agergar datos a la tarjeta
function addNumber(){
    numberBoxElement.innerText = numberInputElement.value;
}
function addName(){
    nameBoxElement.innerText = nameInputElement.value;
}
function addMonth(){
    monthBoxElement.innerText = monthInputElement.value;
}
function addYear(){
    yearBoxElement.innerText = yearInputElement.value;
}
function addCvv(){
    cvvBoxElement.innerText = cvvInputElement.value;
}
function rotate1(){
    frontCardElement.style.transform = "perspective(1000px) rotateY(-180deg)";
    backCardElement.style.transform = "perspective(1000px) rotateY(0deg)";
}
function rotate2(){
    frontCardElement.style.transform = "perspective(1000px) rotateY(0deg)";
    backCardElement.style.transform = "perspective(1000px) rotateY(180deg)";
}

//Funcion validar tarjeta y ocultar dígitos
function validationCard() {

    if(validator.isValid (numberInputElement.value) === true){
        messageValidationElement.classList.remove('hide');
        messageValidationElement.innerText = "Tarjeta Valida";
        messageValidationElement.classList.add('correct');
    }
    else {
        messageValidationElement.classList.remove('hide');
        messageValidationElement.innerText = "Tarjeta Invalida";
        messageValidationElement.classList.add('wrong');
    }

    numberBoxElement.innerText = validator.maskify(numberInputElement.value)
    numberInputElement.value = validator.maskify(numberInputElement.value)

    cvvInputElement.value = "***"
    cvvBoxElement.innerText = "***"

    restarttButton.innerText = "Validar otra tarjeta";
    disabledButton();
}

function disabledButton() {
    validationtButton.disabled = true;
    validationtButton.classList.add('cursor-not-allowed')
}

function clearInformation(){

    //limpiar información Inputs
    numberInputElement.value ="";
    nameInputElement.value ="";
    monthInputElement.value ="month";
    yearInputElement.value ="year";
    cvvInputElement.value ="";

    //Limpiar información tarjeta (box)
    numberBoxElement.innerText = "#### - #### - #### - ####";
    nameBoxElement.innerText ="APELLIDO";
    monthBoxElement .innerText ="MM";
    yearBoxElement.innerText = "YY";
    cvvBoxElement.innerText = "";

    messageValidationElement.innerText ="";
    messageValidationElement.classList.add('hide');

    validationtButton.disabled = false;
    restarttButton.innerText = "Limpiar Datos";
}


