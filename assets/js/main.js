const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    function calcolaprezzo(distanza, sconto) {
        return ((distanza * 0.21) * sconto).toFixed(2)
    }

    let distanza = document.getElementById("distanza").value;
    
    if (document.getElementById("eta16").checked){
        document.getElementById('prezzoFinale').innerText = calcolaprezzo(distanza, 0.8) + " euro";
        document.getElementById('prezzoSconto').innerText = 'Hai risparmiato' + ' ' + (calcolaprezzo(distanza, 1) - calcolaprezzo(distanza, 0.8)).toFixed(2) + " euro, grazie alla categoria minorenni"    
    } else if (document.getElementById("eta65").checked){
        document.getElementById('prezzoFinale').innerText = calcolaprezzo(distanza, 0.6) + " euro";
        document.getElementById('prezzoSconto').innerText = 'Hai risparmiato' + ' ' + (calcolaprezzo(distanza, 1) - calcolaprezzo(distanza, 0.6)).toFixed(2) + " euro, perchè alla categoria over65"    
    } else {
        document.getElementById('prezzoFinale').innerText = calcolaprezzo(distanza, 1) + " euro";
        document.getElementById('prezzoSconto').innerText = ''
    }
    
});