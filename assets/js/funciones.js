

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

function miBorde(){
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