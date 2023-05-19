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

let num = ''
let operador = ''
let arrayNum = []
let result = 0

function addVisor(value) {
     visor.value += value
     num += value
     
    
    console.log("funcionando");
    // console.log('esse é o valor ' + value +' esse é o num '+ num )
};


function expoente(valor) {
    switch(valor){
        case '+':
            visor.value += "+";
            operador = "+";
            arrayNum.push(num);
            result += Number(num)
            num = '';
            break;
        case '-':
            visor.value += "-"
            operador = "-" ;
            arrayNum.push(num);
            result -= Number(arrayNum);
            num = ''; 
            break;
        case '*':
            visor.value += "*"
            operador = "*"
            break;
        case '/':
            visor.value += "/"
            operador = "/"
            break;
        default:
            console.log('Algo deu errado')
            break;    
    }
    
    console.log(result);
    
    // visor.value += "+"
    // operador = "+"
    
}

function resultado(){
    arrayNum.push(num)

    switch(operador){
        case '+':
            result += Number(num)
            visor.value += `=${result}`
            break;
        case '-':
            result -= Number(num)
            visor.value += `=${result}`
            break;
        // case '*':
        //     visor.value += `=${Number(num1) * Number(num2)}`
        //     break;
        // case '/':
        //     visor.value += `=${Number(num1) / Number(num2)}`
        //     break;
        default:
            console.log('Algo deu errado')
            break;     
    }

    // if(operador){
    //     console.log(Number(num1) + Number(num2))
    //     visor.value += `=${Number(num1) + Number(num2)}`
    // }
    

    console.log(result, arrayNum)
}

function limpar(){
    result = 0
    num = ''
    arrayNum = []
    operador = ''
    visor.value = ''
}