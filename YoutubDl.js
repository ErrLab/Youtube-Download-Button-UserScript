// ==UserScript==
// @name          Youtube MP3 Download Button Encrypted
// @namespace     https://youtube.com
// @version       1.1.6
// @description   Adds a MP3 Download button next to the subscribe button
// @match         https://www.youtube.com/*
// @require http://code.jquery.com/jquery-1.12.4.min.js
// @grant    GM_addStyle
// ==/UserScript==
var url = document.URL;
setInterval(function(){
    if(url != document.URL)
    {
        url = document.URL;
        var htm = '<iframe style="width:100%;min-width:140px;max-width:150px;height:38px;border:0;overflow:hidden;" scrolling="no" src="//ytbapi.com/dl.php?link='+encodeURI(document.URL)+'&format=mp3&text=fff&color=009688"></iframe>';
        document.getElementById("sponsor-button").innerHTML = htm;
    }
}, 3000);
 var htm = '<iframe style="width:100%;min-width:140px;max-width:150px;height:38px;border:0;overflow:hidden;" scrolling="no" src="//ytbapi.com/dl.php?link='+encodeURI(document.URL)+'&format=mp3&text=fff&color=009688"></iframe>';
document.getElementById("sponsor-button").innerHTML = htm;


