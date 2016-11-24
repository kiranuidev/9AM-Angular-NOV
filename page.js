 var firstNumber = document.getElementById("firstNumber");
 var secondNumber = document.getElementById("secondNumber");
 var result = document.getElementById("result");


function addNumbers() {
      result.value = add( parseInt(firstNumber.value),parseInt(secondNumber.value));
}

function multiplyNumbers() {
    result.value = multiply( parseInt(firstNumber.value),parseInt(secondNumber.value));
}