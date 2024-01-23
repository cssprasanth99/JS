function add() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var add = parseInt(num1) + parseInt(num2);
    alert(add);
}
function substract() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var substract = num1 - num2;
    alert(substract);
}
function multiply() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var multiply = num1 * num2;
    alert(multiply);
}
function divide() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var divide = num1 / num2;
    alert(divide);
}