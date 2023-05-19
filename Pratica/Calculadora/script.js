const visor = document.getElementById("visor")
const historico = document.getElementById("historico") 

const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btnAdd = document.getElementById("btnAdd")


let num = ''



function addVisor(value) {
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
        default:
            console.log('Algo deu errado')
            break;    
    }
    
    
    
}

function resultado(){
    let resultado = eval(visor.value)
    visor.value += `=${resultado}`
    historico.value += `=${resultado} \n`
}

function limpar(){
    num = ''
    visor.value = ''
}