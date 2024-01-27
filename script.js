var rezultat_final = 0;

const selectElement = document.getElementById("talia");
const info1Element = document.getElementById("info1");
const info2Element = document.getElementById("info2");

selectElement.addEventListener("change", function() {
    if (selectElement.value === "1") {
        info1Element.style.display = "block";
        info2Element.style.display = "none";
    } else if (selectElement.value === "2") {
        info1Element.style.display = "none";
        info2Element.style.display = "block";
    } else if (selectElement.value === "0"){
        info1Element.style.display = "none";
        info2Element.style.display = "none"; 
    }
});


function raz() {
    var greutate = document.getElementById("weight");
    var greutate_val = greutate.value;

    var secondul = document.getElementById("height");
    var secondul_val = secondul.value;

    secondul_val = secondul_val / 100;

    var result = document.getElementById('result');
    var x = greutate_val / (secondul_val*secondul_val);
    result.innerHTML = x.toFixed(0) ;
}



function rezultat() {
    
    var selects = document.querySelectorAll("select");

    selects.forEach(input => {
        if (input.value === "0") {
        input.classList.add("red-border");
        } else {
            input.classList.remove("red-border");

        const varsta = document.getElementById("age");
        const varsta_val = varsta.value;
        if (varsta_val == 1) {
                rezultat_final += 0;
        }
        if (varsta_val == 2) {
                rezultat_final += 2;
        }
        if (varsta_val == 3) {
                rezultat_final += 3;
        }
        if (varsta_val == 4) {
                rezultat_final += 4;
        }

        var greutate = document.getElementById("weight");
        var greutate_val = greutate.value;

        var secondul = document.getElementById("height");
        var secondul_val = secondul.value;

        secondul_val = secondul_val / 100;

        var result = document.getElementById('result');
        var x = greutate_val / (secondul_val*secondul_val);
        result.innerHTML = x.toFixed(0) ;

        if (x < 25) {
            rezultat_final +=0;
        }
        if(x = 25 && x <= 30){
            rezultat_final += 1;
        }
        if (x > 30) {
            rezultat_final += 3;
        }

        const barbat = document.getElementById("barbat");
        const barbat_val = barbat.value;
        if (barbat_val == 1) {
            rezultat_final +=0
        }
        if (barbat_val == 2) {
            rezultat_final +=3
        }
        if (barbat_val == 3) {
            rezultat_final += 4
        }

        const femeie = document.getElementById("femeie");
        const femeie_val = femeie.value;
        if (femeie_val == 1) {
            rezultat_final +=0
        }
        if (femeie_val == 2) {
            rezultat_final +=3
        }
        if (femeie_val == 3) {
            rezultat_final += 4
        }

        const ex = document.getElementById("exerc");
        const ex_val = ex.value;
        if (ex_val == 1) {
            rezultat_final +=0;
        }
        if (ex_val == 2) {
            rezultat_final +=2;
        }

        const fructe = document.getElementById("fructe");
        const fructe_val = fructe.value;
        if (fructe_val == 1) {
            rezultat_final +=0;
        }
        if (fructe_val == 2) {
            rezultat_final +=1;
        }

        const tratament = document.getElementById("tratament");
        const tratament_val = tratament.value;
        if (tratament_val == 1) {
            rezultat_final += 0;
        }
        if (tratament_val == 2) {
            rezultat_final += 2;
        }

        const glicemie = document.getElementById("glicemie");
        const glicemie_val = glicemie.value;
        if (glicemie_val == 1) {
            rezultat_final += 0;
        }
        if (glicemie_val == 2) {
            rezultat_final +=5;
        }

        const rude_boln = document.getElementById("rude_boln");
        const rude_boln_val = rude_boln.value;
        if (rude_boln_val == 1) {
            rezultat_final +=0;
        }
        if (rude_boln_val == 2) {
            rezultat_final +=3;
        }
        if (rude_boln_val == 3) {
            rezultat_final +=5;
        }

        
        const final = document.getElementById('scor');
        final.innerHTML = `${rezultat_final} puncte`;

        const sanse = document.getElementById('sanse');
        if (rezultat_final < 7) {
            sanse.innerHTML = "Risc scazut,se estimeaza ca 1 din 100 va dezvolta boala";
        }else if (rezultat_final = 7 && rezultat_final <=11) {
            sanse.innerHTML = "Risc usor ridicat,1 din 25 va dezvolta boala";
        }else if (rezultat_final = 12 && rezultat_final <= 14) {
            sanse.innerHTML = "Risc moderat,1 din 6 va dezvolta boala";
        }else if (rezultat_final = 15 && rezultat_final <= 20) {
            sanse.innerHTML = "Risc inalt,1 din 3 va dezvolta boala";
        }else if (rezultat_final > 20) {
            sanse.innerHTML = "Risc foarte inalt,1 din 2 va dezvolta boala";
        }
            }
        });

}
