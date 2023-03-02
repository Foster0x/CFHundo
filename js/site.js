//Get the values from the page
//Start or controller function
function getValues() {

    //get values from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    //validate the input
    //parse into integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        //call generateNumbers
        let numbers = generateNumbers(startValue, endValue);
        //call displayNumbers
        displayNumbers(numbers);
    } else {
        alert("You must enter integers!");
    }

}

//Generate numbers from the start value to the end value
//Logic function(s)
function generateNumbers(sValue, eValue) {

    let numbers = [];

    //get all numbers from start to end
    for (let index = sValue; index <= eValue; index++) {

        //this will execute in a loop until index = eValue
        numbers.push(index);
        
    }

    return numbers;
}

//Display the numbers and mark the even ones bold
//Display or view functions
function displayNumbers(numbers) {

    let templateRows = "";
    for (let index = 0; index < numbers.length; index++) {

        let number = numbers[index];
        templateRows += `<tr><td>${number}</td></tr>`;
        
    }

    document.getElementById("results").innerHTML = templateRows;

}