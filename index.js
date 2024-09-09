document.getElementById("bringenderVersenden").addEventListener("change", function() {
    var option = this.value;
    var abholAdresseContainer = document.getElementById("abholAdresseContainer");
    var geschaeftsstelleContainer = document.getElementById("geschaeftsstelleContainer");

    if (option === "abholen") {
        abholAdresseContainer.style.display = "block";
        geschaeftsstelleContainer.style.display = "none";
    } else if (option === "bringen") {
        geschaeftsstelleContainer.style.display = "block";
        abholAdresseContainer.style.display = "none";
    } else {
        abholAdresseContainer.style.display = "none";
        geschaeftsstelleContainer.style.display = "none";
    }
});

function findLocation() {
    var plz = document.getElementById("plz_bringen").value.trim();

    if (plz.length < 2) {
        document.getElementById("no_location").style.display = "block";
        return;
    }

    var firstTwoDigits = plz.substring(0, 2);

    var locations = {
        "60": "60318 Frankfurt, Bachstraße 15",
        "70": "70176 Stuttgart, Königstraße 44",
        "76": "76530 Baden-Baden, Sophienstraße 105"
    };

    document.getElementById("location_frankfurt").style.display = "none";
    document.getElementById("location_stuttgart").style.display = "none";
    document.getElementById("location_badenbaden").style.display = "none";
    document.getElementById("no_location").style.display = "none";

    if (locations[firstTwoDigits]) {
        sessionStorage.setItem("geschaeftsstelleAdresse", locations[firstTwoDigits]);
        document.getElementById("location_" + firstTwoDigits).style.display = "block";
    } else {
        document.getElementById("no_location").style.display = "block";
    }
}

function saveData(event) {
    event.preventDefault();

    var kleidungsart = document.getElementById("kleidungsart").value;
    var krisengebiet = document.getElementById("krisengebiet").value;
    var versandart = document.getElementById("bringenderVersenden").value;
    var abholadresse = document.getElementById("abholadresse") ? document.getElementById("abholadresse").value : "";
    var plz_bringen = document.getElementById("plz_bringen") ? document.getElementById("plz_bringen").value : "";
    var geschaeftsstelleAdresse = sessionStorage.getItem("geschaeftsstelleAdresse");

    sessionStorage.setItem("kleidungsart", kleidungsart);
    sessionStorage.setItem("krisengebiet", krisengebiet);
    sessionStorage.setItem("versandart", versandart);
    sessionStorage.setItem("abholadresse", abholadresse);
    sessionStorage.setItem("plz_bringen", plz_bringen);

    if (versandart === "bringen") {
        sessionStorage.setItem("geschaeftsstelleAdresse", geschaeftsstelleAdresse);
    }

    window.location.href = "thankyou.html";
}
