const visor = document.getElementById("visor")
const historico = document.getElementById("historico") 

const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btnAdd = document.getElementById("btnAdd")


let num = ''




function formatarNumero(numero) {
    return numero.toLocaleString('pt-BR');
}
    
function formatarNumeroOriginal(numeroFormatado) {
    var numeroSemPonto = numeroFormatado.replace(/\./g, '');
    return parseFloat(numeroSemPonto.replace(',', '.'));
}
  

console.log(formatarNumero(Number(num)))


function addVisor(value) {
    formatarNumero(Number(value))
     visor.value += value
     historico.value += value 
     num += value
     let resultado = eval(visor.value)


    console.log("funcionando");
    // console.log('esse é o valor ' + value +' esse é o num '+ num )
};


function expoente(valor) {
    
   

    switch(valor){
        case '+':
            visor.value = eval(visor.value)
            visor.value += "+";
            historico.value += "+"
            num = '';
            break;
        case '-':
            visor.value = eval(visor.value)
            visor.value += "-"
            historico.value += "-"
            num = ''; 
            break;
        case '*':
            visor.value = eval(visor.value)
            visor.value += "*"
            historico.value += "*"
            break;
        case '/':
            visor.value = eval(visor.value)
            visor.value += "/"
            historico.value += "/"
            break;
        
        case '.':
            num += "."
            visor.value += "."
            historico.value += "."
            break;
        default:
            console.log('Algo deu errado')
            break;    
    }
    
    
    
}

function resultado(){
    let resultado = eval(visor.value)
    visor.value = `${resultado}`
    historico.value += `=${resultado} \n${resultado}`
    
}

function limpar(){
    var linhas = historico.value.split("\n");
    num = ''
    visor.value = ''
    if (linhas.length > 1) {
        linhas.pop();
        historico.value = linhas.join("\n");
        historico.value += "\n"
      }
}

function apagar(){
    historico.value
}