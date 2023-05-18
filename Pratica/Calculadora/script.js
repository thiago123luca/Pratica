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

function addVisor(value) {

    visor.value += value

    console.log("funcionando");
};
