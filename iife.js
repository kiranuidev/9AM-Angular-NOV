(function () {
    var firstNumber = document.getElementById("firstNumber");
    var secondNumber = document.getElementById("secondNumber");
    var result = document.getElementById("result");
    //buttons
    var addButton = document.getElementById("btnAdd");
    var mulButton = document.getElementById("btnMultiply");

    addButton.addEventListener("click", addNumbers);
    mulButton.addEventListener("click", multiplyNumbers);

    addButton.addEventListener("mouseover", changeColor);
    firstNumber.addEventListener("mouseover", changeColor);
    firstNumber.addEventListener("mouseout", changeGreen);

    function changeColor() {
        this.style.backgroundColor = "red";
    }
    function changeGreen(){
         this.style.backgroundColor = "Green";
    }

    function add(first, second) {
        return first + second;
    }

    function multiply(first, second) {
        return first * second;
    }

    function addNumbers() {
        result.value = add(parseInt(firstNumber.value), parseInt(secondNumber.value));
    }

    function multiplyNumbers() {
        result.value = multiply(parseInt(firstNumber.value), parseInt(secondNumber.value));
    }



})
();
