// Daten aus der Session Storage abrufen und in die Thank-You-Seite einfügen
document.getElementById("kleidungsart").innerText = sessionStorage.getItem("kleidungsart");
document.getElementById("krisengebiet").innerText = sessionStorage.getItem("krisengebiet");
document.getElementById("plz").innerText = sessionStorage.getItem("plz");
