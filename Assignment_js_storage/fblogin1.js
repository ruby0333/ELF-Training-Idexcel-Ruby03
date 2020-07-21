var user ={
    name : "ruby",
    id : 123 ,
    pwd : "ruby" ,
    email : "rubydas0395@gmail.com" ,
    phoneno : 9040398819 ,
    dob : "03-03-1995"
   }
   
   var userId = user.id +""
   localStorage.setItem(userId,JSON.stringify(user))
   var err= document.getElementById("error");
   var err1= document.getElementById("error");
   function validate(){
    var form = document.forms['MyForm']
    console.log(form);
    var id = form['userId'].value
    var pwd = form['pwd'].value
    var userfound = localStorage.getItem(id);
    if(userfound===null) {
       err.innerText="user not found";
       err.style.color="red";
       document.getElementById("user").style.border="red";
       return false;
    } 
    else{
        var current = JSON.parse(userfound);
        if(current['pwd']===pwd){
         localStorage.setItem("current" , userfound)
          form.submit();
        }else{
            err1.innerText="password incorrect ";
            err1.style.color="blue";
            document.getElementById("user1").style.border="red";
            return false;
        }
    }
    
    return false;
  
   }
