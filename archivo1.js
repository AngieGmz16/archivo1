

console.log("Cual es el primer numero");
    var num1 = prompt();
console.log("Cual es el segundo numero");
    var num2 = prompt();
        

function max(){
    if(num1>num2) {
    console.log("El valor maximo es:" + num1);
    } 
    else if (num1<num2) {
    console.log("El valor maximo es:" + num2);
    } 
    else if (num1===num2) {
        console.log("Los numeros son iguales");
    }
}

max()
