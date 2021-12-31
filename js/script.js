//Set bill
const bill = document.querySelector('[name="bill"]');
let billValue;

//Get the bill value the users set when the key is up
bill.addEventListener('keyup', () => {
    billValue = bill.value;
});



//Button tips + Input tip
const btnTip = document.querySelectorAll('.select-tip__btn');
const inputTip = document.querySelector('[name="select-tip__input"]');                                                                                                   
let selectedTip;

//Check which button is pressed to activate the styles and set the tip percentage
btnTip.forEach((button)=>{
    button.addEventListener('click', ()=>{
        switch(button){
            case btnTip[0]:
                button.classList.add('active-btn');
                btnTip[1].classList.remove('active-btn');
                btnTip[2].classList.remove('active-btn');
                btnTip[3].classList.remove('active-btn');                   
                btnTip[4].classList.remove('active-btn');
                inputTip.value = null;
                inputTip.classList.remove('active-input-tip');
                selectedTip = 5;
                break;
            case btnTip[1]:                                   
                button.classList.add('active-btn');
                btnTip[0].classList.remove('active-btn');
                btnTip[2].classList.remove('active-btn');
                btnTip[3].classList.remove('active-btn');
                btnTip[4].classList.remove('active-btn');
                inputTip.value = null;
                inputTip.classList.remove('active-input-tip');
                selectedTip = 10;
                break;
            case btnTip[2]:
                button.classList.add('active-btn');
                btnTip[1].classList.remove('active-btn');
                btnTip[0].classList.remove('active-btn');
                btnTip[3].classList.remove('active-btn');
                btnTip[4].classList.remove('active-btn');
                inputTip.value = null;
                inputTip.classList.remove('active-input-tip');
                selectedTip = 15;
                break;
            case btnTip[3]:
                button.classList.add('active-btn');
                btnTip[1].classList.remove('active-btn');
                btnTip[2].classList.remove('active-btn');
                btnTip[0].classList.remove('active-btn');
                btnTip[4].classList.remove('active-btn');
                inputTip.value = null;
                inputTip.classList.remove('active-input-tip');
                selectedTip = 25;
                break;
            case btnTip[4]:
                button.classList.add('active-btn');
                btnTip[1].classList.remove('active-btn');
                btnTip[2].classList.remove('active-btn');
                btnTip[3].classList.remove('active-btn');
                btnTip[0].classList.remove('active-btn');
                inputTip.value = null;
                inputTip.classList.remove('active-input-tip');
                selectedTip = 50;
                break;
        }
        //Calcul of the totals when the button is pressed
        tipTotalFunction();
    });
    
});

//check if and which value is set in the custom input for tip percentage
inputTip.addEventListener('keyup', () =>{
    if(inputTip.value >= 0 && inputTip.value <= 100){
        selectedTip = inputTip.value;
    }else if(inputTip.value < 0){
        inputTip.value = 0;
        selectedTip = 0;
    }else if(inputTip.value > 200){
        inputTip.value = 200;
        selectedTip = 200;
    }
    inputTip.classList.add('active-input-tip');
    btnTip.forEach((button)=>{
        button.classList.remove('active-btn');
    });

    //Calcul of the totals when the key is up
    tipTotalFunction();
});



//Number of people
const numberOfPeople = document.querySelector('[name="number-of-people"]');
const numberOfPeopleError = document.querySelector('.error');
let numberOfPeopleValue;

//Check what number of people is written and if it's equal or less to 0 or null than we display the error message
numberOfPeople.addEventListener('keyup', () => {
    if(numberOfPeople.value == 0 || numberOfPeople == null || numberOfPeople.value < 0){
        numberOfPeople.classList.add('active-error-input');
        numberOfPeopleError.classList.add('active-error-text');
    }else{
        numberOfPeople.classList.remove('active-error-input');
        numberOfPeopleError.classList.remove('active-error-text');
    }

    if(numberOfPeople.value > 0 && numberOfPeople.value <= 100){
        numberOfPeopleValue = numberOfPeople.value;
    }else if(numberOfPeople.value < 0){
        numberOfPeople.value = 0;
    }else if(numberOfPeople.value > 100){
        numberOfPeople.value = 100;
    }

    //Calcul of the totals when the key is up
    tipTotalFunction();
});

//When the user arrive on the website
//Check what number of people is written and if it's equal or less to 0 or null than we display the error message
if(numberOfPeople.value == 0 || numberOfPeople == null || numberOfPeople.value < 0){
    numberOfPeople.classList.add('active-error-input');
    numberOfPeopleError.classList.add('active-error-text');
}else{
    numberOfPeople.classList.remove('active-error-input');
    numberOfPeopleError.classList.remove('active-error-text');
}



//Get the places in HTML to display our totals
const tipValueHTML = document.querySelector('.tip__value');
const totalValueHTML = document.querySelector('.total__value');

//Function to calcul the tips/person and total/person
//Rounded to display prices with 2 decimals
const tipTotalFunction = function(){
    let tipValue = Math.round((((selectedTip / 100) * billValue) / numberOfPeopleValue) * 100) / 100;
    tipValueHTML.innerHTML = "$"+tipValue.toString();
    let totalValue =  Math.round(((billValue / numberOfPeopleValue) + tipValue) * 100) / 100;
    totalValueHTML.innerHTML = "$"+totalValue.toString();
};



//Reset button
const resetButton = document.querySelector('.reset__btn');

//When the button is pressed we set everything to no data except tip and total value.
//They are set to 0
resetButton.addEventListener('click', ()=>{
    resetButton.disabled = true;
    billValue = null;
    bill.value = "";
    selectedTip = null;
    numberOfPeopleValue = null;
    numberOfPeople.value = "";
    btnTip.forEach((button)=>{
        button.classList.remove('active-btn');
    });
    inputTip.classList.remove('active-input-tip');
    inputTip.value = "";
    tipValue = 0;
    tipValueHTML.innerHTML = "$"+tipValue.toString();
    totalValue = 0;
    totalValueHTML.innerHTML = "$"+totalValue.toString();
});

//When the user write the bill the reset button is enabled
document.addEventListener('keyup', () => {
    resetButton.disabled = false;
});