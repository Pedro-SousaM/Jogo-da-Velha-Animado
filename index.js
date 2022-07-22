
//Variáveis------------------------------------------------------------------------------
//Caixas
const caixaX = document.getElementById('X')
const caixaO = document.getElementById('O')
const vsCPU = document.getElementById('vsCPU')
const vsP2 = document.getElementById('vsP2')
const telaInicial = document.getElementById('telaInicial')
const telaTabuleiro = document.getElementById('telaTabuleiro')

//Tabuleiro
const espaco = new Array(3)
espaco[0] = new Array(3)
espaco[1] = new Array(3)
espaco[2] = new Array(3)
//relação com os espaços do html
espaco[0][0] = document.getElementById('0x0');
espaco[0][1] = document.getElementById('0x1');
espaco[0][2] = document.getElementById('0x2');
espaco[1][0] = document.getElementById('1x0');
espaco[1][1] = document.getElementById('1x1');
espaco[1][2] = document.getElementById('1x2');
espaco[2][0] = document.getElementById('2x0');
espaco[2][1] = document.getElementById('2x1');
espaco[2][2] = document.getElementById('2x2');

//de jogo
let jogo = false
let jogador = 1
let simboloJogador = "X" //iniciamente considera-se que o jogador usa o X




//Funções-------------------------------------------------------------------------------
function teste(){
    window.alert('teste')
}

function mudaSimbolo( simbolo ){
    if( simbolo == 'X' && simboloJogador != "X"){
        simboloJogador = "X"
        caixaX.style.backgroundColor = "rgb(128, 150, 161)";
        caixaO.style.backgroundColor = "rgb(25, 42, 50)";
    }else if ( simbolo == 'O' && simboloJogador != "O" ){
        simboloJogador = "O"
        caixaO.style.backgroundColor = "rgb(128, 150, 161)";
        caixaX.style.backgroundColor = "rgb(25, 42, 50)";
    }
}

function iniciar(){
    telaInicial.style.display = 'none';
    telaTabuleiro.style.display = 'block';
    //window.alert('iniciar')
}

function inserirXO( linha, coluna){
    //alert(linha+ "x" + coluna)
    let simbolo
    if(jogador == 1){
        espaco[linha][coluna].style.backgroundImage = 'url("imagens/Xx.png")';
        simbolo = 'X'
        jogador = 2;
    }else{
        espaco[linha][coluna].style.backgroundImage = 'url("imagens/Oo.png")';
        simbolo = 'O' 
        jogador = 1;
    }
    espaco[linha][coluna].innerText = simbolo
    testarVitoria(simbolo)
}

 /*
 //Se fosse um tabela
function inserirXO(e){

    let linha = Number(e.currentTarget.parentNode.rowIndex)
    let coluna = Number(e.currentTarget.cellIndex)
    let simbolo
    
    if(jogador == 1){
        espaco[linha][coluna].style.backgroundImage = 'url("imagens/Xx.png")';
        simbolo = 'X'
        jogador = 2;
    }else{
        espaco[linha][coluna].style.backgroundImage = 'url("imagens/Oo.png")';
        simbolo = 'O' 
        jogador = 1;
    }
    espaco[linha][coluna].innerText = simbolo
    testarVitoria(simbolo)

}*/

function inserirSimbolo( ){

    espaco[0][0].appendChild(simboloX);
}

function testarVitoria(simbolo){
    
    let contadorL = 0 //conta linha 
    let contadorC = 0 //conta colunas
    let contadorDD = 0 //conta diagonal descendo
    let contadorDS = 0 //conta diagonal subindo

    for(let i=0 ; i<3; i++){
        for(let j=0 ; j<3; j++){
            if(espaco[i][j].innerText == simbolo){//testa linha
                contadorL++
            }
            if(espaco[j][i].innerText == simbolo){//testa coluna
                contadorC++
            }
            if( i == j){
                if(espaco[i][j].innerText == simbolo){//testa diagonal descendo
                    contadorDD++
                }
            }
            if( i+j == 2){
                if(espaco[i][j].innerText == simbolo){//testa diagonal subindo
                    contadorDS++
                }
            }
        }
        if(contadorL >= 3 || contadorC >= 3 || contadorDD >= 3 || contadorDS >= 3){
            indicarVitoria();
            return;
        }else{
            contadorL=0;
            contadorC=0;
        }
    }
}

function indicarVitoria(){
    alert('VITORIA')
}

//Escutadores---------------------------------------------------------------------------

function escutadores(){
    vsCPU.addEventListener('click', iniciar)
    vsP2.addEventListener('click', iniciar)
    caixaX.addEventListener('click', function(){mudaSimbolo("X")})
    caixaO.addEventListener('click', function(){mudaSimbolo("O")})
    espaco[0][0].addEventListener('click', function(){inserirXO(0,0)} )
    espaco[0][1].addEventListener('click', function(){inserirXO(0,1)})
    espaco[0][2].addEventListener('click', function(){inserirXO(0,2)})
    espaco[1][0].addEventListener('click', function(){inserirXO(1,0)})
    espaco[1][1].addEventListener('click', function(){inserirXO(1,1)})
    espaco[1][2].addEventListener('click', function(){inserirXO(1,2)})
    espaco[2][0].addEventListener('click', function(){inserirXO(2,0)})
    espaco[2][1].addEventListener('click', function(){inserirXO(2,1)})
    espaco[2][2].addEventListener('click', function(){inserirXO(2,2)})
    /*espaco[0][0].addEventListener('click', inserirXO )
    espaco[0][1].addEventListener('click', inserirXO)
    espaco[0][2].addEventListener('click', inserirXO)
    espaco[1][0].addEventListener('click', inserirXO)
    espaco[1][1].addEventListener('click', inserirXO)
    espaco[1][2].addEventListener('click', inserirXO)
    espaco[2][0].addEventListener('click', inserirXO)
    espaco[2][1].addEventListener('click', inserirXO)
    espaco[2][2].addEventListener('click', inserirXO)*/
}

//--------------------------------------------------------------------------------------

//inicialização
window.addEventListener("load", escutadores) //Ativa os escutadores