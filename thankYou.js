function onPageLoad() {
    var kleidungsart = localStorage.getItem("kleidungsart");
    var krisengebiet = localStorage.getItem("krisengebiet");
    var bringenOderVersenden = localStorage.getItem("bringenOderVersenden");
    var abholadresse = localStorage.getItem("abholadresse");
    var plz_abholen = localStorage.getItem("plz_abholen");
    var list = localStorage.getItem("adresse", list)
    console.log(kleidungsart, krisengebiet, bringenOderVersenden, abholadresse, plz_abholen);

    console.log(list);

    if (bringenOderVersenden === "bringen"){
        document.getElementById("thankYou_form-group").innerHTML = `<h1 style="text-align:center">Vielen Dank...</h1><h2 class="formular">Bitte bringen Sie Ihre Kleidung an die folgende Adresse: <br> ${list}.</h2>`;
    }
    else if (bringenOderVersenden === "abholen") {
        document.getElementById("thankYou_form-group").innerHTML = `<h2 class="formular">Der Fahrer kommt in den nächste 2 Stunden an der folgenden Adresse: <br> ${abholadresse}. </h2>`
    }
}

    window.addEventListener('load', onPageLoad())