const btn_aumentar = document.getElementById('btn_aumentar');
const btn_diminuir = document.getElementById('btn_diminuir');
const p$ = document.getElementById('contador');

let contador = 0;

p$.innerHTML = contador;

btn_aumentar.addEventListener('click', function(){
    if (contador <= 9){
    contador = contador + 1;
    p$.innerHTML = contador;
    button.disabled = false;
    }
    else{
    button.disabled = true;
    }
});

btn_diminuir.addEventListener('click', function(){
    if (contador >= 1){
    contador--;
    p$.innerHTML = contador;
    button.disabled = false;
    }
    else{
    button.disabled = true;
    }
});

