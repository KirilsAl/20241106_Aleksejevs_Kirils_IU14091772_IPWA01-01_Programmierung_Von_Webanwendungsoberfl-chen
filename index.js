//Optionen "Abholen lassen" oder "An Geschäftsstelle bringen" 
document.getElementById("bringenOderVersenden").addEventListener("change", function(){
    var option = this.value;
    var abholAdresseContainer = document.getElementById("abholAdresseContainer");
    var geschaeftsstelleContainer = document.getElementById("geschaeftsstelleContainer")

    if (option === "abholen") {
        abholAdresseContainer.style.display = "block"
        geschaeftsstelleContainer.style.display = "none"
    }else if (option === "bringen") {
        abholAdresseContainer.style.display = "none"
        geschaeftsstelleContainer.style.display = "block"
    }else{
        abholAdresseContainer.style.display = "none"
        geschaeftsstelleContainer.style.display = "none"
    }    
});

//Die ersten 2 PLZ Zahlen vergleichen
function findLocation() {
    var eingegebenePLZ = document.getElementById("plz_bringen").value.substring(0, 2);

    // PLZ prüfen und entsprechende Geschäftsstelle anzeigen
    if (eingegebenePLZ === "76") {
        document.getElementById("standorte").innerHTML = '<div class="location_badenbaden"> <p>76530 Baden-Baden<br>Sophienstraße 105</p> </div>';
    } else if (eingegebenePLZ === "60") {
        document.getElementById("standorte").innerHTML = '<div id="location_frankfurt"> <p class="plz">60318 Frankfurt<br>Bachstraße 15</p> </div>';
    } else if (eingegebenePLZ === "70") {
        document.getElementById("standorte").innerHTML = '<div id="location_stuttgart"> <p class="plz">70176 Stuttgart<br>Königstraße 44</p> </div>';
    } else {
        document.getElementById("standorte").innerHTML = '<div id="no_location"> <p>Keine Geschäftsstelle gefunden</p> </div>';
    }
}

function submitForm(event) {
    var kleidungsart = document.getElementById("kleidungsart").value;
    var krisengebiet = document.getElementById("krisengebiet").value;
    var bringenOderVersenden = document.getElementById("bringenOderVersenden").value;
    var abholadresse = document.getElementById("abholadresse").value;
    var plz_abholen = document.getElementById("plz_abholen").value;
    var naechteGeschaftsstelle; // Variable zum Speichern des ausgewählten Standortes

    localStorage.setItem("kleidungsart", kleidungsart);
    localStorage.setItem("krisengebiet", krisengebiet);
    localStorage.setItem("bringenOderVersenden", bringenOderVersenden);
    localStorage.setItem("abholadresse", abholadresse);
    localStorage.setItem("plz_abholen", plz_abholen);

    window.location.href = 'thankYouPage.html';
}
