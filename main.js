

function tocaSomPom() {
    document.querySelector('#som_tecla_pom').play(); 
};

function tocaSomClap() {
    document.querySelector('#som_tecla_clap').play(); 
};

function tocaSomTim() {
    document.querySelector('#som_tecla_tim').play(); 
}
function tocaSomPuff() {
    document.querySelector('#som_tecla_puff').play(); 
}
function tocaSomSplash() {
    document.querySelector('#som_tecla_splash').play(); 
}
function tocaSomToim() {
    document.querySelector('#som_tecla_toim').play(); 
}
function tocaSomPsh() {
    document.querySelector('#som_tecla_psh').play(); 
}
function tocaSomTic() {
    document.querySelector('#som_tecla_tic').play(); 
}
function tocaSomTom() {
    document.querySelector('#som_tecla_tom').play(); 
}


/*
document.querySelector('.tecla_pom').onclick = tocaSomPom;

document.querySelector('.tecla_clap').onclick = tocaSomClap;

document.querySelector('.tecla_tim').onclick = tocaSomTim;

document.querySelector('.tecla_puff').onclick = tocaSomPuff;

document.querySelector('.tecla_splash').onclick = tocaSomSplash;

document.querySelector('.tecla_toim').onclick = tocaSomToim;

document.querySelector('.tecla_psh').onclick = tocaSomPsh;

document.querySelector('.tecla_tic').onclick = tocaSomTic;

document.querySelector('.tecla_tom').onclick = tocaSomTom;

*/


const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas[0].onclick = tocaSomPom;
listaDeTeclas[1].onclick = tocaSomClap;
listaDeTeclas[2].onclick = tocaSomTim;
listaDeTeclas[3].onclick = tocaSomPuff;
listaDeTeclas[4].onclick = tocaSomSplash;
listaDeTeclas[5].onclick = tocaSomToim;
listaDeTeclas[6].onclick = tocaSomPsh;
listaDeTeclas[7].onclick = tocaSomTic;
listaDeTeclas[8].onclick = tocaSomTom;


