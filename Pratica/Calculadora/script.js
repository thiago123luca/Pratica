const visor = document.getElementById("visor")
const historico = document.getElementById("historico") 




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
    formatarNumero(Number(value))
     visor.value += value
     historico.value += value
     calc += value
     num += value

    console.log("funcionando");
    // console.log('esse é o valor ' + value +' esse é o num '+ num )
};

console.log(calc)

function expoente(valor) {
 console.log(calc)

    switch(valor){
        case '+':
            calc = eval(calc)
            calc += "+"
            visor.value = calc;
            historico.value += "+"
            num = '';
            break;
        case '-':
            calc = eval(calc)
            calc += "-"
            visor.value = calc;
            historico.value += "-"
            num = ''; 
            break;
        case '*':
            calc = eval(calc)
            calc += "*"
            visor.value = calc;
            historico.value += "*"
            break;
        case '/':
            calc = eval(calc)
            calc += "/"
            visor.value = calc;
            historico.value += "/"
            break;
        default:
            console.log('Algo deu errado')
            break;    
    }        
}

function pontuacao(){
    calc += "."
    historico.value += ","
    visor.value += ","
}

function resultado(){
    let resultado = eval(calc)
    calc = `${resultado}`
    visor.value = `${resultado}`
    historico.value += `=${resultado} \n${resultado}`
    console.log(resultado)
    
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
    historico.value = historico.value.slice(0, -1)
    visor.value = visor.value.slice(0, -1)
}