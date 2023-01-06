let digital = document.querySelector('.digital');
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');

function clock(){
    let now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    let day = now.getDay();
    showDay(day);

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

function showDay(d){
    let tday = '';

    switch(d){
        case 0:
            tday = document.getElementById('dom').innerHTML;
            remove(tday);
            document.getElementById('dom').classList.add('s_day');
        break;
        case 1:
            tday = document.getElementById('seg').innerHTML;
            remove(tday);
            document.getElementById('seg').classList.add('s_day');
        break;
        case 2:
            tday = document.getElementById('ter').innerHTML;
            remove(tday);
            document.getElementById('ter').classList.add('s_day');
        break;
        case 3:
            tday = document.getElementById('qua').innerHTML;
            remove(tday);
            document.getElementById('qua').classList.add('s_day');
        break;
        case 4:
            tday = document.getElementById('qui').innerHTML;
            remove(tday);
            document.getElementById('qui').classList.add('s_day');
        break;
        case 5:
            tday = document.getElementById('sex').innerHTML;
            remove(tday);
            document.getElementById('sex').classList.add('s_day');
        break;
        case 6:
            tday = document.getElementById('sab').innerHTML;
            remove(tday);remove();
            document.getElementById('sab').classList.add('s_day');
        break;
    };
}

function remove(sDay){
    document.querySelectorAll('.dia').forEach( item =>{
        if(item.innerHTML !== sDay){
            item.classList.remove('s_day');
        }
    });
}

setInterval(clock, 1000);
clock();