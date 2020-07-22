var a;
function create(){
 a = document.getElementById("demo")
 a.innerText="hello";
}

function display(){
    a= document.getElementById("demo");
   // a.innerHTML="good morning";
    alert(a.innerText.innerHTML="good");
}

function deleted(){
a=document.getElementById("demo");
a.remove();
}