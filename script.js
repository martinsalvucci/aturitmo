var start = new Date();

function siguiente(actual, siguiente) {
    var activo =  document.getElementById(actual)
    var inactivo = document.getElementById(siguiente)
    
    activo.classList.remove('main-contextos')
    activo.classList.add('ocultar')
    inactivo.classList.remove('ocultar')
    inactivo.classList.add('main-contextos')
}

function calcularTempo() {
    document.getElementById('paso3').style.display = "none";
    document.getElementById('paso4').classList.remove ('ocultar');
    document.getElementById('paso4').classList.add ('main-contextos');
    
    var elapsed = new Date() - start;
    var segundos = elapsed / 1000;
    
    document.getElementById('lapso').innerHTML = segundos.toFixed();
    
    var checked = $('input:checkbox:checked').length;
    var intensidad = document.getElementById("slide").value;
    var result;
    result = checked * 30 * intensidad;

    document.getElementById('bpm').innerHTML = result.toFixed();
    document.getElementById('nombre').innerHTML = document.getElementById("nombre_input").value;
    
    var tempo = document.getElementById('tempo');
    
    if (result <= 76) {
        tempo.innerHTML = "Adagio";
    }
    else if (result > 76 && result <= 108) {
        tempo.innerHTML = "Andante";
    }
    else if (result > 108 && result <= 120) {
        tempo.innerHTML = "Moderato";
    }
    else if (result > 120 && result <= 168) {
        tempo.innerHTML = "Allegro";
    }
    else if (result > 168 && result <= 200) {
        tempo.innerHTML = "Presto";
    }
    else if (result > 200) {
        tempo.innerHTML = "Prestissimo";
    }
    
    saveLocalStorage('bpm', result)
    saveLocalStorage('tempo', tempo.innerHTML)
    saveLocalStorage('lapso', segundos)
    saveLocalStorage('nombre', nombre.innerHTML)
    saveLocalStorage('edad', document.getElementById('edad_input').value)
    saveLocalStorage('genero', document.getElementById('genero_input').value)
}

function saveLocalStorage(name, data) {
    localStorage.setItem(name, data)
}

function obtenerLocalStorage(name) {
    return localStorage.getItem(name)
}

function borrarLocalStorage(name) {
    return localStorage.removeItem(name)
}