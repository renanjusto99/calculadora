const respostas = document.getElementById("resultados") //Campo que será o visor da calculadora e que receberá os testes lógicos

//função para limpar todos caracteres preenchidos no visor
function limpar(){
    respostas.innerHTML = ""
}

//função que recebe os numero digitados e vai os compilando e preenchendo no visor
function insert(num){
    let numero = respostas.innerHTML
    respostas.innerHTML = numero + num        
}

//função para limpar o ultimo caractere preenchido no visor
function apagar(){
    let numero = respostas.innerHTML
    respostas.innerHTML = numero.substring(0, numero.length -1)
}

//função para calcular a porcentagem de um número preenchido no visor
function porcentagem(){
   let numero = respostas.innerHTML + '/100'
    if(numero){
        respostas.innerHTML = eval(numero)
    }
}

//função para calcular o quadrado do número
function quadrado(){
    let numero = respostas.innerHTML * respostas.innerHTML
     if(numero){
         respostas.innerHTML = eval(numero)
         formatarNumero()
     }
 }

 //função para obter o resultado
function calcular(){
    let numero = respostas.innerHTML
    if(numero){
        respostas.innerHTML = eval(numero)
        formatarNumero()
    }
}

//Função que formata os milhares
function formatarNumero() {
    respostas.innerHTML = respostas.innerHTML.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
}