let szam = 0;
function Valaszt(x){
    let pontszam = document.getElementById("pontszam");
    let valasztottCucc = x.target.id;
    tomb = ["papper","scicsors","rock"]
    let randomCucc = tomb[parseInt(Math.random()*3)]
    if(valasztottCucc == "papper"){
        if(randomCucc == "papper"){
            document.getElementById("visszaJelzes").innerHTML = "DÖNTETLEN!";
        }
        else if(randomCucc == "rock"){
            pontszam.innerHTML = ++szam;
            document.getElementById("visszaJelzes").innerHTML = "NYERTÉL!";
        }
        else if(randomCucc == "scicsors"){
            document.getElementById("visszaJelzes").innerHTML = "VESZTETTÉL!"
        }
    }
    else if(valasztottCucc == "scicsors"){
        if(randomCucc == "papper"){
           pontszam.innerHTML  = ++szam;
           document.getElementById("visszaJelzes").innerHTML = "NYERTÉL!"
        }
        else if(randomCucc == "rock"){
            document.getElementById("visszaJelzes").innerHTML = "VESZTETTÉL!"
        }
        else if(randomCucc == "scicsors"){
            document.getElementById("visszaJelzes").innerHTML = "DÖNTETLEN!";
        }
    }
    else if(valasztottCucc == "rock"){
        if(randomCucc == "papper"){
            document.getElementById("visszaJelzes").innerHTML = "VESZTETTÉL!"
        }
        else if(randomCucc == "rock"){
            document.getElementById("visszaJelzes").innerHTML = "DÖNTETLEN!";
        }
        else if(randomCucc == "scicsors"){
            pontszam.innerHTML = ++szam;
            document.getElementById("visszaJelzes").innerHTML = "NYERTÉL!"
        }
    }
    let egy = document.getElementById(`${randomCucc}`).innerHTML;
    let ketto = document.getElementById(`${valasztottCucc}`).innerHTML;
    document.getElementById("jatekos").innerHTML = ketto;
    document.getElementById("gep").innerHTML = egy;
    document.getElementById("ujraKezd").style.visibility = "visible";
    document.getElementById("game").style.visibility = "hidden";
    document.getElementById("eredmeny").style.visibility = "visible";
    document.getElementById("paragrafusEgy").style.visibility = "visible";
    document.getElementById("paragrafusKetto").style.visibility = "visible";
}
function UjraKezdes(){
    document.getElementById("eredmeny").style.visibility = "hidden";
    document.getElementById("ujraKezd").style.visibility = "hidden";
    document.getElementById("game").style.visibility = "visible";
    document.getElementById("paragrafusEgy").style.visibility = "hidden";
    document.getElementById("paragrafusKetto").style.visibility = "hidden";
    document.getElementById("visszaJelzes").innerHTML = "";
}

