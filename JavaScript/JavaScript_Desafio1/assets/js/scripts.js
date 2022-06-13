const btn_aumentar = document.getElementById('btn_aumentar');
const btn_diminuir = document.getElementById('btn_diminuir');
const p$ = document.getElementById('contador');

let contador = 0;

p$.innerHTML = contador;

btn_aumentar.addEventListener('click', function(){
    contador++;
    p$.innerHTML = contador;
});

btn_diminuir.addEventListener('click', function(){
    contador--;
    p$.innerHTML = contador;
});