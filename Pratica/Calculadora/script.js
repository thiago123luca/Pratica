const visor = document.getElementById("visor")
const historico = document.getElementById("historico") 
const calculadora = document.getElementById("calculadora")
const body = document.getElementById("body")
const button = document.getElementsByTagName("button")


let num = ''
let calc = ''


function calculo(expressao){
    const operadores = expressao.match(/[+\-*/]/); // Encontrar os operadores na expressão
    const numeros = expressao.split(/[+\-*/]/).map(parseFloat); // Encontrar os números na expressão e converter para valores numéricos
    
    let resultado = numeros[0];
    
    if (numeros.length < 2){
        return resultado
    }else{
        for (let i = 0; i < operadores.length; i++) {
            const operador = operadores[i];
            const numero = numeros[i + 1];
        
            switch (operador) {
              case '+':
                resultado += numero;
                break;
              case '-':
                resultado -= numero;
                break;
              case '*':
                resultado *= numero;
                break;
              case '/':
                resultado /= numero;
                break;
              default:
                break;
            }
          }
    }
  
    
  
    return resultado;
}







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
            visor.value = formatarNumero(calculo(calc)) + "+";
            historico.value += formatarNumero(Number(num)) + "+"
            calc = calculo(calc)
            calc += "+"
            num = '';
            break;
        case '-':
            visor.value = formatarNumero(calculo(calc)) + "-";
            historico.value += formatarNumero(Number(num)) + "-"
            calc = calculo(calc)
            calc += "-"
            num = ''; 
            break;
        case '*':
            visor.value = formatarNumero(calculo(calc)) + "*";
            historico.value += formatarNumero(Number(num)) + "*"
            calc = calculo(calc)
            calc += "*"
            num = ''; 
            break;
        case '/':
            visor.value = formatarNumero(calculo(calc)) + "/";
            historico.value += formatarNumero(Number(num)) + "/"
            calc = calculo(calc)
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
    let resultado = calculo(calc)
    historico.value += formatarNumero(Number(num))
    calc = `${resultado}`
    visor.value = `${formatarNumero(Number(resultado))}`
    historico.value += `=${formatarNumero(Number(resultado))} \n`
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
for(let i = 0; button.length > i; i++){
    button[i].classList.add("buttonUm")
}


function trocarCor(){

    const trocaDeCor = document.getElementById("trocaDeCor")
    const buttonCor = document.getElementById("buttonCor")

        if(trocaDeCor.classList.contains("black")){
            console.log("ativado");
            calculadora.classList.remove("div")
            calculadora.classList.add("div1");

            body.style.backgroundColor = 'white'
           
            for(let i = 0; button.length > i; i++){
                button[i].classList.remove("buttonUm")
                button[i].classList.add("buttonDois")
            }
            
            
            buttonCor.classList.remove("fas", "fa-sun", "sun-icon")
            buttonCor.classList.add("fas", "fa-moon", "moon-icon")

            buttonCor.style.color = "#666666"

            trocaDeCor.classList.remove("black")
            trocaDeCor.classList.add("white")

        }
        else if (trocaDeCor.classList.contains("white")){

            console.log("desativado");
            calculadora.classList.remove("div1");
            calculadora.classList.add("div");

            body.style.backgroundColor = 'black'
           
            for(let i = 0; button.length > i; i++){
                button[i].classList.remove("buttonDois")
                button[i].classList.add("buttonUm")
            }
            
            buttonCor.classList.remove("fas", "fa-moon", "moon-icon")
            buttonCor.classList.add("fas", "fa-sun", "sun-icon")

            buttonCor.style.color = "#fdd005"

            trocaDeCor.classList.remove("white")
            trocaDeCor.classList.add("black")
        }
       
 
    
}
