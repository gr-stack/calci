
function add() 
{
    let num1 = Number(document.getElementById('1st number').value)
    let num2 = Number(document.getElementById('2nd number').value)
    let num3 = num1 + num2
    alert("addition is:" + num3)
}

function sub() 
{
    let num1 = Number(document.getElementById('1st number').value)
    let num2 = Number(document.getElementById('2nd number').value)
    let num3 = num1 - num2
    alert("Subtraction is:" + num3)
}

function multi() 
{
    let num1 = Number(document.getElementById('1st number').value)
    let num2 = Number(document.getElementById('2nd number').value)  
    let num3 = num1 * num2
 
   alert("Multiplication is:" + num3)
}

function div() 
{
    let num1 = Number(document.getElementById('1st number').value)
    let num2 = Number(document.getElementById('2nd number').value)
    let num3 = num1 / num2
    alert("Division is:" + num3)
}

function Factorial() 
{
    let num1 = Number(document.getElementById('1st number').value);
    if (num1 < 0) {
        return "Undefined"; 
    }
    let ans = 1;
    for (let i = 2; i <= num1; i++) { 
        ans *= i;
    }
    alert("Factorial is: " + ans); 
}

function square() 
{
    let num1 = Number(document.getElementById('1st number').value)
    let num3 = num1 * num1
    alert("Square is:" + num3)
}


function Qube() 
{
    let num1 = Number(document.getElementById('1st number').value)
    let num3 = num1 * num1* num1
    alert("Qube is:" + num3)
}

function Root() 
{
    let num1 = Number(document.getElementById('1st number').value)
    let num3 = Math.sqrt(num1).toString();
    alert("Root  is:" + num3)
} 

function Parcantage() 
{
    let num1 = Number(document.getElementById('1st number').value)
    let num2 = Number(document.getElementById('2nd number').value)
    let num3 = num1 / num2 * 100
    alert("Division is:" + num3 +'%')
}

function AC() 
{
    document.getElementById('1st number').value = ''; 
    document.getElementById('2nd number').value = ''; 
}