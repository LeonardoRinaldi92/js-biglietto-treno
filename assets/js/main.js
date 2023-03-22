const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let distanza = document.getElementById("distanza").value;

    console.log(distanza);
    
    let sconto = 1;

    if (document.getElementById("eta16").checked = true){
        let sconto = 0.8;
    } else if (document.getElementById("eta65").checked = true){
        let sconto = 0.6;
    } else if(document.getElementById("eta18").checked = true){
        let sconto = 1
    }   

        console.log(sconto);

    let prezzo = (distanza * 0.21) * sconto

    console.log(prezzo)

});