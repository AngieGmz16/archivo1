console.log("Cual es el primer numero");
    var num1 = prompt();
console.log("Cual es el segundo numero");
    var num2 = prompt();
console.log("Cual es el tercer numero");
    var num3 = prompt();

function max(){
    if(num1>num2) {
    console.log("El valor maximo es:" + num1);
    } 
    else if (num2>num3) {
    console.log("El valor maximo es:" + num2);
    } 
    else if (num2<num3) {
    console.log("El valor maximo es:" + num3);
    } 
    else if (num1<num3) {
    console.log("El valor maximo es:" + num3);
    } 
    else if (num3<num2) {
    console.log("El valor maximo es:" + num2);
    } 
    else if (num2<num1) {
    console.log("El valor maximo es:" + num1);
    } 
    else if (num1===num2) {
        console.log("Los numeros son iguales");
    }
   else if (num2===num3) {
        console.log("Los numeros son iguales");
    }
   else if (num3===num1) {
        console.log("Los numeros son iguales");
    }
}

max()
