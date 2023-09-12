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
                    "Art: " + getJoinType() + "<br>" +
                    "Einwilligung: " + getJoinConsent();

    const currentDate = new Date();
    const startDate = new Date("2023-10-01");

    if(currentDate >= startDate) {
        Email.send({
        SecureToken : securityToken,
        To : infoAddress,
        From : infoAddress,
        Subject : subjectString,
        Body : bodyString
        }).then(
            message => {
                if(message == "OK") {
                    showSuccess();
                    clearForm();
                }
                else {
                    showError(message);
                }
            }
        );
    }
    else {
        alert("Leider kannst du dich erst ab dem 1. Oktober 2023 bei uns anmelden.");
    }
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

function getJoinBirthday() {
    return document.getElementById("joinFormBirthday").value;
}

function getJoinType() {
    if(document.getElementById("joinFormActive").checked == true) {
        return "Aktiv";
    }
    else if(document.getElementById("joinFormPassive").checked == true) {
        return "Passiv";
    }
    else {
        return "Gönner";
    }
}

function getJoinConsent() {
    return document.getElementById("joinFormConsent").checked;
}

function showSuccess() {
    alert(  "Vielen Dank für deine Anmeldung!\n" +
            "Wir freuen uns, dass du jetzt auch ein Chlöpfer bist!");
}

function showError(message) {
    alert(  "Ups!\n" +
            "Da ist leider etwas schief gelaufen.\n" +
            "Überprüfe bitte deine Angaben.\n" + 
            "Falls dir deine Angaben korrekt erscheinen, versuche es gleich nochmal." +
            "Sollte dies auch scheitern, kontaktiere uns doch bitte direkt per Mail an folgende E-Mail-Adresse:\n" +
            "info@schiibe-chloepfer.ch\n" + 
            "Vielen Dank für dein Verständnis.\n\n" +
            "Error: " + message);
}

function clearForm() {
    document.getElementById("joinFormFirstName").value = "";
    document.getElementById("joinFormLastName").value = "";
    document.getElementById("joinFormAddress").value = "";
    document.getElementById("joinFormPostcode").value = "";
    document.getElementById("joinFormCity").value = "";
    document.getElementById("joinFormMail").value = "";
    document.getElementById("joinFormBirthday").value = "";
    document.getElementById("joinFormMessage").value = "";
    document.getElementById("joinFormActive").checked = false;
    document.getElementById("joinFormPassive").checked = false;
    document.getElementById("joinFormGoenner").checked = false;
    document.getElementById("joinFormConsent").checked = false;
}
