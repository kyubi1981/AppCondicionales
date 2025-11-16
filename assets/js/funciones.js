

//***** LOGIGA DE MENU BOTONES *****/

function dsf1() {
    var x = document.getElementById("dsf1");
    var y = document.getElementById("dsf2");
    var z = document.getElementById("dsf3");

    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none";
    } else {
        x.style.display = "none";
    }
}

function dsf2() {
    var x = document.getElementById("dsf2");
    var y = document.getElementById("dsf1");
    var z = document.getElementById("dsf3");

    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none";
    } else {
        x.style.display = "none";
    }
}

function dsf3() {
    var x = document.getElementById("dsf3");
    var y = document.getElementById("dsf1");
    var z = document.getElementById("dsf2");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none";
    } else {
        x.style.display = "none";
    }
}


//**** LOGICA DEL MINI-DESAFIO #1 --- BORDES ****/

function miBorde() {
    var borde = document.getElementById("img-dsf1");
    //alert("en la funcion, " & borde);
    //console.log(borde);
    if (borde.style.borderStyle === "none") {
        //alert("en el if");
        borde.style.borderStyle = "solid";
        borde.style.borderWidth = "2px";
        borde.style.borderColor = "Red";
    } else {
        //alert("en el else");
        borde.style.borderStyle = "none";
    }
}

//**** LOGICA DEL MINI-DESAFIO #1 --- BORDES ****/

function totalizar() {
    var valor1 = document.getElementById("cant1").value;
    var valor2 = document.getElementById("cant2").value;
    var valor3 = document.getElementById("cant3").value;

    var tickets = Number(valor1) + Number(valor2) + Number(valor3);

    var resultado = document.querySelector('#total-sticker');

    if (valor1 < 0 || valor2 < 0 || valor3 < 0) {

        resultado.innerHTML = "Debes ingresar valores mayores que Cero";

    } else {

        if (tickets <= 10) {
            resultado.innerHTML = "Tu resultado es " + tickets + " tickets en total";
        } else {
            resultado.innerHTML = "Llevas demasiados tickets!!!";
        }

    }
}

function limpiaTickets() {
    const input1 = document.getElementById("cant1");
    const input2 = document.getElementById("cant2");
    const input3 = document.getElementById("cant3");

    input1.value = '';
    input2.value = '';
    input3.value = '';
}

