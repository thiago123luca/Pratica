const visor = document.getElementById("visor")

const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btnAdd = document.getElementById("btnAdd")


// btn1.addEventListener('click', function() {
//     visor.value += '1';
//   });

//   btn2.addEventListener('click', function() {
//     visor.value += '2';
//     console.log("funcionando")
//   });

let num1 = ''
let operador = undefined
let num2 = ''

function addVisor(value) {

    visor.value += value

    if(!operador){
        num1 += value
    }else{
        num2 += value
    }

    console.log("funcionando");
};

function soma() {
    
    console.log(visor.value);
    
    visor.value += "+"
    operador = "+"
}

function resultado(){

    if(operador = "+"){
        console.log(Number(num1) + Number(num2))
        visor.value += `=${Number(num1) + Number(num2)}`
    }
    

    console.log(num1, operador, num2)
}