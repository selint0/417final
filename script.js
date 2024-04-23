"use strict";
// ------------------------------------------------------
// Light/Dark Mode Function
// ------------------------------------------------------
function lightDark(){
    document.querySelector("body").classList.toggle("dark");
    document.querySelector("#contact form").classList.toggle("dark");
    document.querySelector("#sun svg").classList.toggle("dark");
    document.querySelector("#moon svg").classList.toggle("dark");
}
// event listener for light/dark mode
document.querySelector('#theme-switch').addEventListener("click", lightDark);
// ------------------------------------------------------
// Product Switcher :)
// ------------------------------------------------------
let prod1 = document.querySelector("section #product1");
let prod2 = document.querySelector("section #product2");
let prod3 = document.querySelector("section #product3");
function prodOne(){
    prod1.classList.add("currentItem");
    prod1.classList.remove("hiddenItem");
    prod2.classList.add("hiddenItem");
    prod2.classList.remove("currentItem");
    prod3.classList.add("hiddenItem");
    prod3.classList.remove("currentItem");
}
function prodTwo(){
    prod1.classList.remove("currentItem");
    prod1.classList.add("hiddenItem");
    prod2.classList.remove("hiddenItem");
    prod2.classList.add("currentItem");
    prod3.classList.add("hiddenItem");
    prod3.classList.remove("currentItem");
}
function prodThree(){
    prod1.classList.add("hiddenItem");
    prod1.classList.remove("currentItem");
    prod2.classList.add("hiddenItem");
    prod2.classList.remove("currentItem");
    prod3.classList.remove("hiddenItem");
    prod3.classList.add("currentItem");
}
// EVENT HANDLERS
document.querySelector('#btn1').addEventListener("click", prodOne);
document.querySelector('#btn2').addEventListener("click", prodTwo);
document.querySelector('#btn3').addEventListener("click", prodThree);

// ------------------------------------------------------
// Guessing Game Function
// ------------------------------------------------------


function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
 }
function game(e){
    // called on form submission, this will need to prevent default form submission so that it can be used for the game instead
    e.preventDefault();
    let userInput = parseFloat(document.getElementById("numGuess").value);
    document.getElementById("user").innerHTML = "Your Guess: " + userInput;
    // generate the random number between 1 and 10
    let randomNumber = getRandomNumber(1, 10);
    document.getElementById("answer").innerHTML = "Correct Number: " + randomNumber;
    let gameMessage = document.getElementById("gameOutput");

    // is the input blank? They can't play the game if they didn't enter a number!
    if(!(userInput)){
        gameMessage.innerHTML = "Enter a number to play";
    }else   if(randomNumber === userInput){
        gameMessage.innerHTML = "You guessed right! You win!";
      }else{
        gameMessage.innerHTML = "You lose. Try Again.";
      }
}
// ------------------------------------------------------
// EVENT HANDLERS
// ------------------------------------------------------
document.getElementById("guessGame").addEventListener("click", game);


// ------------------------------------------------------
// VALIDATION FUNCTION
// ------------------------------------------------------
function validateForm(event){
    
    event.preventDefault();

    let uName = document.getElementById("fName");
    let email = document.getElementById("email");
    let phone = document.getElementById("number");
    let fieldset = document.querySelector("fieldset");
    let contactPhone = document.getElementById("prefPhone");
    let contactEmail = document.getElementById("prefEmail");
    let messages = document.getElementById("message");
    let confirm = document.getElementById("confirm");

    confirm.classList.add("hiddenItem");

    // the regular expressions
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
    let phoneRegex = /^\d{10}$/;

    // reset the border styles on the inputs
    uName.classList.remove("error");
    email.classList.remove("error");
    phone.classList.remove("error");
    messages.classList.remove("error");

    // hide any previous error messages/empty output containers
    uName.nextElementSibling.classList.add("hiddenItem");
    email.nextElementSibling.classList.add("hiddenItem");
    phone.nextElementSibling.classList.add("hiddenItem");
    confirm.innerHTML = "";

    // boolean to track whether or not the form is valid
    let isValid = true;

    // begin validation of inputs
    // ensure that username matches pattern, give feedback to user if not
    if(!(uName.value)){
        // change our boolean flag because the form is not valid
        isValid = false;
        // add error class to input
        uName.classList.add("error");
        // display error message for user about this input
        uName.nextElementSibling.classList.remove("hiddenItem");
    }
    if(!(messages.value)){
        // change our boolean flag because the form is not valid
        isValid = false;
        // add error class to input
        messages.classList.add("error");
        // display error message for user about this input
        messages.nextElementSibling.classList.remove("hiddenItem");
    }

    if(contactPhone.checked && !(phoneRegex.test(phone.value))){
        // change our boolean flag because the form is not valid
        isValid = false;
        phone.classList.add("error");
        // display error message for user about this input
        phone.nextElementSibling.classList.remove("hiddenItem");
      }else if(contactEmail.checked && !(emailRegex.test(email.value))){
        // change our boolean flag because the form is not valid
        isValid = false;
        email.classList.add("error");
        // display error message for user about this input
        email.nextElementSibling.classList.remove("hiddenItem");
    }

    // if the form is valid, submit it after displaying the user's info to them and clearing the form for new input
    if(isValid){
        // remove the hidden class from the output paragraph
        confirm.classList.remove("hiddenItem");
        
        // display the user's input to them in the paragraph for output
        confirm.innerHTML = "<strong>You Entered:<br></strong> Name: " + uName.value + "<br>Email: " + email.value + "<br>Phone: " + phone.value + "<br>Email: " + email.value + "<br>Comments: " + messages.value;
        
        // You'd also add the code to actually submit to the server here in cases where you have a server to connect to - we are not including that in this activity but an example is below. Remember that the submit event happens to the form itself, not any input!
        document.getElementById("contactUs").submit();

        // reset values of inputs/clear them out
        uName.value = "";
        email.value = "";
        phone.value = "";
        messages.value = "";
        contactPhone.checked = true;
        contactEmail.checked = false;

        // clear out/hide any error messages
        uName.nextElementSibling.classList.add("hiddenItem");
        email.nextElementSibling.classList.add("hiddenItem");
        phone.nextElementSibling.classList.add("hiddenItem");
        messages.nextElementSibling.classList.add("hiddenItem");
    }
}
// ------------------------------------------------------
// EVENT HANDLERS
// ------------------------------------------------------
document.getElementById("contactUs").addEventListener("submit", validateForm);