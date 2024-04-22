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
    let userInput = document.getElementById("numGuess").value;
    document.getElementById("user").innerHTML = "Your Guess: " + userInput;
    // generate the random number between 1 and 10
    let randomNumber = getRandomNumber(1, 10);
    document.getElementById("answer").innerHTML = "Correct Number: " + randomNumber;
    let gameMessage = document.getElementById("gameOutput");

    // is the input blank? They can't play the game if they didn't enter a number!
    if(userInput = []){
        gameMessage.innerHTML = "Enter a number to play";
    }else{}
    if(userInput === randomNumber){
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

    let uName = document.getElementById("myName");
    let email = document.getElementById("myEmail");
    let phone = document.getElementById("myPhone");
    let fieldset = document.querySelector("fieldset");
    let contactPhone = document.getElementById("contactPrefp");
    let contactEmail = document.getElementById("contactPrefe");
    let messages = document.getElementById("myMessages");
    // to save contact preference type for output
    let preference = "";
    // regular expressions
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
    let phoneRegex = /^\d{10}$/;

      // reset the border styles on the inputs
    uName.classList.remove("error");
    email.classList.remove("error");
    phone.classList.remove("error");
    messages.classList.remove("error");
    
    // hide any previous error messages/empty output containers
    uName.nextElementSibling.classList.add("hidden");
    email.nextElementSibling.classList.add("hidden");
    phone.nextElementSibling.classList.add("hidden");
    confirm.innerHTML = "";

    // variable to track whether or not the form is valid
    let isValid = true;

    // begin validation of inputs
    // ensure that username matches pattern, give feedback to user if not
    if(uName.value = ""){
        // change our boolean flag because the form is not valid
        isValid = false;
        // add error class to input
        uName.classList.add("error");
        // display error message for user about this input
        uName.nextElementSibling.classList.remove("hidden");
    }

    // ensure that email address is correct/matches pattern
    if(!(emailRegex.test(email.value))){
        // change our boolean flag because the form is not valid
        isValid = false;
        // add error class to input
        email.classList.add("error");
        // display error message for user about this input
        email.nextElementSibling.classList.remove("hidden");
    }

    // ensure that the zip code is five digits only/passes regex
    if(!(phoneRegex.test(phone.value))){
        // change our boolean flag because the form is not valid
        isValid = false;
        // add error class to input
        phone.classList.add("error");
        // display error message for user about this input
        phone.nextElementSibling.classList.remove("hidden");
    }

    // determine which of the snack foods was checked, show message
    if(phone.checked){
        //set the value of our snack variable (used in string output)
        preference = "Phone";
        // show the food container to the user
        phone.classList.remove("hidden");
    }else if(email){
        //set the value of our snack variable (used in string output)
        preference = "Email";
        // show the food container to the user
        email.classList.remove("hidden");
    }

    // if the form is valid, submit it after displaying the user's info to them and clearing the form for new input
    if(isValid){
        // remove the hidden class from the output paragraph
        confirm.classList.remove("hidden");
        
        // display the user's input to them in the paragraph for output
        confirm.innerHTML = "<strong>You Entered:<br></strong> User Name: " + uName.value + "<br>Email: " + email.value + "<br>Zip Code: " + zipCode.value + "<br>Food: " + snack;
        
        // You'd also add the code to actually submit to the server here in cases where you have a server to connect to - we are not including that in this activity but an example is below. Remember that the submit event happens to the form itself, not any input!
        document.getElementById("newAcct").submit();

        // reset values of inputs/clear them out
        uName.value = "";
        email.value = "";
        zipCode.value = "";
        pizza.checked = true;
        agree.checked = false;

        // clear out/hide any error messages
        uName.nextElementSibling.classList.add("hidden");
        email.nextElementSibling.classList.add("hidden");
        zipCode.nextElementSibling.classList.add("hidden");
        food.innerHTML = "";
        agree.nextElementSibling.classList.add("hidden");
    }
    /*
	
	Create an object with blank initial values for the different properties (name, phone, email, contact preference, comments). This could also have a method to display the user's info in a well-formatted string
	
	
	clear out any past error messages
	
	create boolean to track form validity
	
	
	validate name input
	
	
	validate comments
	
	
	check to see whether user prefers to be contacted by phone or email
		if they prefer email, show that it is required in the form and validate

		if they prefer phone, show that it is required in the form and validate
	
	check to see if the form is still valid
	if it is, add the user's info to the object and display the information from the object to the page
	
	Clear/reset the form

*/
}
// ------------------------------------------------------
// EVENT HANDLERS
// ------------------------------------------------------
document.getElementById("contactUs").addEventListener("submit", validateForm);