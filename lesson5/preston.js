var d = new Date();
//document.getElementById("lastupdated").innerHTML = d;

function announceMsg() {
var day = d.getDay()
console.log("day", day);
if ( day === 5) {
    var element = document.getElementById('announce')
    element.style.display = "block";
}    
else {
    var element = document.getElementById('announce')
    element.style.display = "none";

}
} 

/*var header = document.getElementById("navigation");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}*/