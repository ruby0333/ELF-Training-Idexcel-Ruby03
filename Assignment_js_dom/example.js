
var a;
function login(){
    a =document.createElement('div');
    a0 =document.createElement('h1');
    a0.innerText="login here..."
    a.appendChild(a0);
    var a1 = document.createElement('input');   // Create a <button> element
    a1.setAttribute("placeholder", "First Name");
    a.appendChild(a1);
    var a2 =document.createElement('input')
    a2.setAttribute("type", "text");
    a2.setAttribute("placeholder", "Last Name");
    a.appendChild(a2); 
    var a3=document.createElement('input')
    a3.setAttribute("type", "text");
    a3.setAttribute("placeholder", "Phone number");
    a.appendChild(a3); 
    document.body.appendChild(a); 
}
debugger
function clear(){
  a.style.display="none";
  
}

/*-------------------- 2nd way---------------------*/
/*var b = document.getElementById("login")
function login(){
  b.style.display="block";

}
function clear(){
  b.style.display="none";
}*/








