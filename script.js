let digital = document.querySelector('.digital');
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');

function clock(){
    let now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    digital.innerHTML = `${fixZero(h)}:${fixZero(m)}:${fixZero(s)}`;

    // a seguir foi feito uma conta para dividir o relogio em partes iguais para fazer a rotação dos ponteiros ficarem uniformes.
    // Ex: se temos 60 segundos em um relógio analógico, então dividimos 360 por 60 para saber quanto graus o ponteiro deve rotacionar por segundo.
    let sP = ((360/60) * s) - 90; 
    let mP = ((360/60) * m) - 90;
    let hP = ((360/12) * h) - 90;
    
    sElement.style.transform = `rotate(${sP}deg)`;
    mElement.style.transform = `rotate(${mP}deg)`;
    hElement.style.transform = `rotate(${hP}deg)`;
}

function fixZero(time){
    if(time < 10){
        return '0'+time;
    } else{
        return time;
    }
}

setInterval(clock, 1000);
clock();