
function validation(){
  var form = document.forms['myform']
  console.log(form);
  var e = form['email'].value;
  var p = form['password'].value;
  var un= form['uname'].value;
  var er= document.getElementById('err1');
  var er1 =document.getElementById('err2');
  var checkRes = document.getElementById("gridCheck").checked;
  var regEx = /^([a-zA-Z 0-9\.-]{2,20})@([a-z0-9-]+).([a-z]{2,8})$/;
  var regx2 = /^([A-Z]{1})([a-z 0-9]{2,7})$/;
  if(regEx.test(e)===false && e===""){
     document.getElementById('email').style.border = "2px solid red";
    return false;
  }
  else if(regx2.test(p)===false && p===""){
    er1.innerText="invalid password number";
    er1.style.display = ""
    er1.style.color = "red"
    document.getElementById('password').style.border = "2px solid red";
    return false;
    
  }
  else if(un===""){
    document.getElementById('uname').style.border = "2px solid red";
    return false;
  }
  else if(checkRes===false){
    alert("check the box")
    return false
  }
  else{
    alert("form submitted");
  document.form.submit()
  }
}

function validate(){
  var form = document.forms['MyForm']
  console.log(form);
  var use = form['user'].value
  var use1 = form['user1'].value
  console.log(use);
  console.log(use1);
  var regx2 = /^([A-Z]{1})([a-z 0-9]{2,7})$/;
  var regx = /^([a-zA-Z 0-9\.-]{2,20})@([a-z0-9-]+).([a-z]{2,8})$/;
  var err =  document.getElementById('err');
  var err2 = document.getElementById('err2')
  if(use === ""){
    err.innerText = " email not be empty"
    err.style.display = ""
    err.style.color = "red"
    return false;
  }else if( use.length <= 5 ) {
    err.innerText = " Not be less than 5"
    err.style.display = ""
    err.style.color = "red"
    return false;
  }
  else if(regx.test(use)==false){
      err.innerText = "enter a correct email id"
    err.style.display = ""
    err.style.color = "red"
    return false;
  }
  else if(regx2.test(use1)==false && use1===""){
    err2.innerText = "enter a correct password";
    err2.style.display = ""
    err2.style.color = "red"
    document.getElementById('user1').style.border = "2px solid red";
    return false;
  }
 
  else{
    console.log("here");
    document.MyForm.submit()
  }

}


