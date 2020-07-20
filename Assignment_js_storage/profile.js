var current = localStorage.getItem("current");
var demo = document.getElementById("demo");
console.log(current);
if(current===null){
    demo.innerText="please login";

}else{
    var userData = JSON.parse(current)
    demo.innerText= userData.name + userData.Email
    demo.innerText= userData.phoneno
    
}
function logout(){
    localStorage.removeItem("current");
    location.href="./fblogin.html"
}