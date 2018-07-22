// ==UserScript==
// @name          Youtube MP3 Download Button Encrypted
// @namespace     https://youtube.com
// @version       0.2
// @description   Adds a MP3 Download button next to the subscribe button
// @match         https://www.youtube.com/*
// ==/UserScript==
(function() {
 'use strict';
    var url = "";
    window.addEventListener ("load", pageFullyLoaded);
    function pageFullyLoaded()
    {
        var htm;
        setInterval(function(){
        if(url != document.URL)
        {
            url = document.URL;
            htm = '<iframe style="width:100%;min-width:140px;max-width:150px;height:38px;border:0;overflow:hidden;" scrolling="no" src="https//ytbapi.com/dl.php?link='+encodeURI(document.URL)+'&format=mp3&text=fff&color=009688"></iframe>';
            if( document.getElementById("sponsor-button").innerHTML != null)
            {
                document.getElementById("sponsor-button").innerHTML = htm;
            }
        }
        }, 3000);
        if( document.getElementById("sponsor-button").innerHTML != null)
        {
            document.getElementById("sponsor-button").innerHTML = htm;
        }
    }
})();
