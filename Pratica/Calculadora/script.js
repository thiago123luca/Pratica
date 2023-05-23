const visor = document.getElementById("visor")
const historico = document.getElementById("historico") 
const calculadora = document.getElementById("calculadora")
const body = document.getElementById("body")
const button = document.getElementsByTagName("button")


let num = ''
let calc = ''




function formatarNumero(numero) {
    return numero.toLocaleString('pt-BR');
}
    
// function formatarNumeroOriginal(numeroFormatado) {
//     var numeroSemPonto = numeroFormatado.replace(/\./g, '');
//     return parseFloat(numeroSemPonto.replace(',', '.'));
// }
  

// console.log(formatarNumero(Number(num)))


function addVisor(value) {

     visor.value += value
     calc += value
     num += value

    console.log("funcionando");
    // console.log('esse é o valor ' + value +' esse é o num '+ num )
};

console.log(calc)

function expoente(valor) {
   

    switch(valor){
        case '+':
            visor.value = formatarNumero(Number(eval(calc))) + "+";
            historico.value += formatarNumero(Number(eval(num))) + "+"
            calc = eval(calc)
            calc += "+"
            num = '';
            break;
        case '-':
            visor.value = formatarNumero(Number(eval(calc))) + "-";
            historico.value += formatarNumero(Number(eval(num))) + "-"
            calc = eval(calc)
            calc += "-"
            num = ''; 
            break;
        case '*':
            visor.value = formatarNumero(Number(eval(calc))) + "*";
            historico.value += formatarNumero(Number(eval(num))) + "*"
            calc = eval(calc)
            calc += "*"
            num = ''; 
            break;
        case '/':
            visor.value = formatarNumero(Number(eval(calc))) + "/";
            historico.value += formatarNumero(Number(eval(num))) + "/"
            calc = eval(calc)
            calc += "/"
            historico.value += "/"
            num = ''; 
            break;
        default:
            console.log('Algo deu errado')
            break;    
    }        
}

function pontuacao(){
    calc += "."
    num += "."
    visor.value += ","
}

function resultado(){
    let resultado = eval(calc)
    historico.value += formatarNumero(Number(eval(num)))
    calc = `${resultado}`
    visor.value = `${formatarNumero(Number(resultado))}`
    historico.value += `=${formatarNumero(Number(resultado))} \n`
    console.log(resultado)
    num = resultado
}

function limpar(){
    // historico.value += "\n"
    var linhas = historico.value.split("\n");
    num = ''
    visor.value = ''
    calc = ''
    if (linhas.length > 1) {
        linhas.pop();
        historico.value = linhas.join("\n");
        historico.value += "\n"
      }else{
        historico.value = ""
      }
}

function apagar(){
    console.log(calc)
    calc = calc.slice(0, -1)
    var linhas = historico.value.split("\n");
    if (linhas.length > 1) {
        linhas.pop();
        historico.value = linhas.join("\n");
        historico.value += "\n"
      }else{
        historico.value = ""
      }
    visor.value = calc
    num = calc
}

function trocarCor(){
    console.log("ativado");
    calculadora.classList.add("div1");
    body.style.backgroundColor = 'white'


    for(let i =0; button.length > i; i++ ){
        button[i].style.backgroundColor = "white"
        button[i].style.border = "2px solid gray"
    }

    
}