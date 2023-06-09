

var jogador1;
var jogador2;

function DefinirX(){
    if(document.getElementById("button1").classList.toggle("active")){
        jogador1 = 'X';
        jogador2 = 'O';
        document.getElementById("button1").disabled = true;
        document.getElementById("button2").disabled = true;
    }

}

function DefinirO(){
    if(document.getElementById("button2").classList.toggle("active")){
        jogador1 = 'O';
        jogador2 = 'X';
        document.getElementById("button1").disabled = true;
        document.getElementById("button2").disabled = true;
    }

}





var l1_1 = document.getElementById('L1_1');
var l1_2 = document.getElementById('L1_2');
var l1_3 = document.getElementById('L1_3');

var l2_1 = document.getElementById('L2_1');
var l2_2 = document.getElementById('L2_2');
var l2_3 = document.getElementById('L2_3');

var l3_1 = document.getElementById('L3_1');
var l3_2 = document.getElementById('L3_2');
var l3_3 = document.getElementById('L3_3');


var jogadorAtual;

var contador = 0;
var velha = 0;
var velha2 = 0;




var conjunto = [l1_1,l1_2,l1_3, l2_1, l2_2, l2_3, l3_1, l3_2, l3_3]

    for(let i = 0; i < conjunto.length; i++){
        conjunto[i].addEventListener('click', (event)=>{

                if(jogador1 === undefined && jogador2 === undefined){
                    alert('Selecione seu símbolo!')
                    
                }else{

                if((contador%2)==0){
                    jogadorAtual = jogador1;
                }else{
                    jogadorAtual = jogador2;
                }

                if(event.target.innerHTML === jogador1 || event.target.innerHTML === jogador2 ){
                    throw console.error('NÃO SOBREPONHA!');
                }

                    event.target.innerHTML = jogadorAtual; 
                

                contador++;

                ganhouX();
                ganhouO();

                if(velha === 18 && velha2 === 0){
                    alert('Deu velha!')
                    location.reload();
                }
                
            
        } 
            
        })

    
    }

//-Quem marcar uma das 8 formas, primeiro ganha

    function ganhouX(){

        //X

        if(l1_1.innerHTML === 'X' && l1_2.innerHTML === 'X' && l1_3.innerHTML === 'X'){
            velha2 = 1;
            alert("Vitória do X!")
            location.reload()
        } else if(l2_1.innerHTML === 'X' && l2_2.innerHTML === 'X' && l2_3.innerHTML === 'X'){
            velha2 = 1;
            alert("Vitória do X!")
            location.reload()
        } else if(l3_1.innerHTML === 'X' && l3_2.innerHTML === 'X' && l3_3.innerHTML === 'X'){
            velha2 = 1;
            alert("Vitória do X!")
            location.reload()
        }else if(l1_1.innerHTML === 'X' && l2_1.innerHTML === 'X' && l3_1.innerHTML === 'X'){
            velha2 = 1;
            alert("Vitória do X!")
            location.reload()
        }else if(l1_2.innerHTML === 'X' && l2_2.innerHTML === 'X' && l3_2.innerHTML === 'X'){
            velha2 = 1;
            alert("Vitória do X!")
            location.reload()
        }else if(l1_3.innerHTML === 'X' && l2_3.innerHTML === 'X' && l3_3.innerHTML === 'X'){
            velha2 = 1;
            alert("Vitória do X!")
            location.reload()
        }else if(l1_1.innerHTML === 'X' && l2_2.innerHTML === 'X' && l3_3.innerHTML === 'X'){
            velha2 = 1;
            alert("Vitória do X!")
            location.reload()
        } else if(l1_3.innerHTML === 'X' && l2_2.innerHTML === 'X' && l3_1.innerHTML === 'X'){
            velha2 = 1;
            alert("Vitória do X!")
            location.reload()
        }

        velha++
      
    }


    function ganhouO(){

        //O

        if(l1_1.innerHTML === 'O' && l1_2.innerHTML === 'O' && l1_3.innerHTML === 'O'){
            alert("Vitória do O!")
            location.reload()
        } else if(l2_1.innerHTML === 'OO' && l2_2.innerHTML === 'O' && l2_3.innerHTML === 'O'){
            alert("Vitória do O!")
            location.reload()
        } else if(l3_1.innerHTML === 'O' && l3_2.innerHTML === 'O' && l3_3.innerHTML === 'O'){
            alert("Vitória do O!")
            location.reload()
        }else if(l1_1.innerHTML === 'O' && l2_1.innerHTML === 'O' && l3_1.innerHTML === 'O'){
            alert("Vitória do O!")
            location.reload()
        }else if(l1_2.innerHTML === 'O' && l2_2.innerHTML === 'O' && l3_2.innerHTML === 'O'){
            alert("Vitória do O!")
            location.reload()
        }else if(l1_3.innerHTML === 'O' && l2_3.innerHTML === 'O' && l3_3.innerHTML === 'O'){
            alert("Vitória do O!")
            location.reload()
        }else if(l1_1.innerHTML === 'O' && l2_2.innerHTML === 'O' && l3_3.innerHTML === 'O'){
            alert("Vitória do O!")
            location.reload()
        } else if(l1_3.innerHTML === 'O' && l2_2.innerHTML === 'O' && l3_1.innerHTML === 'O'){
            alert("Vitória do O!")
            location.reload()
        }

        velha++

      
    }

