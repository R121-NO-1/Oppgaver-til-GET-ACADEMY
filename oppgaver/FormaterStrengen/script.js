document.addEventListener('DOMContentLoaded', function () {     // Get input from user with the help of prompt, and equating the prompt as a variable also loading the document to be ready for JS

    var inputElement = prompt("Enter a text:"); //prompt recieved from user

    // Call the formatting below function and update the HTML in inputElement
    formatStringAndDisplay(inputElement);
});

function formatStringAndDisplay(input) {
    // if string starts with a letter (will always start with a letter) then display it with the first letter being a singular capital letter
    if (/^[a-zA-Z]/.test(input)) {
        // Capitalize the first letter in the variable "input"
        var formattedString = input.charAt(0).toUpperCase() + input.slice(1);
        
        // Update the HTML element with the formatted string
        document.getElementById('output').innerHTML = formattedString;
    } else {
        // If the string doesn't start with a letter, display a message
        document.getElementById('output').innerHTML = "The string must start with a letter.";
    }
}
