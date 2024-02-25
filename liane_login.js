// ==UserScript==
// @name        Liane Autologin
// @namespace   https://shibbo.tul.cz/
// @include     https://shibbo.tul.cz/idp/profile/SAML2/*
// @version     1
// ==/UserScript==


const USERNAME = "uzivatelske.jmeno";
const PASSWORD = "heslo";


// --------------------------------------------------


document.getElementById("username").value = USERNAME;
document.getElementById("password").value = PASSWORD;
document.getElementsByTagName("button")[0].click();
