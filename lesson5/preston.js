var d = new Date();
document.getElementById("lastupdated").innerHTML = d;

if ( dName == 'Friday') {
    document.getElementById('marquee').style.display = "block";
}    
else {
    document.getElementById('marquee').style.display = "none";

} 

var header = document.getElementById("navigation");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}