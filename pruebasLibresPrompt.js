const prompt = require('prompt-sync')();



function calcularPromedio(num1, num2, num3){
resultado=(num1+num2+num3)/3;
return resultado;
}


console.log('El promedio es '+calcularPromedio(3,9,19));