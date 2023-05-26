// Acessar os elementos do HTML
const visor = document.getElementById("visor")
const historico = document.getElementById("historico") 
const calculadora = document.getElementById("calculadora")
const body = document.getElementById("body")
const buttonCalc = document.getElementsByTagName("button")

let num = ''
let calc = ''

// adicionar a classe aos botões
for(let i = 0; buttonCalc.length > i; i++){
    buttonCalc[i].classList.add("buttonPadraoUm")
}


// Button troca de cor
function buttonTrocarCor(){
    // Acessar o padrão de cores do botão determinado pelo botão troca de cor
    const trocaDeCor = document.getElementById("buttonTrocaDeCor")
    const buttonCor = document.getElementById("buttonCor")

        // verificar em qual padrão de cores está
        if(trocaDeCor.classList.contains("black")){
            
            // troca de cor do corpo da calculadora
            calculadora.classList.remove("padraoDeCorUm")
            calculadora.classList.add("padraoDeCorDois");

            // troca de cor do body (fundo)
            body.style.backgroundColor = 'white'
           
            // trocar de padrão de cores dos botões da calculadora
            for(let i = 0; buttonCalc.length > i; i++){
                buttonCalc[i].classList.remove("buttonPadraoUm")
                buttonCalc[i].classList.add("buttonPadraoDois")

            }
            
            // trocar padrão de cores dos numeros
            const numbers = document.querySelectorAll(".number")
            for(let i = 0; numbers.length > i; i++){
                numbers[i].style.color = "#505050";
                numbers[i].style.boxshadow = "inset 0px 6px 16px -12px #91b8b3";
                numbers[i].style.background = "linear-gradient(to bottom, #c4c4c4 5%, #9b9b9b 100%)";
                numbers[i].style.backgroundcolor = "#ffffff";
                numbers[i].style.border= "1px solid #dcdcdc";
                numbers[i].style.textshadow="0px 1px 0px #ffffff";
            }

            // trocar padrão de cores do igual
            const igual = document.querySelectorAll(".igual")
            for(let i = 0; igual.length > i; i++){
                igual[i].style.color = "#505050";
                igual[i].style.boxshadow = "inset 0px 6px 16px -12px #91b8b3";
                igual[i].style.background = "linear-gradient(to bottom, #c4c4c4 5%, #9b9b9b 100%)";
                igual[i].style.backgroundcolor = "#ffffff";
                igual[i].style.border= "1px solid #dcdcdc";
                igual[i].style.textshadow="0px 1px 0px #ffffff";
            }
           
            
            // troca do icon do botão troca de cor e troca de cor
            buttonCor.classList.remove("fas", "fa-sun", "sun-icon")
            buttonCor.classList.add("fas", "fa-moon", "moon-icon")
            buttonCor.style.color = "#666666"

            // troca do padrão de cores do botão troca de cor
            trocaDeCor.classList.remove("black")
            trocaDeCor.classList.add("white")


          
            
        }
        // verificar em qual padrão de cores está
        else if (trocaDeCor.classList.contains("white")){

             // troca de cor do corpo da calculadora
            calculadora.classList.remove("padraoDeCorDois");
            calculadora.classList.add("padraoDeCorUm");

            // troca de cor do body (fundo)
            body.style.backgroundColor = 'black'
           
            // trocar de padrão de cores dos botões da calculadora
            for(let i = 0; buttonCalc.length > i; i++){
                buttonCalc[i].classList.remove("buttonPadraoDois")
                buttonCalc[i].classList.add("buttonPadraoUm")


            }


            // trocar padrão de cores dos numeros
            const numbers = document.querySelectorAll(".number")
            for(let i = 0; numbers.length > i; i++){
                numbers[i].style.color = "#ffffff";
                numbers[i].style.boxshadow = "inset 0px 6px 16px -12px #91b8b3";
                numbers[i].style.background = "linear-gradient(to bottom, #768d87 5%, #6c7c7c 100%)";
                numbers[i].style.backgroundcolor = "#768d87";
                numbers[i].style.border= "1px solid #566963";
                numbers[i].style.textshadow="0px 2px 4px #2b665e";
            }

            // trocar padrão de cores do igual
            const igual = document.querySelectorAll(".igual")
            for(let i = 0; igual.length > i; i++){
                igual[i].style.color = "#ffffff";
                igual[i].style.boxshadow = "inset 0px 6px 16px -12px #d9fbbe";
                igual[i].style.background = "linear-gradient(to bottom, #b8e356 5%, #a5cc52 100%)";
                igual[i].style.backgroundcolor = "#b8e356";
                igual[i].style.border= "1px solid #83c41a";
                igual[i].style.textshadow="0px 2px 4px #86ae47";
            }


            
             // troca do icon do botão troca de cor e troca de cor
            buttonCor.classList.remove("fas", "fa-moon", "moon-icon")
            buttonCor.classList.add("fas", "fa-sun", "sun-icon")
            buttonCor.style.color = "#fdd005"

             // troca do padrão de cores do botão troca de cor
            trocaDeCor.classList.remove("white")
            trocaDeCor.classList.add("black")


           

        }
       
 
    
}



function calculo(expressao){
    const operadores = expressao.match(/[+\-*/]/g);
    const numeros = expressao.split(/[+\-*/]/g).map(parseFloat);

    let resultado = numeros[0];

    if(numeros.length < 2){
        return resultado
    }else{
        for (let i = 0; i < operadores.length; i++) {

            const operador = operadores[i];
            const numero = numeros[i + 1];
    
            switch(operador){
                case "+":
                    resultado += numero;
                    break;
                case "-":
                    resultado -= numero;
                    break;
                case "*":
                    resultado *= numero;
                    break;
                case "/":
                    resultado /= numero;
                    break;
                default:
                   break;
            }
    
        }
    }
   

    return resultado
}





function formatarNumero(numero) {
    return numero.toLocaleString('pt-BR');
}
    


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


