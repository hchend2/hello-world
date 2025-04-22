
// by default, the div is hidden
document.getElementById("myDiv3").style.display = "none";

// Function to show the div when the button is clicked
// and hide it when clicked again
// and fade in the div
var myVar = document.getElementById("myButton");

myVar.onclick = function() {
    var thisDiv = document.getElementById("myDiv3");
    if (thisDiv.style.display === "none") {
        fadeIn(thisDiv);
        thisDiv.style.display = "block";
    }
    else {
        thisDiv.style.display = "none";
        
    }
}

// Function to fade in an element
function fadeIn(thisEl) {
    thisEl.style.opacity = 0;
    thisEl.style.transition = "opacity 0.5s ease-in-out";
    setInterval(function() {
        var opacity = thisEl.style.opacity;
        if (opacity < 1) {
            opacity += 0.9;
            thisEl.style.opacity = opacity;
        } else {
            clearInterval(this);
        }
    }, 255);}