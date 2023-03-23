const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let distanza = document.getElementById("distanza").value;
    let sconto = 1;
    if (document.getElementById("eta16").checked){
        sconto = 0.8;
    } else if (document.getElementById("eta65").checked){
        sconto = 0.6;
    } 
    let prezzo = ((distanza * 0.21) * sconto).toFixed(2)
    document.getElementById('prezzoFinale').innerText = prezzo + "euro"}
    );