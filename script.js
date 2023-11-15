var iniciaZero = document.getElementById("inicia-zero");

function insert(num){
    var numero = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = numero + num;
    
  
    iniciaZero.style.display = "none";
}

function clean(){
    document.getElementById("resultado").innerHTML = "";
    
    iniciaZero.style.display = "block";
}

function calcular(){
    var resultado = document.getElementById("resultado").innerHTML;
    var result = eval(resultado);
    document.getElementById("resultado").innerHTML = result;
}


