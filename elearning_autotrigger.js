// ==UserScript==
// @name        Elearning autotrigger authentication
// @namespace   https://elearning.tul.cz/
// @include     https://elearning.tul.cz/*
// @version     1
// ==/UserScript==


if (document.getElementsByClassName("usermenu")[0].innerHTML.includes("https://elearning.tul.cz/login/index.php")) {
    window.location.href = "https://elearning.tul.cz/auth/shibboleth/index.php";
}
