function sendEmail() {
    andiAddress = "andi.erni93@gmail.com";
    andiPassword = "09BD5EFBAEE830A6EC610F06BDEC385CE5B2";
    infoAddress = "info@schiibe-chloepfer.ch";
    infoPassword = "2C9EA0B902B4B7D2BE00D59E819F424F7A3E";
    securityToken = "239e1a84-94cd-4a99-a1ed-4dc3efb2f206";

    subjectString = "Ein neuer Chlöpfer will mit dabei sein.";
    bodyString =    "Vorname: " + getJoinFirstName() + "<br>" +
                    "Name: " + getJoinLastName() + "<br>" +
                    "Adresse: " + getJoinAddress() + "<br>" +
                    "PLZ: " + getJoinPostcode() + "<br>" +
                    "Ort: " + getJoinCity() + "<br>" +
                    "E-Mail: " + getJoinMail() + "<br>" +
                    "Einwilligung: " + getJoinConsent();

    Email.send({
        SecureToken : securityToken,
        To : andiAddress,
        From : infoAddress,
        Subject : subjectString,
        Body : bodyString
    }).then(
        message => {
            if(message == "OK") {
                showSuccess();
            }
            else {
                showError(message);
            }
        }
    );
}

function getJoinFirstName() {
    return document.getElementById("joinFormFirstName").value;
}

function getJoinLastName() {
    return document.getElementById("joinFormLastName").value;
}

function getJoinAddress() {
    return document.getElementById("joinFormAddress").value;
}

function getJoinPostcode() {
    return document.getElementById("joinFormPostcode").value;
}

function getJoinCity() {
    return document.getElementById("joinFormCity").value;
}

function getJoinMail() {
    return document.getElementById("joinFormMail").value;
}

function getJoinConsent() {
    return document.getElementById("joinFormConsent").checked;
}

function validateJoinForm() {
    return;
}

function showSuccess() {
    alert(  "Vielen Dank für deine Anmeldung!\n" +
            "Wir freuen uns, dass du jetzt auch ein Chlöpfer bist!");
}

function showError(message) {
    alert(  "Ups!\n" +
            "Da ist leider etwas schief gelaufen.\n" +
            "Überprüfe bitte deine Angaben.\n" + 
            "Falls dir deine Angaben korrekt erscheinen, kontaktiere uns doch bitte direkt per Mail an folgende E-Mail-Adresse:\n" +
            "info@schiibe-chloepfer.ch\n" + 
            "Vielen Dank für dein Verständnis.");
}
