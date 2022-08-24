var forUndefined
if (( forUndefined===undefined)) {            
alert("Yes\nYes\nYESSSSS!!!!");
}
else
{
    alert("no\nno\nNOOOOO!!!!");
}
    /* Using to condition to strictly check the datatype */


var newVar="String is the data type";
console.log(newVar);
newVar=69;
console.log("After changing the variable type from string to integer ",newVar);
typeof newVar;
    //Changing a variable from string type to integer type

var firstNumber=20;
var secondNumber=10;
console.log("Subtraction",firstNumber-secondNumber);
console.log("Addition",firstNumber+secondNumber);
console.log("Multiplication",firstNumber*secondNumber);
console.log("Division",firstNumber/secondNumber);
console.log("Modulus",firstNumber%secondNumber);
console.log("Power",firstNumber**secondNumber);
       
    // Applying all the arithmetic Operations


firstNumber+=5;
console.log(firstNumber);
    // Effecient way of performing arithmatic operation on a number 


var thirdNumber=15-2+6/7**3;
console.log("BODMAS",thirdNumber);
    // Applying BODMAS rule 


var newNumber=2;
var secondNewNumber=++newNumber;
console.log("PREFIX INCREMENT OPERATOR ",secondNewNumber,newNumber);
secondNewNumber=--newNumber;
console.log("Prefix Decrement Operator", secondNewNumber,newNumber);
secondNewNumber=newNumber++;
console.log("Postfix increment operator",secondNewNumber,newNumber);
secondNewNumber=newNumber--;
console.log("Postfix Decrement Operator",secondNewNumber,newNumber);

    /* Applying prefix increment and decrement 
    Applying postfix increment and decrement*/


var con="BLOCK";
var cat="CHAIN";
var tination=con+cat;
console.log(tination);
    // String concatination 