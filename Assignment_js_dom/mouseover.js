var a = document.getElementById("demo");
a.addEventListener("mouseover", mouseover)
a.addEventListener("mouseout", mouseout)
function mouseover(){
    a.style.background="red";
}
function mouseout(){
    a.style.background= "yellow";
}