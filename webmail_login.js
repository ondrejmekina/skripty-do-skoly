// ==UserScript==
// @name        Webmail TUL Autologin
// @namespace   https://webmail.tul.cz/
// @include     https://webmail.tul.cz/SOGo/
// @version     1
// ==/UserScript==


var USERNAME = "uzivatelske.jmeno";
var PASSWORD = "heslo";


// --------------------------------------------------


USERNAME = USERNAME.replace("\"", "\\\"");
PASSWORD = PASSWORD.replace("\"", "\\\"");

async function query() {
    await fetch("https://webmail.tul.cz/SOGo/connect", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: "{\"userName\":\"" + USERNAME + "\",\"password\":\"" + PASSWORD + "\",\"domain\":null,\"rememberLogin\":1}",
    });
    window.location.reload();
};
query();
