// ==UserScript==
// @name        
// @author			Dean Turpin
// @description	
// @namespace   deanturpin
// @include			
// @version     1
// @grant       none
// ==/UserScript==

// Create a popup
var popup = document.createElement("div");
var t = document.createTextNode("");
popup.innerHTML += "TITLE"

// Style the popup
var props = "text-align: left; font-family: sans-serif;";
props += "background-color:#555; color:white;";
props += "position:fixed; bottom: 0; right: 0; width: 170px margin: 0px 20px;";
props += "padding: 20px;";
props += "box-shadow: 10px 10px 5px #888;";
props += "border-radius: 10px 10px 0px 0px;";
popup.style = props;

// And render it
popup.appendChild(t);
document.body.appendChild(popup);
